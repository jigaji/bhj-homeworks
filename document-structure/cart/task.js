const productAdd = document.querySelectorAll(`.product__add`);
const productAddArr = Array.from(productAdd);

const productDec = document.querySelectorAll(`.product__quantity-control_dec`);
const productDecArr = Array.from(productDec);

const productInc = document.querySelectorAll(`.product__quantity-control_inc`);
const productIncArr = Array.from(productInc);

const cartProducts = document.querySelector(`.cart__products`);



productAddArr.forEach((el) => {el.addEventListener(`click`, function() {
    const id = el.closest(`.product`).dataset.id;
    const cartProduct = document.querySelectorAll(`.cart__product`);
    const cartProductArr = Array.from(cartProduct);
    const imageSrc = el.closest(`.product`).querySelector(`img`).src;
    const productValue = el.closest(`.product`).querySelector(`.product__quantity-value`);

    cartProductArr.find(elem => id == elem.dataset.id);
    if (cartProductArr.find(elem => id == elem.dataset.id) == undefined) {

        cartProducts.insertAdjacentHTML("beforeend" ,`
        <div class="cart__product" data-id="${id}">
            <img class="cart__product-image" src ="${imageSrc}">
            <div class="cart__product-count">${productValue.innerHTML}</div>
        </div>
        `)
    } else {
        addedElement = cartProductArr.find(elem => id == elem.dataset.id);
        addedValue = addedElement.lastElementChild;
        addedValue.innerHTML = +addedValue.innerHTML + +productValue.innerHTML;
    }
    
})})

productDecArr.forEach((el) => {el.addEventListener(`click`, () => {
    el.nextElementSibling.innerHTML--;
    if( el.nextElementSibling.innerHTML < 1) {
        el.nextElementSibling.innerHTML = 1;
    }
})})

productIncArr.forEach((el) => {el.addEventListener(`click`, () => {
    el.previousElementSibling.innerHTML++;
})})
