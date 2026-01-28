const data = [
  { name: "Zābaki", cukas: 9, kopa: 12 },
  { name: "Pickaiņi", cukas: 8, kopa: 8 },
  { name: "Vārpas", stirna: 3, kopa: 8 }
];

const list = document.getElementById("masti");

data.forEach(item => {
  const div = document.createElement("div");
  div.textContent = item.name + " – " + item.kopa;
  div.onclick = () => openModal(item);
  list.appendChild(div);
});

function openModal(item) {
  document.getElementById("modal-title").textContent = item.name;
  const ul = document.getElementById("modal-list");
  ul.innerHTML = "";

  Object.entries(item).forEach(([k,v]) => {
    if (k !== "name") {
      const li = document.createElement("li");
      li.textContent = k + ": " + v;
      ul.appendChild(li);
    }
  });

  document.getElementById("modal").style.display = "block";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}
