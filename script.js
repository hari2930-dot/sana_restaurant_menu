const PLACEHOLDER = "images/placeholder.jpg";

/*
type:
  veg | nonveg
special:
  true | false
*/

const menuData = {

  /* ===================== SOUPS ===================== */
  "SOUPS (VEG)": [
    { name: "Cream of Mushroom Soup", price: 100, type: "veg" },
    { name: "Tomato Special Soup", price: 100, type: "veg" },
    { name: "Lemon Coriander Soup", price: 100, type: "veg" },
    { name: "Sweet Corn Soup (Veg)", price: 100, type: "veg" },
    { name: "Manchow Soup (Veg)", price: 100, type: "veg" },
    { name: "Hot & Sour Soup (Veg)", price: 120, type: "veg" }
  ],

  "SOUPS (NON-VEG)": [
    { name: "Sweet Corn Soup (Non-Veg)", price: 120, type: "nonveg" },
    { name: "Manchow Soup (Non-Veg)", price: 120, type: "nonveg" },
    { name: "Hot & Sour Soup (Non-Veg)", price: 120, type: "nonveg" },
    { name: "Mutton Shorba", price: 120, type: "nonveg" },
    { name: "Chicken Badami Shorba", price: 120, type: "nonveg" }
  ],

  /* ===================== VEG STARTERS ===================== */
  "STARTERS (VEG)": [
    { name: "Malai Paneer Tikka", price: 219, type: "veg" },
    { name: "Rustom-E-Khumb Baber", price: 219, type: "veg" },
    { name: "Kaju Hara Bhara", price: 165, type: "veg" },
    { name: "Baby Corn Kure Kure", price: 165, type: "veg" },
    { name: "Gobhi Manchurian", price: 165, type: "veg" },
    { name: "Paneer Kung Pao", price: 209, type: "veg" },
    { name: "Chilli Paneer", price: 199, type: "veg" },
    { name: "Honey Chilli Potato", price: 199, type: "veg" },
    { name: "Crackling Spinach Potato", price: 199, type: "veg" }
  ],

  /* ===================== NON-VEG STARTERS ===================== */
  "STARTERS (NON-VEG)": [
    { name: "Chicken Al-Faham (Half)", price: 239, type: "nonveg", special: true },
    { name: "Chicken Al-Faham (Full)", price: 460, type: "nonveg", special: true },
    { name: "Chicken Lollipop", price: 269, type: "nonveg" },
    { name: "Chicken Drums of Heaven", price: 220, type: "nonveg" },
    { name: "Chicken Majestic", price: 259, type: "nonveg" },
    { name: "Mutton Pepper Roast", price: 350, type: "nonveg" },
    { name: "Mutton Ghee Roast", price: 350, type: "nonveg" },
    { name: "Arabian Fish Fillet", price: 299, type: "nonveg" },
    { name: "Prawns Chilli", price: 260, type: "nonveg" }
  ],

  /* ===================== VEG MAIN COURSE ===================== */
  "MAIN COURSE (VEG)": [
    { name: "Paneer Butter Masala", price: 229, type: "veg" },
    { name: "Paneer Tikka Masala", price: 229, type: "veg" },
    { name: "Palak Paneer", price: 219, type: "veg" },
    { name: "Dal Tadka", price: 140, type: "veg" },
    { name: "Lasooni Dal", price: 149, type: "veg" },
    { name: "Veg Navratan Korma", price: 229, type: "veg" }
  ],

  /* ===================== NON-VEG MAIN COURSE ===================== */
  "MAIN COURSE (NON-VEG)": [
    { name: "Butter Chicken (Boneless)", price: 249, type: "nonveg", special: true },
    { name: "Chicken Kadai", price: 249, type: "nonveg" },
    { name: "Chicken Kolhapuri", price: 249, type: "nonveg" },
    { name: "Mutton Rogan Josh", price: 360, type: "nonveg" },
    { name: "Mutton Dum Handi", price: 360, type: "nonveg" },
    { name: "Fish Masala", price: 299, type: "nonveg" },
    { name: "Prawns Masala", price: 299, type: "nonveg" }
  ],

  /* ===================== MANDI ===================== */
  "MANDI": [
    { name: "Chicken Mandi (Single)", price: 299, type: "nonveg", special: true },
    { name: "Chicken Mandi (Half)", price: 459, type: "nonveg" },
    { name: "Chicken Mandi (Full)", price: 859, type: "nonveg" },
    { name: "Chicken Mandi (Family)", price: 1199, type: "nonveg" },

    { name: "Mutton Mandi (Single)", price: 350, type: "nonveg" },
    { name: "Mutton Mandi (Half)", price: 649, type: "nonveg" },
    { name: "Mutton Mandi (Full)", price: 1099, type: "nonveg" },
    { name: "Mutton Mandi (Family)", price: 1649, type: "nonveg" }
  ],

  /* ===================== BIRYANI ===================== */
  "BIRYANI": [
    { name: "Chicken Dum Biryani", price: 220, type: "nonveg", special: true },
    { name: "Chicken Fry Piece Biryani", price: 239, type: "nonveg" },
    { name: "Chicken 65 Biryani", price: 249, type: "nonveg" },
    { name: "Mutton Dum Biryani", price: 299, type: "nonveg" },
    { name: "Egg Biryani", price: 150, type: "nonveg" },
    { name: "Veg Biryani", price: 150, type: "veg" },
    { name: "Mushroom Biryani", price: 170, type: "veg" }
  ],

  /* ===================== DRINKS ===================== */
  "DRINKS": [
    { name: "Mint Mojito", price: 119, type: "veg" },
    { name: "Blue Coraco", price: 119, type: "veg" },
    { name: "Pineapple Juice", price: 80, type: "veg" },
    { name: "Orange Juice", price: 90, type: "veg" },
    { name: "Soft Drink", price: 20, type: "veg" },
    { name: "Water Bottle", price: 20, type: "veg" }
  ],

  /* ===================== DESSERTS ===================== */
  "DESSERTS": [
    { name: "Gajar Ka Halwa", price: 120, type: "veg" },
    { name: "Gajar Ka Halwa with Ice Cream", price: 160, type: "veg" },
    { name: "Hot Gulab Jamun", price: 100, type: "veg" },
    { name: "Hot Gulab Jamun with Ice Cream", price: 140, type: "veg" },
    { name: "Khubani Ka Meetha", price: 150, type: "veg" },
    { name: "Rabdi", price: 120, type: "veg" }
  ]
};

/* ===================== RENDER LOGIC ===================== */

const tabs = document.getElementById("tabs");
const grid = document.getElementById("menuGrid");
const searchInput = document.getElementById("searchInput");

function renderItems(category) {
  grid.innerHTML = "";
  menuData[category].forEach(item => {
    grid.innerHTML += `
      <div class="card">
        <img src="${item.img || PLACEHOLDER}" loading="lazy">
        <div class="card-body">
          <h4>
            ${item.name}
            ${item.special ? '<span class="badge">Special</span>' : ''}
            <span class="dot ${item.type}"></span>
          </h4>
          <span class="price">₹${item.price}</span>
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
    renderItems(cat);
  };
  if (i === 0) {
    btn.classList.add("active");
    renderItems(cat);
  }
  tabs.appendChild(btn);
});

searchInput.addEventListener("input", () => {
  const q = searchInput.value.toLowerCase();
  document.querySelectorAll(".card").forEach(card => {
    card.style.display = card.textContent.toLowerCase().includes(q) ? "" : "none";
  });
});
