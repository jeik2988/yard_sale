const menuEmail= document.querySelector('.navbar-email');
const menuHamIcon= document.querySelector('.menu');
const menuCarritoIcon= document.querySelector('.nav-bar-shopping-cart');


const destopMenu= document.querySelector('.desktop-menu');
const mobileMenu= document.querySelector('.mobile-menu');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const productDetailContainer= document.querySelector('#productDetail')
const productDetailCloseIcon= document.querySelector('.product-detail-close')
const cardsContainer= document.querySelector('.cards-container');

menuEmail.addEventListener('click',toggleDesktopMenu);
menuHamIcon.addEventListener('click',toggleMobileMenu);
menuCarritoIcon.addEventListener('click',toggleCarritoAside);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside)



function toggleDesktopMenu(){
    const isAsideClosed= shoppingCartContainer.classList.contains('inactive');
    if (!isAsideClosed){
        shoppingCartContainer.classList.add('inactive');
    }
    destopMenu.classList.toggle('inactive');

}
function toggleMobileMenu(){
    const isAsideClosed= shoppingCartContainer.classList.contains('inactive');
    if (!isAsideClosed){
        shoppingCartContainer.classList.add('inactive');
    }
    closeProductDetailAside();

    mobileMenu.classList.toggle('inactive');

}
function toggleCarritoAside(){
    const isMobileMenuClose= mobileMenu.classList.contains('inactive');
    if (!isMobileMenuClose){
        mobileMenu.classList.add('inactive');
    }
    const isDesktopMenuClose= destopMenu.classList.contains('inactive');
    if (!isDesktopMenuClose){
        destopMenu.classList.add('inactive');
    }
    const isProductDetailClose= productDetailContainer.classList.contains('inactive');
    if (!isProductDetailClose){
        productDetailContainer.classList.add('inactive');
    }


    shoppingCartContainer.classList.toggle('inactive');
}
function openproductDetailAside(){
    productDetailContainer.classList.remove('inactive');
}
function closeProductDetailAside(){
    shoppingCartContainer.classList.add('inactive');

    productDetailContainer.classList.add('inactive');
}


const productList =[];
 productList.push({
    name: 'bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
 });
 
 productList.push({
    name: 'Pantalla',
    price: 40,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
 });

 productList.push({
    name: 'Computador',
    price: 420,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
 });


 /* 
 
 <div class="product-card">
     <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
     <div class="product-info">
       <div>
         <p>$120,00</p>
         <p>Bike</p>
       </div>
       <figure>
         <img src="./icons/bt_add_to_cart.svg" alt="">
       </figure>
     </div>
 </div> 


  */

 function renderProduct(arr){
    for (product of productList) {
        const productCart= document.createElement('div');
        productCart.classList.add('product-card');
    
        /* product= {name,price,image}-> product.image */
    
        const productImg= document.createElement('img');
        productImg.setAttribute('src',product.image);
        productImg.addEventListener('click', openproductDetailAside);
        
    
        const productInfo= document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv= document.createElement('div');
    
        const productPrice= document.createElement('p');
        productPrice.innerText= '$' + product.price;
    
    
        const productName= document.createElement('p')
        productName.innerText= '$' + product.name;
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        const productInfofigure= document.createElement('figure');
        const productImgCart= document.createElement('img');
        productImgCart.setAttribute('src','./icons/bt_add_to_cart.svg');
    
        productInfofigure.appendChild(productImgCart);
    
        productInfo.appendChild(productInfoDiv); 
        productInfo.appendChild(productInfofigure);
    
        productCart.appendChild(productImg);
        productCart.appendChild(productInfo);
    
        cardsContainer.appendChild(productCart);
     }
    

 }

 renderProduct(productList);




 