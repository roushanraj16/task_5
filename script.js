const products = [
  {
    name: "Wireless Bluetooth Speaker",
    category: "electronics",
    price: "₹2,999",
    img: "https://source.unsplash.com/featured/?speaker"
  },
  {
    name: "Smart LED TV",
    category: "electronics",
    price: "₹14,499",
    img: "https://source.unsplash.com/featured/?tv"
  },
  {
    name: "White Sneakers",
    category: "fashion",
    price: "₹1,799",
    img: "https://source.unsplash.com/featured/?sneakers"
  },
  {
    name: "Silk Saree",
    category: "fashion",
    price: "₹999",
    img: "https://source.unsplash.com/featured/?saree"
  },
  {
    name: "Wall Clock",
    category: "home",
    price: "₹499",
    img: "https://source.unsplash.com/featured/?clock"
  },
  {
    name: "Study Table",
    category: "home",
    price: "₹6,499",
    img: "https://source.unsplash.com/featured/?studytable"
  }
];

function loadProducts(filter = "all") {
  const grid = document.getElementById("productGrid");
  grid.innerHTML = "";

  const filtered = filter === "all"
    ? products
    : products.filter(p => p.category === filter);

  filtered.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <img src="${product.img}" alt="${product.name}" loading="lazy">
      <div class="product-info">
        <h3>${product.name}</h3>
        <p class="price">${product.price}</p>
      </div>
    `;
    grid.appendChild(card);
  });
}

function filterProducts(category) {
  loadProducts(category);
}

document.addEventListener("DOMContentLoaded", () => loadProducts());
