const fuse = new Fuse(ITEMS, {
  keys: [
    { name: "name", weight: 1.0 },
    { name: "alt", weight: 0.8 },
    { name: "category", weight: 0.3 }
  ],
  threshold: 0.4,
  includeScore: true
});

const searchInput = document.getElementById("search");
searchInput["place" + "holder"] = "Search ingredient (e.g. chickpeas, cheese, cumin...)";
const resultsEl = document.getElementById("results");
const tagsEl = document.getElementById("tags");
const catsEl = document.getElementById("categories");
const countEl = document.getElementById("count");

let activeCategory = null;

function renderItems(items) {
  countEl.textContent = items.length + " item" + (items.length !== 1 ? "s" : "") + " found";
  if (items.length === 0) {
    resultsEl.innerHTML = '<p class="text-gray-500 text-center py-8">No items found. Try a different search term.</p>';
    return;
  }
  resultsEl.innerHTML = items.map(item => {
    const storeRows = item.stores.map(s => {
      const price = s.price ? '<span class="text-green-700 font-medium">' + s.price + "</span> · " : "";
      return '<li class="flex items-start gap-2 py-1.5 border-b border-gray-100 last:border-0">' +
        '<span class="font-medium text-gray-800 whitespace-nowrap">' + s.name + "</span>" +
        '<span class="text-gray-500 text-sm">' + price + (s.note || "") + "</span></li>";
    }).join("");
    const altText = item.alt.length ? '<p class="text-xs text-gray-400 mt-0.5">Also: ' + item.alt.join(", ") + "</p>" : "";
    return '<div class="bg-white rounded-lg shadow-sm border border-gray-200 p-4 hover:shadow-md transition-shadow">' +
      '<div class="flex items-center justify-between mb-2">' +
      '<h3 class="font-semibold text-lg text-gray-900">' + item.name + "</h3>" +
      '<span class="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">' + item.category + "</span></div>" +
      altText +
      '<ul class="mt-3 space-y-0">' + storeRows + "</ul>" +
      '<p class="text-xs text-gray-400 mt-2">' + item.stores.length + " store" + (item.stores.length !== 1 ? "s" : "") + "</p></div>";
  }).join("");
}

function doSearch() {
  const q = searchInput.value.trim();
  let items;
  if (q.length === 0) {
    items = activeCategory ? ITEMS.filter(i => i.category === activeCategory) : ITEMS;
  } else {
    const results = fuse.search(q);
    items = results.map(r => r.item);
    if (activeCategory) items = items.filter(i => i.category === activeCategory);
  }
  renderItems(items);
}

searchInput.addEventListener("input", doSearch);

// Popular tags
const popular = ["Chickpeas", "Cheese", "Coconut Milk", "Peanut Butter", "Tortillas", "Oats"];
tagsEl.innerHTML = popular.map(t =>
  '<button class="px-3 py-1.5 text-sm bg-amber-50 text-amber-700 rounded-full hover:bg-amber-100 transition-colors tag-btn">' + t + "</button>"
).join("");
tagsEl.querySelectorAll(".tag-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    searchInput.value = btn.textContent;
    doSearch();
    searchInput.focus();
  });
});

// Category filters
catsEl.innerHTML = '<button class="px-3 py-1.5 text-sm rounded-full transition-colors cat-btn active bg-gray-800 text-white" data-cat="">All</button>' +
  CATEGORIES.map(c =>
    '<button class="px-3 py-1.5 text-sm rounded-full transition-colors cat-btn bg-gray-100 text-gray-700 hover:bg-gray-200" data-cat="' + c + '">' + c + "</button>"
  ).join("");
catsEl.querySelectorAll(".cat-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    catsEl.querySelectorAll(".cat-btn").forEach(b => {
      b.classList.remove("bg-gray-800", "text-white", "active");
      b.classList.add("bg-gray-100", "text-gray-700");
    });
    btn.classList.remove("bg-gray-100", "text-gray-700");
    btn.classList.add("bg-gray-800", "text-white", "active");
    activeCategory = btn.dataset.cat || null;
    doSearch();
  });
});

// Initial render
renderItems(ITEMS);
