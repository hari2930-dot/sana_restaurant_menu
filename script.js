const PLACEHOLDER = "images/placeholder.jpg";

const menuData = {
  "MANDI": [
    { name: "Chicken Shahi Biryani", price: 240, img: "images/mandi/chicken-shahi-biryani.jpg" },
    { name: "Mutton Shahi Biryani", price: 349, img: "images/mandi/mutton-shahi-biryani.jpg" },
    { name: "Veg Biryani", price: 179, img: "images/mandi/veg-biryani.jpg" }
  ],
  "STARTERS": [
    { name: "Chicken Lollipop", price: 269, img: "images/starters/chicken-lollipop.jpg" },
    { name: "French Fries", price: 119, img: "images/starters/french-fries.jpg" }
  ],
  "MAIN COURSE": [
    { name: "Butter Chicken", price: 259, img: "images/maincourse/butter-chicken.jpg" },
    { name: "Kadai Chicken", price: 259, img: "images/maincourse/kadai-chicken.jpg" }
  ],
  "DRINKS & DESSERTS": [
    { name: "Mint Mojito", price: 149, img: "images/drinks/mint-mojito.jpg" },
    { name: "Gulab Jamun", price: 119, img: "images/drinks/gulab-jamun.jpg" }
  ]
};

const tabs = document.getElementById("tabs");
const grid = document.getElementById("menuGrid");

function loadCategory(category) {
  grid.innerHTML = "";
  menuData[category].forEach(item => {
    grid.innerHTML += `
      <div class="card">
        <img src="${item.img || PLACEHOLDER}">
        <div class="card-body">
          <h4>${item.name}</h4>
          <span>₹${item.price}</span>
        </div>
      </div>
    `;
  });
}

Object.keys(menuData).forEach((cat, i) => {
  const btn = document.createElement("button");
  btn.textContent = cat;
  btn.onclick = () => {
    document.querySelectorAll(".tabs button").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    loadCategory(cat);
  };
  if (i === 0) {
    btn.classList.add("active");
    loadCategory(cat);
  }
  tabs.appendChild(btn);
});
