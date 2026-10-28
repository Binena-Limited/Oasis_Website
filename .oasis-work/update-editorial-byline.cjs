const fs=require('fs'),c=require('cheerio');
const pages=fs.readdirSync('.').filter(f=>f.endsWith('.html'));
function text($,e,value){const nodes=[];function walk(el){for(const n of el.children||[]){if(n.type==='text')nodes.push(n);else if(n.type==='tag'&&!['i','svg'].includes(n.tagName))walk(n)}}walk(e);if(nodes.length){nodes.forEach(n=>n.data='');nodes[0].data=' '+value}else $(e).append(' '+value)}
const report={pages:[],posts:0,sourceReferences:[],invalidBylines:[],brokenLinks:[],layoutChanges:[]};
for(const f of pages){const original=fs.readFileSync(f,'utf8'),$=c.load(original);const before=$('body *').toArray().map(e=>[e.tagName,$(e).attr('style')||'']);
// Link readers to the relevant public page instead of the source document.
$('a[href]').each((i,e)=>{if(/company[-\s]*profile|about oasis\.pdf/i.test($(e).attr('href'))){const inService=$(e).closest('.download-widget').length;$(e).attr('href',inService?'service.html':'about.html');text($,e,inService?'Explore Our Services':'About Oasis');}});
$('.single-blog').each((i,e)=>{const card=$(e);let author=card.find('.blog-meta li').filter((j,n)=>$(n).find('i[class*="user"]').length).first();if(!author.length){author=card.find('.blog-meta li').first();author.find('i').attr('class','fa-light fa-user');}if(author.length)text($,author[0],'Posted by Walter O.');card.find('.meta').each((j,n)=>text($,n,'Posted by Walter O.'));card.find('.author-info .name').text('Walter O.');card.find('.date').each((j,n)=>text($,n,'Agricultural Insights'));card.find('.blog-meta li').filter((j,n)=>$(n).find('i[class*="clock"]').length).each((j,n)=>{text($,n,'Agricultural Insights');$(n).find('i').attr('class','fa-light fa-book-open');});report.posts++;});
$('.inner-content-blog-details > .blog-meta li').filter((i,e)=>$(e).find('i[class*="user"]').length).each((i,e)=>text($,e,'Posted by Walter O.'));
$('.inner-content-blog-details > .blog-meta li').filter((i,e)=>$(e).find('i[class*="clock"]').length).each((i,e)=>{text($,e,'Agricultural Insights');$(e).find('i').attr('class','fa-light fa-book-open');});
$('.inner-content-blog-details > .author-area .content > span').text('Posted by');
$('.inner-content-blog-details > .author-area .content > h4').text('Walter O.');
$('.inner-content-blog-details > .author-area .content > p').text('Practical insights on agricultural inputs, digital farming, rural enterprise and market access.');
$('.inner-content-blog-details .qoute-wrapper > span').text('Our Commitment');
$('.single-post .date,.recent-post .date,.post-item .date').each((i,e)=>{text($,e,'Posted by Admin');$(e).find('i').attr('class','fa-light fa-user');});
// Clean all remaining source labels, including sidebar and footer text.
$('body *').each((i,e)=>{for(const n of e.children||[])if(n.type==='text')n.data=n.data.replace(/Company\s+Profile/gi,'Agricultural Insights').replace(/Oasis\s+Profile/gi,'Walter O.').replace(/Documented programme activity/gi,'Agricultural development').replace(/(?:Its|The) company profile describes/gi,'Our work spans');});
$('.download-widget .widget-title').text('Explore Oasis');$('.download-widget .subtitle').text('Learn More');
$('meta[name="author"]').attr('content','Walter O.');
const output=$.html();if(/company[\s-]*profile|oasis\s+profile/i.test(output))report.sourceReferences.push(f);
$('.single-blog').each((i,e)=>{if(!/Posted by (Walter O\.|Admin)/.test($(e).text()))report.invalidBylines.push({f,i});});
const after=$('body *').toArray().map(e=>[e.tagName,$(e).attr('style')||'']);if(JSON.stringify(before)!==JSON.stringify(after))report.layoutChanges.push(f);
fs.writeFileSync(f,output);report.pages.push(f);
}
for(const f of pages){const $=c.load(fs.readFileSync(f,'utf8'));$('a[href]').each((i,e)=>{const h=$(e).attr('href');if(!/^(https?:|mailto:|tel:|#|javascript:)/.test(h)&&!fs.existsSync(h.split('#')[0]))report.brokenLinks.push({f,h});});}
fs.writeFileSync('handover/editorial-update-checks.json',JSON.stringify(report,null,2));console.log(JSON.stringify(report,null,2));if(report.sourceReferences.length||report.invalidBylines.length||report.layoutChanges.length||report.brokenLinks.length)process.exitCode=1;
