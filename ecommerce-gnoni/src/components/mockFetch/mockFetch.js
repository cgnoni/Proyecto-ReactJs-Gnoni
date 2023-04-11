let productos = [
  {
    id: "1",
    nombre: "Varita Harry Potter",
    precio: 1700,
    imagen: "./src/components/img/1.png",
    descripcion: "Haz magia con la varita del mismisimo Harry Potter!",
    stock: 20,
  },
  {
    id: "2",
    nombre: "Varita de Sauco",
    Precio: 1700,
    imagen: "./src/components/img/2.jpeg",
    Descripcion: "Pelea con tus enemigos con la varita del Señor Tenebroso!",
    stock: 15,
  },
  {
    id: "3",
    nombre: "Bufanda Gryffindor",
    precio: 6000,
    imagen: "./src/components/img/3.png",
    descripcion:
      "Bufanda de la casa Gryffindor, ideal para utilizar en esta epoca de invierno. Con un metro setenta de largo. Producto con licencia oficial.",
    stock: 10,
  },
  {
    id: "4",
    nombre: "Bufanda Slytherin",
    precio: 6000,
    imagen: "./src/components/img/4.png",
    descripcion:
      "Bufanda de la casa Slytherin, ideal para utilizar en esta epoca de invierno. Con un metro setenta de largo. Producto con licencia oficial.",
    stock: 10,
  },
  {
    id: "5",
    nombre: "Tazon XXL",
    precio: 1600,
    imagen: "./src/components/img/5.png",
    descripcion:
      "Tazon XXL o cerealero con el logo de Harry Potter para comenzar tus dias con todas las pilas!. Producto con licencia oficial.",
    stock: 20,
  },
  {
    id: "6",
    nombre: "Pulsera Hogwarts",
    precio: 1000,
    imagen: "./src/components/img/6.png",
    descripcion: "De cuero trenzado.",
    stock: 12,
  },
  {
    id: "7",
    nombre: "Giratiempos",
    precio: 3500,
    imagen: "./src/components/img/7.png",
    descripcion:
      "Giratiempos de Hermione en tus manos. Viene con un estuche de madera grabada.",
    stock: 20,
  },
  {
    id: "8",
    nombre: "Llavero Hogwarts",
    precio: 3000,
    imagen: "./src/components/img/8.png",
    descripcion: "Viene con un estuche de madera grabada.",
    stock: 15,
  },
];

export let mockFetch = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(productos);
    }, 1000);
  });
};
