const {chromium}=require('playwright');
(async()=>{
 const b=await chromium.launch({channel:'chrome',headless:true}),p=await b.newPage({viewport:{width:390,height:900}});
 await p.goto('http://127.0.0.1:4173/index.html');await p.waitForTimeout(1200);await p.locator('.menu-toggle').click();
 const nav=p.locator('.rts-offcanvas-menu');
 console.log('Mobile menu',await nav.locator('nav > ul > li').evaluateAll(es=>es.map(e=>({text:e.querySelector('a').textContent.trim(),dropdown:!!e.querySelector('ul')}))));
 await nav.getByRole('link',{name:'Services',exact:true}).click();await p.waitForURL('**/service.html');await p.waitForTimeout(700);
 await p.locator('a[href="service-details.html"]').filter({hasText:'Read More'}).first().click();await p.waitForURL('**/service-details.html');console.log('Service card opens details: pass');
 await p.goto('http://127.0.0.1:4173/project.html');await p.waitForTimeout(700);
 await p.locator('.single-project-item .thumb a').first().click();await p.waitForURL('**/project-details.html*');console.log('Project thumbnail opens details: pass');
 await b.close();
})();
