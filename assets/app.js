const serviciosHotel = [
  { id: 1, nombre: "Desayuno buffet" },
  { id: 2, nombre: "Servicio a la habitación" },
  { id: 3, nombre: "Acceso al spa" },
  { id: 4, nombre: "Wi-Fi de alta velocidad" },
  { id: 5, nombre: "Estacionamiento privado" },
];

const serviciosDeshabilitados = [];

function renderizarServicios() {
  const itemsServiciosActivos = serviciosHotel.map((servicio) => {
    return `<li>${servicio.nombre}</li>`;
  });

  const itemsDeshabilitados = serviciosDeshabilitados.map((servicio) => {
    console.log(servicio);
    return `<li>${servicio.nombre}</li>`;
  });

  const listaDeServicios = document.querySelector("#servicios-activos");
  const listaDeshabilitados = document.querySelector(
    "#servicios-deshabilitados"
  );
  listaDeServicios.innerHTML = itemsServiciosActivos.join("");
  listaDeshabilitados.innerHTML = itemsDeshabilitados.join("");

  addEventListenerItems();
}

function addEventListenerItems() {
  //Revisamos todos los elementos en nuestro DOM que sean li
  const listItems = document.querySelectorAll("li");

  //Recorremos con forEach cada elemento
  listItems.forEach((item) => {
    // Por cada uno de los elementos en listItems
    // se agrega un escuchador de eventos "click"
    // que ejecutará la función "eliminarServicio"
    item.addEventListener("click", (e) => {
      if (e.target.parentElement.id === "servicios-deshabilitados") {
        habilitarServicio(e.target);
      } else {
        eliminarServicio(e.target);
      }
    });
  });
}

//Función para eliminar un servicio
function eliminarServicio(li) {
  // Buscamos el elemento dentro de serviciosHotel
  // que corresponda con el elementoHTML que se le hizo click
  const indexItem = serviciosHotel.findIndex(
    (item) => item.nombre === li.textContent
  );

  // Eliminamos del arreglo el elemento encontrado
  // gracias a su índice
  const eliminado = serviciosHotel.splice(indexItem, 1);

  // colocamos el arreglo guardado en eliminado en el arreglo de
  // serviciosDeshabilitados
  serviciosDeshabilitados.push(...eliminado);
  renderizarServicios();
}

function habilitarServicio(li) {
  const indexItem = serviciosDeshabilitados.findIndex(
    (item) => item.nombre == li.textContent
  );

  const habilitado = serviciosDeshabilitados.splice(indexItem, 1);

  console.log(habilitado);
  serviciosHotel.push(...habilitado);
  renderizarServicios();
}

function agregarServicio() {
  const inputAgregar = document.querySelector("#in-servicio");
  //id basado en el tiempo para colocarlo a nuestro objeto
  const id = Date.now();
  // sacamos el valor que está en nuestro input
  const nombre = inputAgregar.value;
  // generamos un objeto para guardar en nuestro arreglo
  // basado en la estructura de nuestros servicios
  const nuevoServicio = { id, nombre };
  // agregamos el nuevo servicio a nuestro arreglo de servicios
  serviciosHotel.push(nuevoServicio);
  //volvemos a renderizar
  renderizarServicios();
}

//Primero agregamos el listener al botón y renderizaremos los servicios
const btnAgregar = document.querySelector("#btn-agregar");
btnAgregar.addEventListener("click", agregarServicio);
renderizarServicios();
