!function(){const e=document.querySelectorAll('[data-action="minus"]'),t=document.querySelectorAll('[data-action="plus"]'),n=document.querySelectorAll(".card_btn"),c=document.querySelectorAll(".btn_shop"),r=document.querySelectorAll(".container_shop"),i=document.querySelector(".card_sidebar"),a=document.querySelector(".total_price");c.forEach((function(e){e.addEventListener("click",(function(){let t=e,n=t.getAttribute("data-btn"),i=document.querySelector(n);c.forEach((function(e){e.classList.remove("active")})),r.forEach((function(e){e.classList.remove("active")})),t.classList.add("active"),i.classList.add("active")}))})),document.querySelector(".btn_shop").click(),e.forEach((function(e){e.addEventListener("click",(function(e){const t=e.target.closest(".card_details").querySelector("[data-counter]");parseInt(t.innerText)>1&&(t.innerText=--t.innerText)}))})),t.forEach((function(e){e.addEventListener("click",(function(e){const t=e.target.closest(".card_details").querySelector("[data-counter]");t.innerText=++t.innerText}))})),n.forEach((function(e){e.addEventListener("click",(function(e){const t=e.target.closest(".card"),n={id:t.dataset.id,title:t.querySelector(".h4_card_title").innerText,vol:t.querySelector(".price_vol").innerText,price:t.querySelector(".price_cur").innerText,counter:t.querySelector("[data-counter]").innerText},c=i.querySelector(`[data-id="${n.id}"]`);if(c){const e=c.querySelector("[data-counter]");e.innerText=parseInt(e.innerText)+parseInt(n.counter)}else{const e=`<div class="card_id" data-id="${n.id}">\n\n                <div class="card_price_sidebar">\n                   <div class="card_title">\n                    <h4 class="h4_card_title">${n.title}</h4>\n                    </div>\n                    <div class="card_title_sidebar">\n                    <div class="price_vol">${n.vol}</div>\n                    <div class="price_cur">${n.price}</div>\n                    </div>\n\n                </div>\n                <div class="card_details">\n                    <div class="items_control" data-action="minus">-</div>\n                    <div class="items_current" data-counter>${n.counter}</div>\n                    <div class="items_control" data-action="plus">+</div>\n                </div>\n    </div>`;i.insertAdjacentHTML("beforeend",e)}!function(){let e=0;document.querySelectorAll(".card_id").forEach((function(t){const n=t.querySelector(".price_cur"),c=t.querySelector("[data-counter]"),r=parseInt(n.innerText)*parseInt(c.innerText);e+=r,console.log(e)})),a.innerText=e}()}))}))}(),document.getElementById("data").innerHTML=(new Date).getFullYear(),$((function(){AOS.init(),window.addEventListener("load",AOS.refresh),$("#Slider").slick({slidesToShow:1,slidesToScroll:1,autoplay:!0,speed:3e3,autoplaySpeed:3e3,arrows:!1,dots:!0})}));