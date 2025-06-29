
document.addEventListener("DOMContentLoaded", () => {
  const hoja = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQ0ficticiaURL/public_html?output=csv"; // REEMPLAZAR
  const contenedor = document.getElementById("productos");

  fetch(hoja)
    .then(response => response.text())
    .then(data => {
      const rows = data.split("\n").slice(1);
      rows.forEach(row => {
        const [producto, precio, estado, imagen, descripcion] = row.split(",");
        if (estado.toLowerCase().includes("disponible")) {
          const card = document.createElement("div");
          card.innerHTML = `
            <img src="${imagen}" alt="${producto}" style="width:200px;cursor:pointer" onclick="window.open('${imagen}','_blank')">
            <h3>${producto}</h3>
            <p>${descripcion}</p>
            <strong>${precio}</strong><br>
            <a href="https://wa.me/527774200265?text=Hola,%20quiero%20una%20joya%20exclusiva,%20¿puedes%20ayudarme?%20Joya:%20${producto}" target="_blank">Solicitar por WhatsApp</a>
          `;
          card.style.marginBottom = "2em";
          contenedor.appendChild(card);
        }
      });
    });
});
