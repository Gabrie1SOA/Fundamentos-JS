// Simples

let minecoins = 1500;  // Cantidad de Minecoins
let itemPrice = 4.99;  // Precio de un artículo
let userName = "Creeper777";
let isItemPurchased = false;  // No ha comprado el artículo
let itemCategory = null;  // No se ha seleccionado categoría
let storeItem = "Epic Skin Pack";

console.log(minecoins);

// Compuestas

let cart = ["Adventure Map", 2, "Dragon Mount"];  //representa el carrito de compras

// ------------------------------------ 

// Strings

let passwordMarketplace = " 12345Creeper ";  //Contraseña para acceder a la tienda

console.log(passwordMarketplace.length);

console.log(passwordMarketplace.trim());

console.log(passwordMarketplace.includes('5'));

console.log(passwordMarketplace.toUpperCase());

console.log(passwordMarketplace.toLocaleLowerCase());

// ES6 - características

// Template strings

console.log(`El password del usuario es: ${passwordMarketplace}`); 

// Casting - ES6
let itemPriceSkinPack = "4.99";
let itemPriceTexturePack = 2.99;
console.log(+itemPriceSkinPack + itemPriceTexturePack);

// ------------------Condicionales----------------------

let coinsSteve = 1000;  //Representa las monedas que se usa en la tienda
let coinsAlex = 500;

// ES6 - operador ternario

coinsSteve <= coinsAlex ? console.log("Alex tiene menos monedas") : console.log("Steve tiene menos monedas");

let customerNickname;

!customerNickname ? console.log("Ingresa tu apodo en el juego: ") : console.log("Bienvenido a la Tienda de Minecraft");

// Falsy and Truthy values

// Strict comparison

let availablePacks = "5";  // paquetes de contenido descargable para el juego

availablePacks === 5 ? console.log("5 packs Disponibles") : console.log("Regresa para mas packs");

// -------------------------------- LOOPS ----------------------------------

const wishlist = ["Fantasy Skins", "Modern House Pack", "Mob Mounts"];  //Lista de deseados

wishlist.forEach((item) => { console.log(item); });  // Modifica el original

let newWishlist = wishlist.map(item => item.toUpperCase());  // Crea una copia

console.log(newWishlist);
console.log(wishlist);

// ------------------------------- Funciones ----------------------------------

// Funciones Declaradas

//Obtiene una skin para el Jugador
function getStoreAvatar() {
    console.log("photo/store/avatar_steve.png");
}

getStoreAvatar();

// Funciones Expresadas

// Prepara la compra del item
const preparePurchase = function() {
    console.log("Preparandose para realizar la compra");
};

preparePurchase();

// Función autoejecutada

(function() {
    console.log("Nuevos items exclusivos en la Minecraft Marketplace!");
})();

// Argumentos

// vale de bonus en compras
const validatePurchaseToken = function(email, token) {
    console.log(`Token: ${token} aplicado a ${email}, otorgan 100 bonus Minecoins!`);
};

validatePurchaseToken("user@mail.com", "bonus100");

// Argumentos opcionales

const validateDiscountCode = function(code = "default_discount") {
    console.log(`Codigo de descuento ${code} aplicado a tu carrito`);
};
validateDiscountCode();

// Retorno

function upcomingDLC() {
    return function() {
        return "El siguiente DLC traera nuevos biomas y aventuras!";
    };
}

console.log(upcomingDLC()());

// ES6

// Arrow Function
// preparando la validacion
const prepareCheckout = () => {
    console.log("Procesando...");
};

const applyDiscount = (percentage) => console.log(`Descuento de ${percentage}% aplicadp`);

// ------------------------ OBJETOS ------------------------


// OBJETO PARES CLAVE-VALOR
const marketplaceItem = {
    name: "Fantasy Skins",
    price: 5.99,
    details: {
        category: "Skin Pack",
        size: "50 MB"
    },
    ratings: ['4.5/5', '5/5', '4.8/5'],
    inStock: true
};

marketplaceItem.ratings.forEach(rating => console.log(rating));

// Destructuración

const { name, price, details, ratings, inStock: isAvailable } = marketplaceItem;

console.log(isAvailable);

// MÉTODOS

const featuredItem = {
    nameF: "Adventure Map",
    priceF: 9.99,
    detailsF: {
        categoryF: "Map",
        sizeF: "150 MB"
    },
    ratingsF: ['5/5', '4.9/5', '4.7/5'],
    onSale: true,
    creator: "Epic Games"
};

// Añadir una nueva propiedad
featuredItem.thumbnail = "adventure_map_thumbnail.png";

// Eliminar una propiedad
delete featuredItem.onSale;

console.log(featuredItem);

Object.keys(featuredItem).includes("") ? console.log("Datos incompletos") : console.log("Item listo para la venta");

// Mezclar objetos

const exclusiveContent = {
    name: "Exclusive Skin Pack",
    price: 7.99,
    details: {
        category: "Skin Pack",
        size: "100 MB"
    }
};

const completeStoreItem = { ...featuredItem, ...exclusiveContent };

console.log(completeStoreItem);
