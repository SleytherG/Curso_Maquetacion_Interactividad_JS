const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const mobileMenu = document.querySelector(".mobile-menu");
const menuImg = document.querySelector(".menu");
const productDetail = document.querySelector(".product-detail");
const shoppingCartIcon = document.querySelector(".navbar-shopping-cart");
const cardsContainer = document.querySelector('.cards-container');

menuEmail.style.cursor = 'pointer';

menuEmail.addEventListener('click', toggleDesktopMenu);
menuImg.addEventListener( 'click', toggleMobileMenu );
shoppingCartIcon.addEventListener('click', toggleDetailCart);

function toggleDesktopMenu() {
    
    const isProductDetailClosed = productDetail.classList.contains('inactive');

    if ( !isProductDetailClosed ) {
        productDetail.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');

    // if ( desktopMenu.className.includes('inactive')) {
    //     desktopMenu.className = 'desktop-menu';
    // } else {
    //     desktopMenu.className += ' inactive';
    // }
}

function toggleMobileMenu() {

    const isProductDetailClosed = productDetail.classList.contains('inactive');

    if ( !isProductDetailClosed ) {
        // Si el Menu Mobile esta open, hay que cerrarlo
        productDetail.classList.add('inactive');   
    }

    mobileMenu.classList.toggle('inactive');
    // if ( !mobileMenu.classList.contains('inactive') ) {
    //     productDetail.classList.toggle('inactive');
    // } else {
    //     productDetail.classList.toggle('inactive');
    // }
   
}

function toggleDetailCart() {
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    
    if ( !isMobileMenuClosed ) {
        // Si el Menu Mobile esta open, hay que cerrarlo
        mobileMenu.classList.add('inactive');
        // desktopMenu.classList.add('inactive');
    }

    if ( !isDesktopMenuClosed ) {
        desktopMenu.classList.add('inactive');

    }
    productDetail.classList.toggle('inactive');
    // if ( isProductDetailClosed ) {
        // Open Product Detail

    // } else {
    //     productDetail.classList.add('inactive');
    // }

}

const productList = [];

productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productList.push({
    name: 'Pantalla',
    price: 220,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productList.push({
    name: 'Compu',
    price: 320,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productList.push({
    name: 'Pantalla',
    price: 220,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productList.push({
    name: 'Compu',
    price: 320,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});


console.log(productList);


function renderProducts( arr ) {
    for (const product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const img = document.createElement('img');
        img.setAttribute('src', product.image );
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
        const productPrice = document.createElement('p');
        productPrice.innerText = `$${product.price}`;
        
        const productName = document.createElement('P');
        productName.innerText = product.name;
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        const productInfoFigure = document.createElement('figure');
        const figureImg = document.createElement('img');
        figureImg.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(figureImg);
    
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(img);
        productCard.appendChild(productInfo);
    
        
        cardsContainer.appendChild(productCard);
    }
}

renderProducts(productList);

