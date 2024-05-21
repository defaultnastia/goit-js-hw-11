import{i as d,s as f}from"./assets/vendor-5c957d73.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function r(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(t){if(t.ep)return;t.ep=!0;const n=r(t);fetch(t.href,n)}})();const p="43979459-cb9029671f39809d08984a919";function h(e){const s="https://pixabay.com",r="/api/",o=new URLSearchParams({key:p,image_type:"photo",orientation:"horizontal",safesearch:!0,q:e}),t=`${s}${r}?${o}`;return fetch(t).then(n=>{if(!n.ok)throw new Error(n.status);return n.json()})}document.querySelector(".nothing-fetched");function m(e){if(e.length===0)return a("no_images_found"),'<div class="nothing-fetched"></div>';let s="";return e.forEach(r=>{s+=`<li><a href="${r.largeImageURL}"><img src="${r.webformatURL.replace("_640","_340")}" alt="${r.tags}"/></a>${y(r)}
</li>`}),s}function a(e){e.toString()==="400"&&(e="Check the request parameters."),e.toString()==="404"&&(e="Check the endpoint."),e.toString()==="missing_keyword"&&(e="Enter the keyword."),e.toString()==="no_images_found"&&(e="Sorry, there are no images matching your search query. Please try again!"),e.toString()==="Failed to fetch"&&(e="Check internet connection."),d.show({title:"Oops!",message:`${e}`,color:"red"})}function y(e){return`<div class="stats-box"><p>Likes<br><span>${e.likes}</span></p><p>Views<br><span>${e.views}</span></p><p>Comments<br><span>${e.comments}</span></p><p>Downloads<br><span>${e.downloads}</span></p></div>`}const u=document.querySelector(".search-wrapper"),g=u.querySelector(".searchbox-js"),c=document.querySelector(".gallery"),l=document.querySelector(".loader"),S=new f(".gallery a",{captionDelay:250,captionsData:"alt"});u.addEventListener("submit",b);function b(e){e.preventDefault();const s=g.value.trim();if(s===""){a("missing_keyword");return}c.innerHTML="",l.classList.remove("visually-hidden"),h(s).then(r=>m(r.hits)).then(r=>{c.innerHTML=r,S.refresh(),l.classList.add("visually-hidden")}).catch(r=>a(r.message))}
//# sourceMappingURL=commonHelpers.js.map