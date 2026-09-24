export const sectionKeys = ['overview','identification','habitat','care','diet','breeding','tankmates','provenance'];
const nonempty = value => typeof value === 'string' && value.trim().length > 0;
const positive = value => Number.isFinite(value) && value > 0;
const slug = value => typeof value === 'string' && /^[a-z][a-z-]+$/.test(value);
const stringArray = value => Array.isArray(value) && value.every(nonempty);
const validRange = (value,min,max) => Array.isArray(value) && value.length === 2 && value.every(n=>Number.isFinite(n)&&n>=min&&n<=max) && value[0] <= value[1];
export function isPublishable(s) {
  if (!s || s.status !== 'published') return false;
  if (!slug(s.id) || !slug(s.group) || ![s.name,s.common,s.region].every(nonempty)) return false;
  if (!/^\d{4}-\d{2}-\d{2}$/.test(s.reviewed) || !Number.isFinite(Date.parse(s.reviewed))) return false;
  if (!['beginner','intermediate','advanced'].includes(s.difficulty) || !['accessible','specialist'].includes(s.breedingDifficulty)) return false;
  if (typeof s.community !== 'boolean' || !stringArray(s.colors) || !s.colors.length || !s.colors.every(c=>['red','blue','yellow','fins'].includes(c))) return false;
  if (!stringArray(s.aliases) || !Array.isArray(s.similar) || !s.similar.every(slug)) return false;
  if (!positive(s.tankLitres) || !positive(s.size) || !Array.isArray(s.footprint) || s.footprint.length !== 2 || !s.footprint.every(positive) || s.footprint[0] < s.footprint[1]) return false;
  if (!validRange(s.ph,0,14) || !validRange(s.gh,0,50) || !validRange(s.temperature,5,40)) return false;
  if (!Array.isArray(s.sources) || !s.sources.length || !s.sources.every(r=>r&&nonempty(r.label)&&typeof r.url==='string'&&/^https:\/\//.test(r.url))) return false;
  if (!sectionKeys.every(k=>typeof s.sections?.[k] === 'string' && s.sections[k].trim().length >= 100)) return false;
  return sectionKeys.map(k=>s.sections[k]).join(' ').split(/\s+/).length >= 300;
}
