const products = [
  {
    id: 1,
    name: "T-shirt",
    price: 19.99,
    image: "https://www.lazyhippos.in/cdn/shop/products/bunnyblackwoman.webp?v=1675516586&width=1445"
  },
  {
    id: 2,
    name: "Jeans",
    price: 39.99,
    image: "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2025/FEBRUARY/8/88868JLu_0d6fbba9f79a4014bc265f427203bca9.jpg"
  },
  {
    id: 3,
    name: "Home decore",
    price: 59.99,
    image: "https://i.pinimg.com/236x/c2/98/6e/c2986e24e69b16bc5b2245b6eb8c378b.jpg"
  },
  {
    id:4,
    name: "Kurti",
    price: 59.99,
    image: "https://kurtifashion.com/wp-content/uploads/2023/02/Cotton-Long-Kurti-Set-1-sd2fss2.jpg"
  },
  {
    id:5,
    name: "Makeup Product",
    price: 59.99,
    image: "https://www.tradeindia.com/wp-content/uploads/2024/09/9-Must-Have-Cosmetic-Products-for-Your-Beauty-Routine-jpg.webp"
  },
  {
    id:6,
    name: "Electronics",
    price: 59.99,
    image: "https://grademobile.co.uk/media/503/catalog/iphone11-white-select-2019_GEO_EMEA-1.png?size=256"
  },
  {
    id:7,
    name: "Books",
    price: 59.99,
    image: "https://images.pexels.com/photos/1926988/pexels-photo-1926988.jpeg"
  },
  {
    id:8,
    name: "Accesories",
    price: 59.99,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiFPa6unUsDk0IvHAs4AQO325EmsmhJr4vebM15qXPg9RwXQ3jjFwpJ4phjwLzUuJIrx0&usqp=CAU"
  },
  {
    id:9,
    name: "Watches",
    price: 59.99,
    image: "https://5.imimg.com/data5/SELLER/Default/2024/1/375576597/NV/JF/WA/148330255/1-500x500.jpg"
  },
];


let cartCount = 0;

function renderProducts() {
  const productList = document.getElementById("product-list");
  products.forEach(product => {
    const productEl = document.createElement("div");
    productEl.classList.add("product");
    productEl.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>$${product.price.toFixed(2)}</p>
      <button onclick="addToCart()">Add to Cart</button>
    `;
    productList.appendChild(productEl);
  });
}

function addToCart() {
  cartCount++;
  document.getElementById("cart-count").textContent = cartCount;
}

renderProducts();
