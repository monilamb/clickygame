"use strict";var precacheConfig=[["/clickygame/index.html","1977f4053fc6ea08b64904138f66e149"],["/clickygame/static/css/main.371163b8.css","ca09a1964b4c3d34fca6254b19132c4f"],["/clickygame/static/js/main.36e5b8b9.js","1d89e5a7b2a8fcab56b749f2fe32ee2c"],["/clickygame/static/media/CharacterActressMargo.2f391353.jpg","2f3913533b71b28c5253cc0f07824867"],["/clickygame/static/media/Diane.e19fb52b.jpg","e19fb52bab4e5ac9b3b46153aeab0cf5"],["/clickygame/static/media/amigadetodd.0f26df56.jpg","0f26df565df2098c2adc93e061a0c1ff"],["/clickygame/static/media/bojack.88aa6911.jpeg","88aa69114c56e1846739b8f6e0b87be0"],["/clickygame/static/media/buho.cee9cdc1.png","cee9cdc192c0ccfb8a3f1335046e3599"],["/clickygame/static/media/mamadebojack.b08bea1a.jpeg","b08bea1a353be8b4bf9cceeaf7c3ea00"],["/clickygame/static/media/managerotra.732029b0.jpg","732029b09d183c58251116e6b5a57303"],["/clickygame/static/media/mrpeanutbutter.2fdb02f4.jpg","2fdb02f416ba3e7ab37f4bd02fa011be"],["/clickygame/static/media/princesscarolyn.93acded8.jpg","93acded8315abaabb089c01fc3ce5c3f"],["/clickygame/static/media/ratita.9e8ed25f.jpeg","9e8ed25f305aced3e4152a9380ec8f1a"],["/clickygame/static/media/sapito.03b2f682.jpg","03b2f68210cbcb79c226be01204a12d9"],["/clickygame/static/media/todd.7aac32a9.jpg","7aac32a991c443dee597a3527de2ac83"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),n=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(c){return setOfCachedUrls(c).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return c.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),c="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,c),e=urlsToCacheKeys.has(t));var n="/clickygame/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(n,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});