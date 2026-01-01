const PLACEHOLDER = "images/placeholder.jpg";

const menuData = {
  MANDI: [
    { name: "Chicken Shahi Biryani", price: 240, img: "images/mandi/chicken-shahi-biryani.jpg" },
    { name: "Mutton Shahi Biryani", price: 349, img: "images/mandi/mutton-shahi-biryani.jpg" }
  ],
  STARTERS: [
    { name: "Chicken Lollipop", price: 269, img: "images/starters/chicken-lollipop.jpg" },
    { name: "French Fries", price: 119, img: "images/starters/french-fries.jpg" }
  ],
  MAIN_COURSE: [
    { name: "Butter Chicken", price: 259, img: "images/maincourse/butter-chicken.jpg" }
  ],
  JUICES: [
    { name: "Mint Mojito", price: 149, img: "images/juices/mint-mojito.jpg" }
  ]
};

const tabs = document.getElementById("tabs");
const grid = document.getElementById("menuGrid");

function renderItems(category) {
  grid.innerHTML = "";
  menuData[category].forEach(item => {
    grid.innerHTML += `
      <div class="card">
        <img src="${item.img || PLACEHOLDER}">
        <div class="card-body">
          <h4>${item.name}</h4>
          <span>₹${item.price}</span>
        </div>
      </div>`;
  });
}

Object.keys(menuData).forEach((cat, i) => {
  const btn = document.createElement("button");
  btn.textContent = cat.replace("_"," ");
  btn.onclick = () => {
    document.querySelectorAll(".tabs button").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    renderItems(cat);
  };
  if (i === 0) {
    btn.classList.add("active");
    renderItems(cat);
  }
  tabs.appendChild(btn);
});
