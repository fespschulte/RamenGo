const m=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function n(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerpolicy&&(s.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?s.credentials="include":o.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(o){if(o.ep)return;o.ep=!0;const s=n(o);fetch(o.href,s)}};m();const l="/api",d="ZtVdh8XQ2U8pWI2gmZ7f796Vh8GllXoN7mr0djNf";async function g(t,e){try{const n=JSON.stringify({brothId:t,proteinId:e}),r=await fetch(`${l}/orders`,{method:"POST",headers:{"Content-Type":"application/json","x-api-key":d},body:n});if(!r.ok)throw new Error("Network response was not ok");return await r.json()}catch(n){throw console.error("Create Order Error:",n),n}}async function h(){const t=await fetch(`${l}/proteins`,{method:"GET",headers:{"x-api-key":d}});if(!t.ok)throw new Error("Error fetching Proteins List");return await t.json()}async function p(){const t=await fetch(`${l}/broths`,{method:"GET",headers:{"x-api-key":d}});if(!t.ok)throw new Error("Error fetching Broths List");return await t.json()}async function f(){return`
      <section class="broth-selection">
        <h2>First things first: select your favorite broth.</h2>
        <p>It will give the whole flavor on your ramen soup.</p>
        <div class="broth-options">
        ${(await p()).map(e=>`
          <div class="broth-option" data-id="${e.id}" data-image-inactive="${e.imageInactive}" data-image-active="${e.imageActive}">
            <img src="${e.imageInactive}" alt="${e.name}">
            <h3>${e.name}</h3>
            <p>${e.description}</p>
            <p class="price">US$ ${e.price}</p>
          </div>
          `).join("")}
        </div>
      </section>
    `}function y(){return`
      <header>
        <img class="logo" src="./assets/logo-ramen-go-yellow.svg" alt="Logotipo da RamenGo" />
        <div class="hero">
          <div class="hero-content">
            <div class="hero-text">
              <div class="hero-title">
              <h2>\u30E9\u30FC\u30E1\u30F3</h2>
              <h1>GO!</h1>
              </div>
              <p>Enjoy a good ramen in the comfort of your house. Create your own ramen and choose your favorite flavour combination!</p>
              <button class="scroll-button">
              ORDER NOW
              <img src="./assets/arrow-button-yellow.svg" alt="" />
              </button>
            </div>
            <div class="hero-image">
              <img class="ellipse-brown" src="./assets/ellipse-brown.png" alt="" />
              <img class="delivery-woman" src="./assets/delivery-woman.png" alt="" />
              <img class="balloon-blue" src="./assets/balloon-blue.png" alt="" />
              <img class="balloon-yellow" src="./assets/balloon-yellow.png" alt="" />
            </div>
          </div>
        </div>
      </header>
    `}async function v(){return`
      <section class="meat-selection">
        <h2>It\u2019s time to choose (or not) your meat!</h2>
        <p>Some people love, some don\u2019t. We have options for all tastes.</p>
        <div class="meat-options">
        ${(await h()).map(e=>`
          <div class="meat-option" data-id="${e.id}" data-image-inactive="${e.imageInactive}"  data-image-active="${e.imageActive}">
            <img src="${e.imageInactive}" alt="${e.name}">
            <h3>${e.name}</h3>
            <p>${e.description}</p>
            <p class="price">US$ ${e.price}</p>
          </div>
          `).join("")}
        </div>
      </section>
    `}function b(){return`
    <div class="order-button-container">
      <button class="button button-order">
        PLACE MY ORDER
        <img class="button-arrow" src="./assets/arrow-button-white.svg" alt="Arrow" />
      </button>
    </div>
  `}function w(t){return`
    <img class="logo" src="./assets/logo-ramen-go-red.svg" alt="Logotipo da RamenGo" />
    <div class="order-confirmation">
      <div class="order-summary">
        <img src="${t.image}" alt="Ramen Bowl">
        <h2>Your Order:</h2>
        <h1>${t.description}</h1>
      </div>
      <div class="order-preparation">
        <img class="bowing-img" src="/assets/bowing.png" alt="Order Prepared">
        <h2>\u3054\u6CE8\u6587\u3042\u308A\u304C\u3068\u3046\u3054\u3056\u3044\u307E\u3059\u3002</h2>
        <h1>Your order is being prepared</h1>
        <p>Hold on, when you least expect you will be eating your r\xE1men.</p>
        <button class="button-order-new">
          PLACE NEW ORDER
          <img src="./assets/arrow-button-yellow.svg" alt="" />
        </button>
      </div>
    </div>
  `}let a=null,i=null;function E(){a=null,i=null}function S(){a&&i?g(a,i).then(t=>{console.log("Order created successfully:",t),$(t)}).catch(t=>{alert("Failed to create order. Please try again."),console.error("Create Order Error:",t)}):alert("Please select both a broth and a protein.")}function $(t){try{document.querySelector("#app").innerHTML=`
      ${w(t)}
    `,console.log("Order confirmation page rendered successfully."),document.querySelector(".button-order-new").addEventListener("click",()=>{E(),u()})}catch(e){console.error("Render Order Confirmation Page Error:",e)}}async function u(){try{document.querySelector("#app").innerHTML=`
      ${y()}
      <main>
        <div class="ingredient-selection">
          ${await f()}
          ${await v()}
        </div>
        ${b()}
      </main>
    `,document.querySelector(".scroll-button").addEventListener("click",()=>{document.querySelector("main").scrollIntoView({behavior:"smooth"})}),document.querySelector(".button-order").addEventListener("mouseover",function(){const t=this.querySelector(".button-arrow");t.src="./assets/arrow-button-yellow.svg"}),document.querySelector(".button-order").addEventListener("mouseout",function(){const t=this.querySelector(".button-arrow");t.src="./assets/arrow-button-white.svg"}),document.querySelectorAll(".broth-option").forEach(t=>{t.addEventListener("click",e=>{const n=e.currentTarget.classList.contains("selected");if(document.querySelectorAll(".broth-option").forEach(r=>{r.querySelector("img").src=r.getAttribute("data-image-inactive"),r.classList.remove("selected")}),n)a=null;else{a=e.currentTarget.getAttribute("data-id");const r=e.currentTarget.getAttribute("data-image-active");e.currentTarget.querySelector("img").src=r,e.currentTarget.classList.add("selected")}})}),document.querySelectorAll(".meat-option").forEach(t=>{t.addEventListener("click",e=>{const n=e.currentTarget.classList.contains("selected");if(document.querySelectorAll(".meat-option").forEach(r=>{r.querySelector("img").src=r.getAttribute("data-image-inactive"),r.classList.remove("selected")}),n)i=null;else{i=e.currentTarget.getAttribute("data-id");const r=e.currentTarget.getAttribute("data-image-active");e.currentTarget.querySelector("img").src=r,e.currentTarget.classList.add("selected")}})}),document.querySelector(".button-order").addEventListener("click",S)}catch(t){console.error("Render Home Page Error:",t)}}u();
