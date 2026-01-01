const menuData = {
  "MANDI": [
    ["CHICKEN SHAHI BIRYANI",240],
    ["MUTTON SHAHI BIRYANI",349],
    ["CHICKEN SHAHI BIRYANI (FAMILY PACK)",599],
    ["MUTTON SHAHI BIRYANI (FAMILY PACK)",849],
    ["FRY PIECE BIRYANI (BONE)",249],
    ["LOLLYPOP BIRYANI",269],
    ["CHICKEN 65 BIRYANI (BONE LESS)",269],
    ["VEG BIRYANI",179],
    ["MUSHROOM BIRYANI",199],
    ["ROYAL SPL GHEE RICE",159],
    ["BIRYANI RICE",159],
    ["EGG FRIED RICE",175],
    ["CHICKEN FRIED RICE",199],
    ["VEG FRIED RICE",169],
    ["EGG NOODLES",175],
    ["CHICKEN NOODLES",199],
    ["VEG NOODLES",169]
  ],

  "STARTERS": [
    ["MUTTON LAZEEZ SHORBA",129],
    ["CHICKEN BADAMI SHORB",119],
    ["HOT & SOUR SOUP - VEG",109],
    ["HOT & SOUR SOUP - NON VEG",120],
    ["MANCHOW SOUP - VEG",109],
    ["MANCHOW SOUP - NON VEG",120],
    ["CHICKEN LOLLIPOP",269],
    ["CHICKEN DRUMS OF HEAVEN",249],
    ["FISH APPOLO",279],
    ["FRENCH FRIES",119],
    ["CHICKEN MAJESTICK",259],
    ["MUTTON GHEE ROAST",369],
    ["AL-FAHAM (HALF)",249],
    ["AL-FAHAM (FULL)",499]
  ],

  "MAIN COURSE": [
    ["TANDOORI ROTI - PLAIN",30],
    ["TANDOORI ROTI (BUTTER)",35],
    ["NAAN (PLAIN)",40],
    ["NAAN (BUTTER)",45],
    ["KULCHA (PLAIN)",35],
    ["KULCHA (BUTTER)",40],
    ["AALU GOBI MASALA",199],
    ["DAL (TADKA / FRY)",149],
    ["KAJU MASALA",249],
    ["BUTTER CHICKEN (BONE LESS)",259]
  ],

  "JUICES & MITHAI": [
    ["VANILLA MILKSHAKE",149],
    ["CHOCOLATE MILKSHAKE",149],
    ["MINT MOJITO",149],
    ["ORANGE JUICE",99],
    ["SOFT DRINK",20],
    ["WATER BOTTLE",20],
    ["SWEET LASSI",89],
    ["GAJAR KA HALWA",149],
    ["KHUBANI KA MITHA",149],
    ["HOT GULAB JAMUN",119],
    ["RABDI",149]
  ]
};

const tabs = document.getElementById("tabs");
const menu = document.getElementById("menu");
const searchInput = document.getElementById("searchInput");

Object.keys(menuData).forEach((cat, i) => {
  const btn = document.createElement("button");
  btn.textContent = cat;
  btn.onclick = () =>
    document.getElementById(cat).scrollIntoView({behavior:"smooth"});
  if(i === 0) btn.classList.add("active");
  tabs.appendChild(btn);

  const section = document.createElement("div");
  section.className = "section";
  section.id = cat;
  section.innerHTML = `<h2>${cat}</h2>`;
  menuData[cat].forEach(item => {
    section.innerHTML += `<div class="item"><div>${item[0]}</div><span>₹${item[1]}</span></div>`;
  });
  menu.appendChild(section);
});

searchInput.addEventListener("input", () => {
  const q = searchInput.value.toLowerCase();
  document.querySelectorAll(".item").forEach(i => {
    i.style.display = i.textContent.toLowerCase().includes(q) ? "" : "none";
  });
});
