const fs=require('fs'),path=require('path'),cheerio=require('cheerio'),{chromium}=require('playwright');
(async()=>{
 const pages=fs.readdirSync('.').filter(f=>f.endsWith('.html'));
 const report={pages,brokenLinks:[],alternateLinks:[],browser:[],errors:[]};
 for(const f of pages){const $=cheerio.load(fs.readFileSync(f,'utf8'));
  $('[src],[href],[data-bg-src]').each((i,e)=>{for(const attr of ['src','href','data-bg-src']){
   const v=$(e).attr(attr);if(!v||/^(https?:|mailto:|tel:|data:|#)/.test(v))continue;
   if(!fs.existsSync(v.split('#')[0]))report.brokenLinks.push({f,v});
   if(/(?:index-(?:two|three)|onepage-|contact-(?:two|three)|blog-list)\.html/.test(v))report.alternateLinks.push({f,v});
  }});
 }
 const browser=await chromium.launch({channel:'chrome',headless:true});const p=await browser.newPage();
 p.on('pageerror',e=>report.errors.push(e.message));
 for(const f of pages)for(const width of [1440,390]){
  await p.setViewportSize({width,height:900});await p.goto('http://127.0.0.1:4173/'+f,{waitUntil:'load'});await p.waitForTimeout(350);
  report.browser.push({f,width,...await p.evaluate(async()=>{
   const backgrounds=[...document.querySelectorAll('[data-bg-src]')].map(e=>e.getAttribute('data-bg-src'));
   const bgErrors=[];await Promise.all(backgrounds.map(src=>new Promise(resolve=>{const im=new Image();im.onload=resolve;im.onerror=()=>{bgErrors.push(src);resolve()};im.src=src})));
   return {overflow:document.documentElement.scrollWidth>innerWidth,brokenImages:[...document.images].filter(i=>!i.complete||!i.naturalWidth).map(i=>i.src),brokenBackgrounds:bgErrors};
  })});
  if(f==='index.html')await p.screenshot({path:`.oasis-work/final-home-${width}.png`,fullPage:true});
 }
 await p.goto('http://127.0.0.1:4173/index.html');await p.waitForTimeout(600);
 await p.locator('.menu-toggle').click();report.mobileMenu=await p.locator('.rts-offcanvas-area').evaluate(e=>e.classList.contains('active'));
 report.mobileHomeLinks=await p.locator('.rts-offcanvas-menu a').evaluateAll(es=>es.filter(e=>e.textContent.trim()==='Home').map(e=>e.getAttribute('href')));
 report.slider=await p.locator('.rts-banner-slider-three').evaluate(e=>!!e.swiper);
 await browser.close();fs.writeFileSync('handover/page-selection-checks.json',JSON.stringify(report,null,2));
 console.log(JSON.stringify(report,null,2));
})();
