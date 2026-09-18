const CACHE="baseball-gm-v3.32-pages-1";
const ASSETS=["./", "./index.html", "./manifest.webmanifest", "./icon.svg", "./data/part-00.txt", "./data/part-01.txt", "./data/part-02.txt", "./data/part-03.txt", "./data/part-04.txt", "./data/part-05.txt", "./data/part-06.txt", "./data/part-07.txt", "./data/part-08.txt"];
self.addEventListener("install",e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting()))});
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener("fetch",e=>{if(e.request.method!=="GET")return;e.respondWith(fetch(e.request).then(r=>{const copy=r.clone();caches.open(CACHE).then(c=>c.put(e.request,copy));return r}).catch(()=>caches.match(e.request).then(hit=>hit||(e.request.mode==="navigate"?caches.match("./index.html"):Response.error()))))});
