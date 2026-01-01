const PLACEHOLDER = "images/placeholder.jpg";

const menuData = {
  "MANDI": [
    { name: "Chicken Shahi Biryani", price: 240, img: "images/mandi/chicken-shahi-biryani.jpg" },
    { name: "Mutton Shahi Biryani", price: 349, img: "images/mandi/mutton-shahi-biryani.jpg" }
  ],
  "STARTERS": [
    { name: "Chicken Lollipop", price: 269, img: "images/starters/chicken-lollipop.jpg" },
    { name: "French Fries", price: 119, img: "images/starters/french-fries.jpg" }
  ],
  "JUICES & MITHAI": [
    { name: "Mint Mojito", price: 149, img: "images/juices/mint-mojito.jpg" },
    { name: "Sweet Lassi", price: 89, img: "images/juices/sweet-lassi.jpg" }
  ]
};

const tabs = document.getElementById("tabs");
const menu = document.getElementById("menu");
const searchInput = document.getElementById("searchInput");

Object.keys(menuData).forEach((cat, i) => {
  const btn = document.createElement("button");
  btn.textContent = cat;
  btn.onclick = () => document.getElementById(cat).scrollIntoView({ behavior: "smooth" });
  if (i === 0) btn.classList.add("active");
  tabs.appendChild(btn);

  const section = document.createElement("div");
  section.className = "section";
  section.id = cat;
  section.innerHTML = `<h2>${cat}</h2><div class="grid"></div>`;

  const grid = section.querySelector(".grid");

  menuData[cat].forEach(item => {
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

  menu.appendChild(section);
});

searchInput.addEventListener("input", () => {
  const q = searchInput.value.toLowerCase();
  document.querySelectorAll(".card").forEach(c => {
    c.style.display = c.textContent.toLowerCase().includes(q) ? "" : "none";
  });
});
