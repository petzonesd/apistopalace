export const escape = value => String(value).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
export const range = a => a.join('–');
export const titleCase = s=>s[0].toUpperCase()+s.slice(1);
export const json = value => JSON.stringify(value).replace(/</g,'\\u003c');
