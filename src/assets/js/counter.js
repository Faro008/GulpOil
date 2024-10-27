const btnMinus = document.querySelectorAll('[data-action="minus"]');
const btnPlus = document.querySelectorAll('[data-action="plus"]');
const btnCard = document.querySelectorAll('.card_btn');
const btnSel = document.querySelectorAll('.btn_shop');
const tabsSel = document.querySelectorAll('.container_shop');
const cartWrapper = document.querySelector('.card_sidebar');
const totalPriceEl = document.querySelector('.total_price');
//-----------Переключение табов--------------------------------------------//
btnSel.forEach(function(item){
    item.addEventListener("click", function(){
        let currentBtn = item;
        let btnId = currentBtn.getAttribute('data-btn');
        let currentTab = document.querySelector(btnId);
        btnSel.forEach(function(item){
            item.classList.remove('active');
        });
        tabsSel.forEach(function(item){
            item.classList.remove('active');
        });

      currentBtn.classList.add('active');
      currentTab.classList.add('active');
    });
});
document.querySelector('.btn_shop').click();

//-------------Calc-------------------------------------------------------//

function calcPrice(){
    let totalPrice = 0;
    const cardId = document.querySelectorAll('.card_id');
        cardId.forEach(function(item){
        const cardPrice = item.querySelector('.price_cur');
        const cardCount = item.querySelector('[data-counter]');
        const priceE = parseInt(cardPrice.innerText)*parseInt(cardCount.innerText);
        totalPrice = totalPrice + priceE;
    console.log(totalPrice);
    });
    totalPriceEl.innerText = totalPrice;

}

//-----------Shop---------------------------------------------------------//
btnMinus.forEach(function(item){
    item.addEventListener('click', function(event){
    const counterWrapper = event.target.closest('.card_details');
    const counter = counterWrapper.querySelector('[data-counter]');
    if (parseInt(counter.innerText)>1){
    counter.innerText = --counter.innerText;
        }
        });
});
btnPlus.forEach(function(item){
    item.addEventListener("click", function(event){
    const counterWrapper = event.target.closest('.card_details');
    const counter = counterWrapper.querySelector('[data-counter]');
    counter.innerText = ++counter.innerText;
        });
});

//----------------Добавление товаров в корзину------------------------//
btnCard.forEach(function(item){
    item.addEventListener('click', function(event){
        const card = event.target.closest('.card');
        const cardInfo = {
            id:card.dataset.id,
            title: card.querySelector('.h4_card_title').innerText,
            vol:card.querySelector('.price_vol').innerText,
            price:card.querySelector('.price_cur').innerText,
            counter:card.querySelector('[data-counter]').innerText,
                        };
        const cardId = cartWrapper.querySelector(`[data-id="${cardInfo.id}"]`);
        if (cardId) {
            const counterElement = cardId.querySelector('[data-counter]');
            counterElement.innerText = parseInt(counterElement.innerText)+parseInt(cardInfo.counter);
        }
        else{

           //---Добавление товаров на сайт---//

        const infoHtml = `<div class="card_id" data-id="${cardInfo.id}">

                <div class="card_price_sidebar">
                   <div class="card_title">
                    <h4 class="h4_card_title">${cardInfo.title}</h4>
                    </div>
                    <div class="card_title_sidebar">
                    <div class="price_vol">${cardInfo.vol}</div>
                    <div class="price_cur">${cardInfo.price}</div>
                    </div>

                </div>
                <div class="card_details">
                    <div class="items_control" data-action="minus">-</div>
                    <div class="items_current" data-counter>${cardInfo.counter}</div>
                    <div class="items_control" data-action="plus">+</div>
                </div>
    </div>`;
        cartWrapper.insertAdjacentHTML('beforeend',infoHtml);

            }
         calcPrice();
        });

});



