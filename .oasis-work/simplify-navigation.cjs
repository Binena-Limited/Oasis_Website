const fs=require('fs'),path=require('path'),cheerio=require('cheerio');
const pages=fs.readdirSync('.').filter(f=>f.endsWith('.html'));
for(const f of pages){
 const before=fs.readFileSync(f,'utf8'),dom=cheerio.load(before);
 const backup=path.join('.oasis-work/before-navigation-update',f);fs.mkdirSync(path.dirname(backup),{recursive:true});if(!fs.existsSync(backup))fs.writeFileSync(backup,before);
 dom('.main-nav-area > ul > li').each((i,e)=>{
  const item=dom(e),link=item.children('a').first(),label=link.text().trim().toLowerCase();
  if(label==='pages')link.text('About').attr('href','about.html');
  if(['services','serives','projects'].includes(label)){
   item.children('ul').remove();item.removeClass('has-dropdown');
   link.text(label==='projects'?'Projects':'Services').attr('href',label==='projects'?'project.html':'service.html');
  }
 });
 if(f==='project.html')dom('.single-project-item').each((i,e)=>{
  const card=dom(e);
  card.find('a[href^="service-details.html"]').attr('href','project-details.html');
  const href=card.find('.title a').first().attr('href');
  const thumb=card.find('.thumb').first();
  if(href&&!thumb.find('a').length)thumb.wrapInner(dom('<a></a>').attr('href',href).attr('aria-label','View '+card.find('.title').text().trim()));
 });
 fs.writeFileSync(f,dom.html());
}
console.log('Updated navigation on '+pages.length+' pages; project thumbnails link to project details.');
