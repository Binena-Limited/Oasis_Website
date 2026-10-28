const fs=require('fs'),path=require('path');
const colors={'#3358d3':'#087b25','#e7eaf2':'#edf4eb','#e4e8f8':'#dfebdf','#e3eafa':'#e7f1e5','#e9e9f2':'#e6eee3','#ebf0ff':'#edf5e9','#e3e7f0':'#e1eadf','#eeefff':'#edf5e9','#e2e6f2':'#e2ecdf','#ebefff':'#edf5e9','#fbfbff':'#fcfdf9','#e5e6f9':'#e4eddf','#e3e7f5':'#e3eddf','#e3e8f5':'#e3eddf','#eaebf9':'#e8f1e3'};
function walk(dir){return fs.readdirSync(dir,{withFileTypes:true}).flatMap(e=>e.isDirectory()?walk(path.join(dir,e.name)):[path.join(dir,e.name)]);}
let changed=[];
for(const f of ['assets/css/style.css',...walk('assets/scss').filter(f=>/\.(scss|css)$/.test(f)),...walk('assets/images').filter(f=>f.endsWith('.svg')&&!f.includes('logo'))]){
 const before=fs.readFileSync(f,'utf8');let after=before.replace(/#[\da-f]{6}\b/gi,c=>colors[c.toLowerCase()]||c).replace(/51,\s*88,\s*211/g,'8, 123, 37').replace(/171,\s*190,\s*253/g,'183, 214, 170');
 if(after!==before){const dest=path.join('.oasis-work/before-brand-colors',f);fs.mkdirSync(path.dirname(dest),{recursive:true});if(!fs.existsSync(dest))fs.writeFileSync(dest,before);fs.writeFileSync(f,after);changed.push(f);}
}
console.log('Updated theme colors in '+changed.length+' stylesheet and vector assets.');
