let productos = [
  {
    id: "1",
    nombre: "Varita Harry Potter",
    precio: 1700,
    imagen: "../src/assets/varita1.jpg",
    descripcion: "Haz magia con la varita del mismisimo Harry Potter!",
    stock: 20,
    categoria: "Varitas",
  },
  {
    id: "2",
    nombre: "Varita de Sauco",
    precio: 1700,
    imagen: "../src/assets/varita2.jpg",
    descripcion: "Pelea con tus enemigos con la varita del Señor Tenebroso!",
    stock: 15,
    categoria: "Varitas",
  },
  {
    id: "3",
    nombre: "Bufanda Gryffindor",
    precio: 6000,
    imagen: "../src/assets/bufanda3.jpg",
    descripcion: "Bufanda de la casa Gryffindor, ideal para utilizar en esta epoca de invierno. Con un metro setenta de largo. Producto con licencia oficial.",
    stock: 10,
    categoria: "Bufandas",
  },
  {
    id: "4",
    nombre: "Bufanda Slytherin",
    precio: 6000,
    imagen: "../src/assets/bufanda4.jpg",
    descripcion: "Bufanda de la casa Slytherin, ideal para utilizar en esta epoca de invierno. Con un metro setenta de largo. Producto con licencia oficial.",
    stock: 10,
    categoria: "Bufandas",
  },
  {
    id: "5",
    nombre: "Tazon XXL",
    precio: 1600,
    imagen: "../src/assets/tazon5.jpg",
    descripcion: "Tazon XXL o cerealero con el logo de Harry Potter para comenzar tus dias con todas las pilas!. Producto con licencia oficial.",
    stock: 20,
    categoria: "Varios",
  },
  {
    id: "6",
    nombre: "Pulsera Hogwarts",
    precio: 1000,
    imagen: "../src/assets/pulsera6.jpg",
    descripcion: "De cuero trenzado.",
    stock: 12,
    categoria: "Varios",
  },
  {
    id: "7",
    nombre: "Giratiempos",
    precio: 3500,
    imagen: "../src/assets/collar7.jpg",
    descripcion: "Giratiempos de Hermione en tus manos. Viene con un estuche de madera grabada.",
    stock: 20,
    categoria: "Varios",
  },
  {
    id: "8",
    nombre: "Llavero Hogwarts",
    precio: 3000,
    imagen: "../src/assets/llavero8.jpg",
    descripcion: "Viene con un estuche de madera grabada.",
    stock: 15,
    categoria: "Varios",
  },
];

export const mockFetch = (id) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(id ? productos.find( prod => prod.id === id) : productos);
    }, 1000);
  });
  return promise;
};
