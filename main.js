const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const menuMobile = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const cardsContainer = document.querySelector('.cards-container');
const productDetailContainer = document.querySelector('#productDetail');
const productDetailCloseIcon = document.querySelector('.product-detail-close');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);
productDetailCloseIcon.addEventListener('click',closeProductDetailAside);

function toggleDesktopMenu(){
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');
    if (!isAsideClosed){
        shoppingCartContainer.classList.toggle('inactive');
    }
    desktopMenu.classList.toggle('inactive');
};

function toggleMobileMenu(){
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

    if (!isAsideClosed){
        shoppingCartContainer.classList.toggle('inactive');
    }

    closeProductDetailAside();
    menuMobile.classList.toggle('inactive');
};

function toggleCarritoAside(){
    const isMobileMenuClosed = menuMobile.classList.contains('inactive');
    const isDesktopMenu = desktopMenu.classList.contains('inactive');
    const isProductDetailClosed = productDetailContainer.classList.contains('inactive');

    if (!isMobileMenuClosed){
        menuMobile.classList.toggle('inactive');
    }
    if (!isDesktopMenu){
        desktopMenu.classList.toggle('inactive');
    }
    if (!isProductDetailClosed){
        productDetailContainer.classList.toggle('inactive');
    }

    shoppingCartContainer.classList.toggle('inactive'); 
};

function openProductDetailAside(){
    shoppingCartContainer.classList.add('inactive');
    menuMobile.classList.add('inactive');
    productDetailContainer.classList.remove('inactive');
};

function closeProductDetailAside(){
    productDetailContainer.classList.add('inactive');
};

const productList = [];
productList.push({
    name: 'Bike',
    price:120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'Pantalla',
    price:220,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWKvZVM2fp6K2zrnPnH7kk3F-KMx3Vf8e9vA&usqp=CAU',
});
productList.push({
    name: 'Computador',
    price:620,
    image: 'data:image/jpeg;base64,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',
});

function renderProducts(arr){
    for(product of arr){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click', openProductDetailAside);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        const productInfoName = document.createElement('p');
        productInfoName.innerText = product.name;
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productInfoName);
    
    
        const productInfoFigure = document.createElement('figure');
        const productImgCard = document.createElement('img');
        productImgCard.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(productImgCard);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    
    }
};

renderProducts(productList);