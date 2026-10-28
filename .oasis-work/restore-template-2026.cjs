const fs=require('fs'),path=require('path'),c=require('cheerio'),sharp=require('sharp');
const root='.oasis-work/template-from-zip';
const overview='Oasis connects smallholder farmers with quality inputs, Oatech digital information, advisory services, financial linkages and produce markets.';
const model='Our model combines more than 100 Village Agents and rural outlets with Oatech to bring agricultural products, knowledge and market connections closer to underserved communities.';
const mission='To empower smallholder farmers through accessible, affordable, and innovative agricultural inputs, technology-enabled advisory services, market linkages, and sustainable agribusiness solutions.';
const vision='A productive, inclusive, and climate-resilient agricultural sector that creates sustainable livelihoods and economic opportunities for farming communities.';
const services=[['Agricultural Inputs','Certified seeds, agrochemicals, farm tools and essential supplies through local distribution channels.','inputs'],['Oatech Digital Agriculture','Agricultural learning, farmer engagement, market information, weather and agronomic information.','digital'],['Village Agent Network','More than 100 Village Agents and rural outlets bring products and services closer to farmers.','network'],['Produce & Market Access','Produce buying, grain aggregation and buyer linkages connect farmers with market opportunities.','markets'],['Advisory & Plant Health','Practical extension support, soil-health knowledge, pest management and climate-smart practices.','resilience'],['Finance & Insurance Linkages','Connections to relevant financial and insurance providers support production and risk management.','finance']];
function setText($,el,text){let nodes=[];function walk(e){for(const n of e.children||[]){if(n.type==='text')nodes.push(n);else if(n.type==='tag'&&!['svg','i'].includes(n.tagName))walk(n)}}walk(el);if(nodes.length){nodes.forEach(n=>n.data='');nodes[0].data=text}else $(el).prepend(text)}
function replaceText($,from,to){$('body *').each((i,e)=>{for(const n of e.children||[])if(n.type==='text')n.data=n.data.split(from).join(to)})}
const globalMap={
'2015':'2018',
'Established in 2018 and registered on 24 July 2018':'Established in 2018 with headquarters in Kole District, Northern Uganda',
'Oasis Agribusiness (U) Limited is an Agri-Technology company. Established in 2018 with headquarters in Kole District, Northern Uganda, we deliver agricultural products and services through agents and rural outlets.':'Established in 2018, Oasis Agribusiness (U) Limited is a Ugandan agri-technology enterprise headquartered in Kole District. We connect farmers with products, information, advice and markets.',
'To empower and transform agricultural communities through innovative Agri-Technology solutions, comprehensive support services, and sustainable practices.':mission,
'To be the leading catalyst for agricultural advancement and empowerment through Agri-Technology, sustainable practices and inclusive solutions.':vision,
'Our agent and rural outlet model connects farmers with high-quality seeds, agro-chemicals, farm tools and agro insurance, alongside field-based support, electronic learning, financial linkages and enterprise development.':model,
'Oasis connects farmers with inputs, field-based support, learning platforms, financial linkages and enterprise services.':overview,
'Agricultural products, farmer learning and support through agents and rural outlets.':'Inputs, practical knowledge and market connections for Northern Uganda’s farming communities.',
'Agri-Technology, agricultural products and farmer support through agents and rural outlets.':'Inputs, Oatech digital agriculture, advisory support and market connections across Northern Uganda.',
'Agricultural products and farmer support through agents, rural outlets and Agri-Technology.':'Quality inputs, practical knowledge and stronger market connections for Northern Uganda’s farmers.',
'Agri-Technology for agricultural communities':'Agricultural opportunity through local connections',
'We are building future':'Growing agricultural opportunity',
'Together, Be with us':'Together with communities',
'Software Solutions':'Oatech Digital Agriculture',
'Enterprise Digital Platforms':'Oatech Digital Agriculture',
'Documented Programmes and Activities':'Our Agricultural Approach',
'Programmes and Activities':'Our Agricultural Approach',
'Documented Programmes':'Our Agricultural Approach',
'Documented Programme Activities':'Growing Climate-Smart Opportunity',
'Programme Information':'Our Approach at a Glance',
'Northern Uganda Horticulture Market Acceleration':'Climate Resilience and Rural Opportunity',
'NU-HortiMAP':'Climate-Smart Agriculture',
'FtF-IAM':'Inclusive Market Access',
'NU-TEC MD':'Rural Entrepreneurship',
'Agent Capacity Building':'Village Agent Network',
'Maintain wireless scerios after sure quality vectors future':'Practical products and local support for farming communities.',
'Empowerment Innovation Sustainability Community Impact Integrity Collaboration':'Integrity Innovation Sustainability Customer Focus Teamwork',
'From banking and insurance to wealth the management and security on there':'Connecting farmers with agricultural products, knowledge and markets.',
'Many of those products offer the potential not just to move your business':'Connecting farmers with products, knowledge and markets',
'We would love to share similar experience':'Building stronger rural connections',
'We would love to share a similar experience':'Building stronger rural connections',
'Business Solution':'Agricultural Services',
'Products and Services Together':'Integrated Agricultural Services',
'Our Happy Customer':'Our Core Values',
'We are committed to empowerment, innovation, sustainability, community impact, integrity and collaboration.':'Integrity, innovation, sustainability, customer focus and teamwork guide our work.',
'Farm tools and agro insurance':'Farm tools and insurance linkages',
'Enterprise development and software':'Produce aggregation and market access',
'Recent Posts':'Farmer Resources','Recent Post':'Farmer Resources',
'Programme:':'Focus:','Partners:':'Model:','Period:':'Established:',
};
const manifest=[];const imageCache=new Map();
async function crop(src,scene){const k=src+'|'+scene;if(imageCache.has(k))return imageCache.get(k);if(!fs.existsSync(src))return src;const meta=await sharp(src).metadata();if(!meta.width||!meta.height)return src;const dest='assets/images/oasis-template/'+scene+'-'+path.basename(path.dirname(src))+'-'+path.basename(src,path.extname(src))+'.webp';await sharp('assets/images/oasis-2026/'+scene+'.webp').resize(meta.width,meta.height,{fit:'cover',position:sharp.strategy.attention}).webp({quality:85}).toFile(dest);imageCache.set(k,dest);manifest.push({original:src,updated:dest,scene,width:meta.width,height:meta.height});return dest;}
function chooseScene(src){const n=Number(path.basename(src).match(/\d+/)?.[0]||1);if(/banner\/|banner-bg/.test(src))return n%2?'hero':'story';if(/about/.test(src))return n%2?'network':'digital';if(/team/.test(src))return ['network','markets','digital','resilience','inputs','finance','story','soil'][(n-1)%8];if(/project/.test(src))return ['resilience','markets','inputs','network','finance','digital'][(n-1)%6];if(/blog/.test(src))return ['digital','inputs','finance','markets','network','resilience'][(n-1)%6];if(/counter/.test(src))return ['network','story','inputs','soil'][(n-1)%4];if(/faq/.test(src))return ['resilience','soil','network'][(n-1)%3];if(/cta/.test(src))return 'network';if(/services/.test(src))return ['inputs','digital','network','markets','resilience','finance'][(n-1)%6];if(/gallery/.test(src))return ['inputs','digital','markets','resilience','network','soil'][(n-1)%6];if(/testimonial|author/.test(src))return 'network';return null;}
(async()=>{
fs.mkdirSync('.oasis-work/before-template-restoration',{recursive:true});for(const f of fs.readdirSync('.').filter(f=>f.endsWith('.html')))fs.copyFileSync(f,'.oasis-work/before-template-restoration/'+f);
// Restore the ZIP's complete assets before applying typography and image changes.
fs.cpSync(root+'/assets','assets',{recursive:true,force:true});
fs.mkdirSync('assets/images/oasis-template',{recursive:true});
let css=fs.readFileSync(root+'/assets/css/style.css','utf8');css=css.replace(/^@import url\([^\n]+\);\r?\n/gm,'');css=css.replace(/"Inter Tight"|"Inter"|"DM Sans"/g,'"Jost"');css='@font-face{font-family:"Jost";src:url("../fonts/jost-latin-variable.woff2") format("woff2");font-weight:100 900;font-style:normal;font-display:swap;}\n'+css;css+='\n/* Typography only: preserve all original template layout and design rules. */\n:root{--font-primary:"Jost";--font-secondary:"Jost";--font-dm:"Jost";}\nbody,input,button,select,textarea{font-family:"Jost";}\n';fs.writeFileSync('assets/css/style.css',css);
// Self-host Jost; no external font request is needed by visitors.
const fontCss=await(await fetch('https://fonts.googleapis.com/css2?family=Jost:wght@100..900&display=swap',{headers:{'User-Agent':'Mozilla/5.0'}})).text();const urls=[...fontCss.matchAll(/url\((https:[^)]+)\)/g)].map(x=>x[1]);if(!urls.length)throw Error('No Jost font URL');const font=await(await fetch(urls.at(-1))).arrayBuffer();fs.writeFileSync('assets/fonts/jost-latin-variable.woff2',Buffer.from(font));
for(const f of fs.readdirSync(root).filter(f=>f.endsWith('.html'))){const $=c.load(fs.readFileSync(root+'/'+f,'utf8'));
for(const [a,b]of Object.entries(globalMap))replaceText($,a,b);
// Replace repeated descriptions with context-specific, profile-based copy.
$('.service-item,.single-service-item').each((i,e)=>{const s=services[i%6];$(e).find('h3.title,h2.title').first().each((j,h)=>setText($,h,s[0]));$(e).find('p.desc').first().each((j,p)=>setText($,p,s[1]));});
$('.single-contact-stats').each((i,e)=>{const vals=[['2018','Year established'],['100','More than 100 Village Agents'],['4','Northern Uganda subregions'],['6','Integrated service areas']][i%4];$(e).find('.counter').text(vals[0]);if(i===1){const span=$(e).find('.counter');if(span.next('span[data-stat-suffix]').length===0)span.after('<span data-stat-suffix="true">+</span>')}$(e).find('p.desc').text(vals[1]);});
$('.counter-no .counter').text('2018');
$('h3.title').filter((i,e)=>/Projects Done|Happy Clients/.test($(e).text())).each((i,e)=>{const isAgent=/Projects Done/.test($(e).text());$(e).find('.counter').text(isAgent?'100':'4');for(const n of e.children||[])if(n.type==='text')n.data=isAgent?' + Village Agents':' Northern Subregions';$(e).parent().find('p.desc').text(isAgent?'More than 100 Village Agents, supported by rural outlets and digital channels.':'Serving Lango, Acholi, Karamoja and West Nile.');});
$('.accordion-body').each((i,e)=>setText($,e,[model,'We serve Northern Uganda’s Lango, Acholi, Karamoja and West Nile subregions, including women, young people, refugees and host communities.','Call 0393 238073 or email oasisagroagent@gmail.com. Our contact office is at Plot 63-69, Women Peace House Suite 2, Lira City. Headquarters: Kole District.'][i%3]));
$('h3.title.cw').filter((i,e)=>/to for available/.test($(e).text())).each((i,e)=>setText($,e,'Connect with Oasis for agricultural enquiries and partnerships'));
$('a[href^="tel:"]').each((i,e)=>{if(/Agricultural Inputs|^\s*$/.test($(e).text()))setText($,e,'0393 238073')});
if(f==='about.html'){$('p.desc').filter((i,e)=>/leading catalyst|Agri-Technology company|registered on/.test($(e).text())).each((i,e)=>setText($,e,'Established in 2018, Oasis is a Ugandan agri-technology enterprise headquartered in Kole District. Our network combines more than 100 Village Agents, rural outlets and Oatech.'));}
if(f==='index.html'){$('h1.title').each((i,e)=>setText($,e,i?'Connected Markets For Rural Enterprise':'Growing Opportunity For Your Farm'));}
if(f==='project-details.html'){
$('.name').each((i,e)=>setText($,e,['Climate-Smart Agriculture','Village Agents + Oatech','2018','Northern Uganda'][i%4]));
$('p.mb-35').first().text('Oasis promotes climate-smart agriculture through drought-tolerant and early-maturing seeds, integrated pest management, soil-health knowledge and timely weather and agronomic information. These activities help farmers make informed decisions and manage climate-related risks.');
$('p').filter((i,e)=>/Feed the Future|DAI|USAID/.test($(e).text())).text('Our agricultural commercialisation approach connects quality inputs and advisory support with produce buying, grain aggregation and buyer linkages. We focus on strengthening supply chains and helping farmers participate in commercially viable markets.');
$('p.desc').filter((i,e)=>/Palladium|UKAID/.test($(e).text())).text('Our Village Agent and rural outlet model creates opportunities in input distribution, farmer engagement and services. Growth priorities include stronger logistics, inventory availability, produce aggregation capacity and inclusive rural enterprise.');
}
if(f==='blog-details.html'){$('h3').filter((i,e)=>$(e).text().startsWith('Oasis Agribusiness (U) Limited is')).each((i,e)=>setText($,e,'Local agents and Oatech connect farmers with inputs, information and markets.'));$('h4').filter((i,e)=>$(e).text()==='Our Mission').text('Our Mission');}
// Keep source content current and preserve existing contact addresses.
$('a[href$="About Oasis.pdf"]').attr('href','assets/documents/oasis-company-profile.pdf');
$('meta[name="description"],meta[property="og:description"],meta[name="twitter:description"]').attr('content',overview);
$('link[href*="fonts.googleapis.com"],link[href="assets/css/oasis-2026.css"],script[src="assets/js/oasis-2026.js"]').remove();
for(const e of $('[src],[data-bg-src],a.gallery-image[href]').toArray()){const el=$(e);for(const attr of ['src','data-bg-src',...(el.hasClass('gallery-image')?['href']:[])]){const src=el.attr(attr);if(!src||!src.startsWith('assets/images/')||!/\.(webp|png|jpe?g)$/i.test(src)||/logo|icon|shape|brand|favicon|triangle|circle/.test(src))continue;const scene=chooseScene(src);if(!scene)continue;const dest=await crop(src,scene);el.attr(attr,dest);if(attr==='src')el.attr('alt','AI-generated illustration: '+({hero:'farmer and advisor in a maize field',story:'Northern Uganda farming landscape',inputs:'agricultural seeds and supplies',digital:'farmers learning with a digital device',markets:'produce aggregation and grain handling',network:'community agricultural agent network',resilience:'crop advisory and plant health',finance:'agricultural finance discussion',soil:'soil health and a healthy seedling'}[scene])).attr('data-image-origin','ai-generated');if(attr==='data-bg-src'&&el.attr('style'))el.attr('style',el.attr('style').split(src).join(dest));}}
// Place the disclosure in an existing text slot without adding layout sections.
$('p.copyright').each((i,e)=>setText($,e,'© Oasis Agribusiness (U) Limited. All rights reserved. Generated images are illustrative.'));
fs.writeFileSync(f,$.html());
}
fs.mkdirSync('assets/documents',{recursive:true});fs.copyFileSync('C:/Users/stv/Downloads/ABOUT US.pdf','assets/documents/oasis-company-profile.pdf');
fs.writeFileSync('handover/template-image-updates.json',JSON.stringify(manifest,null,2));console.log('Restored ZIP template; updated content and '+manifest.length+' dimension-matched images; self-hosted Jost.');
})();
