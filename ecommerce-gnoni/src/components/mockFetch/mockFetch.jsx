let productos = [
  {
    id: "1",
    nombre: "Varita Harry Potter",
    precio: 1700,
    imagen: "./src/assets/1.png",
    descripcion: "Haz magia con la varita del mismisimo Harry Potter!",
    stock: 20,
    categoria: "Varitas",
  },
  {
    id: "2",
    nombre: "Varita de Sauco",
    precio: 1700,
    imagen: "./src/assets/2.jpeg",
    descripcion: "Pelea con tus enemigos con la varita del Señor Tenebroso!",
    stock: 15,
    categoria: "Varitas",
  },
  {
    id: "3",
    nombre: "Bufanda Gryffindor",
    precio: 6000,
    imagen: "./src/assets/3.png",
    descripcion: "Bufanda de la casa Gryffindor, ideal para utilizar en esta epoca de invierno. Con un metro setenta de largo. Producto con licencia oficial.",
    stock: 10,
    categoria: "Bufandas",
  },
  {
    id: "4",
    nombre: "Bufanda Slytherin",
    precio: 6000,
    imagen: "./src/assets/4.png",
    descripcion: "Bufanda de la casa Slytherin, ideal para utilizar en esta epoca de invierno. Con un metro setenta de largo. Producto con licencia oficial.",
    stock: 10,
    categoria: "Bufandas",
  },
  {
    id: "5",
    nombre: "Tazon XXL",
    precio: 1600,
    imagen: "./src/assets/5.png",
    descripcion: "Tazon XXL o cerealero con el logo de Harry Potter para comenzar tus dias con todas las pilas!. Producto con licencia oficial.",
    stock: 20,
    categoria: "Varios",
  },
  {
    id: "6",
    nombre: "Pulsera Hogwarts",
    precio: 1000,
    imagen: "./src/assets/6.png",
    descripcion: "De cuero trenzado.",
    stock: 12,
    categoria: "Varios",
  },
  {
    id: "7",
    nombre: "Giratiempos",
    precio: 3500,
    imagen: "./src/assets/7.png",
    descripcion: "Giratiempos de Hermione en tus manos. Viene con un estuche de madera grabada.",
    stock: 20,
    categoria: "Varios",
  },
  {
    id: "8",
    nombre: "Llavero Hogwarts",
    precio: 3000,
    imagen: "./src/assets/8.png",
    descripcion: "Viene con un estuche de madera grabada.",
    stock: 15,
    categoria: "Varios",
  },
];

export const mockFetch = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(id ? productos.find( prod => prod.id === id) : productos);
    }, 1000);
  });
};
