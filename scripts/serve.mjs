import http from 'node:http';
import {readFile,stat} from 'node:fs/promises';
import {resolve,extname,sep} from 'node:path';
const root=resolve('dist');
const types={'.html':'text/html; charset=utf-8','.css':'text/css','.mjs':'text/javascript','.json':'application/json','.webp':'image/webp','.svg':'image/svg+xml','.xml':'application/xml','.txt':'text/plain'};
const server=http.createServer(async(req,res)=>{try{const url=new URL(req.url,'http://localhost');const name=decodeURIComponent(url.pathname);let path=resolve(root,'.'+name);if(path!==root&&!path.startsWith(root+sep)){res.writeHead(403);res.end();return;}try{const info=await stat(path);if(info.isDirectory()){if(!url.pathname.endsWith('/')){res.writeHead(308,{Location:url.pathname+'/'+url.search});res.end();return;}path=resolve(path,'index.html');}const content=await readFile(path);res.writeHead(200,{'Content-Type':types[extname(path)]||'application/octet-stream','Cache-Control':'no-store','X-Content-Type-Options':'nosniff'});res.end(content);}catch{res.writeHead(404,{'Content-Type':'text/html; charset=utf-8'});res.end(await readFile(resolve(root,'404.html')));}}catch{res.writeHead(400);res.end('Bad request');}});
server.listen(Number(process.env.PORT||4321),'127.0.0.1',()=>console.log('ApistoPalace preview: http://localhost:'+server.address().port));
