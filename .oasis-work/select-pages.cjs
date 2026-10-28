const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');
const backup = '.oasis-work/before-page-selection';
fs.mkdirSync(backup, {recursive:true});
const pages = fs.readdirSync('.').filter(f => f.endsWith('.html'));
for (const f of pages) if (!fs.existsSync(path.join(backup,f))) fs.copyFileSync(f,path.join(backup,f));
fs.copyFileSync(path.join(backup,'index-three.html'),'index.html');
const alternatives = ['index-two.html','index-three.html','onepage-one.html','onepage-two.html','onepage-three.html','contact-two.html','contact-three.html','blog-list.html','NullPHPscript.com.html'];
const canonical = Object.fromEntries(alternatives.map(f => [f, f.startsWith('contact') ? 'contact.html' : f.startsWith('blog') ? 'blog.html' : 'index.html']));
for(const f of pages.filter(f=>!alternatives.includes(f))) {
  const $ = cheerio.load(fs.readFileSync(f,'utf8'));
  // Remove entire template chooser branches, leaving the existing navigation styling.
  $('.main-nav-area > ul > li').each((i,e)=>{
    const item=$(e), a=item.children('a').first(), label=a.text().trim();
    if(label==='Home'||label==='Contact') {
      item.removeClass('has-dropdown'); item.children('ul').remove();
      a.attr('href', label==='Home'?'index.html':'contact.html').text(label);
    }
  });
  $('a[href="blog-list.html"]').each((i,e)=>{const li=$(e).parent('li');if(li.length)li.remove();});
  $('a[href]').each((i,e)=>{
    const a=$(e), value=a.attr('href'), [file, hash]=value.split('#');
    if(canonical[file]) a.attr('href',canonical[file]+(hash?'#'+hash:''));
  });
  // Give backgrounds an initial image even before the template JavaScript runs.
  $('[data-bg-src]').each((i,e)=>{
    const el=$(e), src=el.attr('data-bg-src');
    let style=(el.attr('style')||'').replace(/background-image\s*:[^;]+;?/g,'');
    el.attr('style',style+`;background-image:url('${src}');background-size:cover;background-position:center;background-repeat:no-repeat;`);
  });
  fs.writeFileSync(f,$.html());
}
const archive = '.oasis-work/unused-examples';
fs.mkdirSync(archive,{recursive:true});
for(const f of alternatives) if(fs.existsSync(f)) fs.renameSync(f,path.join(archive,f));
console.log('Selected Home Three, Contact One, resource grid; archived '+alternatives.length+' unused examples.');
