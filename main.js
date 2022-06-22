//navbar toggle 
const toggleButton = document.getElementById('toggle')
const showList = document.getElementById('show-list')

toggleButton.addEventListener('click', () => {
    showList.classList.toggle('active')
})

//increase or decrease quantity
const minusButton = document.getElementById('minus')
const plusButton = document.getElementById('plus')
const number = document.getElementById('number')

minusButton.addEventListener('click', () => {
    number.textContent=Number(number.textContent) - 1
    if (Number(number.textContent) <= 0) {
        number.textContent = 0
    }
})
plusButton.addEventListener('click', () => {
    number.textContent=Number(number.textContent) + 1
})

//add to cart
const addToCartButton = document.getElementsByClassName('cart-button')
const item = document.getElementById('item')
const cart = document.getElementById('cart')
const cartContent = document.getElementById('cartcontent')


for (let i=0; i<addToCartButton.length; i++) {
    addToCartButton[i].addEventListener('click', () => {
        if (Number(number.textContent) === 0) {
            alert('You cant add 0 item to the cart')
            item.textContent=''
        }
        else {
            item.textContent = number.textContent
        }
    })
}

cart.addEventListener('click', () => {
    cartContent.classList.toggle('activecart')   
    addContentToCart()
})

function addContentToCart() {
    if (Number(number.textContent) > 0) {
        cartContent.innerHTML = `
        <div class="cart-header">
          <h3>Cart</h3>
        </div>
        <div class="cart-message-added">
          <div class="cart-image">
            <img src="images/image-product-1-thumbnail.jpg" alt="">
          </div>
          <div class="cart-name">
            <p>Autumn Limited Edition</p>
            <br>
            <p>$125.00 * ${Number(number.textContent)} <span class="cart-span">$${Number(number.textContent) * 125}</span></p>
          </div>
          <div id="deleteicon">
            <svg width="14" height="16" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><path d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z" id="a"/></defs><use fill="#C3CAD9" fill-rule="nonzero" xlink:href="#a"/></svg>
          </div>
        </div>
        <div>
            <button class='cart-btn'>Checkout<button>
        </div>`
        document.getElementById('deleteicon').addEventListener('click', () => {
            cartContent.innerHTML=`
            <div class="cart-header">
                <h3>Cart</h3>
            </div>
            <div class="cart-message">
                Your cart is empty
            </div>`
            item.textContent=''     
        })
    }
    else {
        cartContent.innerHTML=`
        <div class="cart-header">
            <h3>Cart</h3>
        </div>
        <div class="cart-message">
            Your cart is empty
        </div>`
    }
}

//switch thumbnail
const thumbnail = Array.from(document.querySelectorAll('.imglist img'))
const samplepic = document.querySelector('.samplepic img')
const swiperContainer = document.querySelectorAll('.swiper-container')
let currentSelected=null

thumbnail.forEach(element => {
    element.addEventListener('click', () => {
        const srcImg = element.getAttribute('data-src')
        samplepic.setAttribute('src', srcImg)
        if (element!== currentSelected) {
            if (currentSelected) {
                currentSelected.classList.remove('stay')
            }
            element.classList.add('stay')
            currentSelected=element
        }

    })
})

samplepic.addEventListener('click', () => {
    for (let i = 0; i<swiperContainer.length; i++) {
        swiperContainer[i].classList.add('show-swiper')
    }
})

for (let i = 0; i<swiperContainer.length; i++) {
    swiperContainer[i].addEventListener('click', (element) => {
        if (element.target !== element.currentTarget) return;
        swiperContainer[i].classList.remove('show-swiper')
    })
}