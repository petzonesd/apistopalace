import {isPublishable} from './species.mjs';
const levels={beginner:0,intermediate:1,advanced:2};
export function findMatches(input, records) {
  const errors=[]; const values={};
  const bounds={litres:[1,100000],length:[1,10000],width:[1,10000],ph:[0,14],gh:[0,50],temperature:[5,40]};
  for(const [k,[min,max]] of Object.entries(bounds)) {
    const raw=input[k]; const n=Number(raw);
    if(raw===null||raw===undefined||String(raw).trim()===''||!Number.isFinite(n)||n<min||n>max) errors.push(`Enter a valid ${k} value (${min}–${max}).`);
    values[k]=n;
  }
  for(const [key,allowed] of Object.entries({experience:Object.keys(levels),community:['peaceful','species','shrimp'],breeding:['observe','breed'],visual:['any','red','blue','yellow','fins']})) if(!allowed.includes(input[key])) errors.push(`Choose a valid ${key} option.`);
  if(errors.length) return {matches:[],excluded:[],errors};
  const matches=[],excluded=[];
  for(const s of records.filter(isPublishable)) {
    const reject=[];
    if(values.litres<s.tankLitres) reject.push(`Plan at least ${s.tankLitres} L for this species.`);
    const footprint=[values.length,values.width].sort((a,b)=>b-a);
    if(footprint[0]<s.footprint[0]||footprint[1]<s.footprint[1]) reject.push(`Needs a footprint of at least ${s.footprint.join(' × ')} cm.`);
    for(const k of ['ph','gh','temperature']) if(values[k]<s[k][0]||values[k]>s[k][1]) reject.push(`${k==='ph'?'pH':k==='gh'?'GH':'Temperature'} is outside our ${s[k].join('–')} ${k==='temperature'?'°C':k==='gh'?'dGH':''} planning range.`);
    if(levels[input.experience]<levels[s.difficulty]) reject.push(`Rated for ${s.difficulty} keepers.`);
    if(input.community==='peaceful'&&!s.community) reject.push('A dedicated species setup is preferred.');
    if(input.community==='shrimp') reject.push('No Apistogramma is a reliable shrimp-safe choice.');
    if(reject.length){excluded.push({species:s,reasons:reject});continue;}
    let score=50;
    const reasons=[`Your volume and footprint meet the ${s.tankLitres} L / ${s.footprint.join(' × ')} cm planning minimum.`,`Your pH, GH and temperature fall within the aquarium targets.`,`Matches your ${input.experience} experience level.`];
    const cautions=['Territorial behavior increases around spawning; keep a separation option ready.'];
    if(input.community==='peaceful') reasons.push('Captive-bred individuals may suit a carefully chosen peaceful community.');
    if(input.visual!=='any'&&s.colors.includes(input.visual)){score+=15;reasons.push(`Matches your ${input.visual==='fins'?'dramatic finnage':input.visual+' color'} preference.`)}
    if(input.breeding==='breed') {
      if(s.breedingDifficulty==='accessible'){score+=15;reasons.push('A comparatively accessible cave-spawning project.');}
      else cautions.push('Breeding may require softer water and more specific conditions than these maintenance targets.');
    }
    matches.push({species:s,score,reasons,cautions});
  }
  matches.sort((a,b)=>b.score-a.score||a.species.name.localeCompare(b.species.name));
  return {matches,excluded,errors};
}
