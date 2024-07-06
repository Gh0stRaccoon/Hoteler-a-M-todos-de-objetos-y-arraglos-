const serviciosHotel = [
  { id: 1, nombre: "Desayuno buffet" },
  { id: 2, nombre: "Servicio a la habitación" },
  { id: 3, nombre: "Acceso al spa" },
  { id: 4, nombre: "Wi-Fi de alta velocidad" },
  { id: 5, nombre: "Estacionamiento privado" },
];

function renderizarServicios() {
  const itemsServicios = serviciosHotel.map((servicio) => {
    return `<li>${servicio.nombre}</li>`;
  });

  const listaDeServicios = document.querySelector("#servicios-lista");
  listaDeServicios.innerHTML = itemsServicios.join("");

  addEventListenerItems();
}

function addEventListenerItems() {
  const listItems = document.querySelectorAll("li");

  listItems.forEach((item) => {
    item.addEventListener("click", (e) => eliminarServicio(e.target));
  });
}

function eliminarServicio(li) {

  const indexItem = serviciosHotel.findIndex(
    (item) => item.nombre === li.textContent
  );

  const eliminado = serviciosHotel.splice(indexItem, 1);
  serviciosHotel.splice(indexItem, 0, nuevoObjeto)

  renderizarServicios();
}

renderizarServicios();
