var g=Object.defineProperty;var l=(h,t,e)=>t in h?g(h,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):h[t]=e;var r=(h,t,e)=>(l(h,typeof t!="symbol"?t+"":t,e),e);const f=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerpolicy&&(i.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?i.credentials="include":s.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(s){if(s.ep)return;s.ep=!0;const i=e(s);fetch(s.href,i)}};f();function o(h,t){return Math.floor(Math.random()*(t-h+1))+h}function p(){return[1,-1][o(0,1)]}function d(h,t){return Math.abs(h-t)}var u="/assets/cat2.22d32832.png";class m{constructor(t,e,n=32,s=new Image,i=[]){r(this,"x");r(this,"y");r(this,"speedX");r(this,"speedY");this.wrapper=t,this.context=e,this.size=n,this.img=s,this.targets=i,this.x=o(10,this.wrapper.offsetWidth-20),this.y=o(10,this.wrapper.offsetHeight-20),this.speedX=this.randomSpeed,this.speedY=this.randomSpeed,this.changePace(),this.img.src=u,this.img.onload=()=>{setInterval(this.walk.bind(this),30)}}setTarget(t){this.targets.push(t),this.targets.length===1&&this.changePace()}changePace(){this.targets.length!==0?(this.speedX=(this.targets[0].x-this.x)/20,this.speedY=(this.targets[0].y-this.y)/20):(this.speedX=this.randomSpeed,this.speedY=this.randomSpeed)}walk(){this.isFishNearby()&&(this.eatFish(),this.changePace()),this.context.clearRect(this.x,this.y,this.size,this.size),this.x+=this.speedX,this.y+=this.speedY,(this.x<0||this.x>this.wrapper.offsetWidth)&&(this.speedX*=-1),(this.y<0||this.y>this.wrapper.offsetHeight)&&(this.speedY*=-1),this.context.drawImage(this.img,this.x,this.y,this.size,this.size)}isFishNearby(){return this.targets[0]&&d(this.targets[0].x,this.x)<20&&d(this.targets[0].y,this.y)<20}eatFish(){this.targets[0].die(),this.targets.shift(),this.size+=2}get randomSpeed(){return o(2,4)*p()}}var y="/assets/fish.ab6014c7.png";class x{constructor(t,e,n=32,s=new Image){r(this,"x");r(this,"y");this.context=e,this.size=n,this.img=s;const i=t.target.getBoundingClientRect();this.x=t.clientX-i.left,this.y=t.clientY-i.top,this.img.onload=()=>{this.context.drawImage(this.img,this.x,this.y,this.size,this.size)},this.img.src=y}die(){this.context.clearRect(this.x,this.y,this.size,this.size)}}class c{constructor(t,e){r(this,"context");r(this,"cat");this.wrapper=e,this.context=t.getContext("2d"),t.setAttribute("width",`${e.offsetWidth}`),t.setAttribute("height",`${e.offsetHeight}`),this.cat=new m(e,this.context)}static start(t,e){new c(t,e).start()}start(){this.wrapper.onclick=t=>this.putFish(t)}putFish(t){const e=new x(t,this.context);this.cat.setTarget(e)}}window.onload=()=>{const h=document.getElementById("my-canvas"),t=document.getElementById("canvas-wrapper");try{c.start(h,t)}catch{console.log("You're using an so obsolete browser that an extra content cannot appear.")}};
