const fs=require('fs'),path=require('path'),sharp=require('sharp'),cheerio=require('cheerio');
const base='C:/Users/stv/.codex/generated_images/01a16872-cecf-7b82-9292-98ca69a39829/';
const sources={farm:'exec-ecff1dcc-de2d-4294-ab27-82afdc55540c.png',training:'exec-c29ddb53-6bd3-4155-974c-4a5b9cd04600.png',harvest:'exec-5e09d084-9610-4b98-932b-3d830365b47d.png',irrigation:'exec-03591214-2d24-4e8d-b289-91d7b89051b3.png'};
const alts={farm:'Illustration: farmer inspecting maize in a Ugandan farm setting',training:'Illustration: farmers learning about seedlings at a demonstration plot',harvest:'Illustration: maize, beans and fresh vegetables after harvest',irrigation:'Illustration: farmer checking a drip-irrigated vegetable plot'};
const dir='assets/images/generated'; fs.mkdirSync(dir,{recursive:true});
const mapping=new Map(),manifest=[];
function scene(src){
 const n=Number(path.basename(src).match(/\d+/)?.[0]||1);
 if(/banner\/bg-7/.test(src))return 'farm';
 if(/banner\/bg-8/.test(src))return 'harvest';
 if(/about\/0[34]/.test(src))return n===3?'training':'irrigation';
 if(/cta\/04/.test(src))return 'training';
 if(/team\//.test(src))return ['training','harvest','farm','irrigation'][(n-1)%4];
 if(/project\//.test(src))return ['irrigation','training','harvest',null,'farm',null,'irrigation','training'][n-1]||null;
 if(/blog\/\d+\./.test(src))return ['harvest','training','irrigation',null][(n-1)%4];
 if(/faq\/[123]\./.test(src))return ['irrigation','harvest','training'][n-1];
 if(/services\/(0[1245789]|1[01])\./.test(src))return ['harvest','training','irrigation',null][(n-1)%4];
 return null;
}
(async()=>{
 for(const [name,file] of Object.entries(sources))await sharp(base+file).webp({quality:88}).toFile(`${dir}/${name}-original.webp`);
 for(const f of fs.readdirSync('.').filter(f=>f.endsWith('.html'))){
  const $=cheerio.load(fs.readFileSync(f,'utf8'));
  for(const e of $('[src],[data-bg-src]').toArray()){
   const el=$(e),attr=el.attr('data-bg-src')?'data-bg-src':'src',src=el.attr(attr),name=scene(src);
   if(!name)continue;
   if(!mapping.has(src)){
    const {width,height}=await sharp(src).metadata();
    const dest=`${dir}/${name}-${path.basename(path.dirname(src))}-${path.basename(src,path.extname(src))}.webp`;
    await sharp(base+sources[name]).resize(width,height,{fit:'cover',position:sharp.strategy.attention}).webp({quality:85}).toFile(dest);
    mapping.set(src,dest);manifest.push({asset:dest,source:sources[name],scene:name,width,height,generated:true});
   }
   const dest=mapping.get(src);el.attr(attr,dest);
   if(attr==='src')el.attr('alt',alts[name]).attr('data-image-origin','ai-generated');
   else el.attr('style',(el.attr('style')||'').replace(src,dest));
  }
  fs.writeFileSync(f,$.html());
 }
 fs.writeFileSync('handover/generated-image-manifest.json',JSON.stringify(manifest,null,2));
 console.log(`Placed ${mapping.size} dimension-matched images from four new generated scenes.`);
})();
