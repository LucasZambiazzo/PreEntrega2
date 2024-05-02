

const Productos= [
    {id:1, producto: "Yogurt Vainilla Serenisima", precio:1140 },
    {id:2, producto: "Dulce de leche Ilolay", precio:1986},
    {id:3, producto: "Don Satur Salados", precio:693},
    {id:4, producto: "Amstel Lager x 473cc", precio:1069},
    {id:5, producto: "Fideos mostachol arcor x500g", precio:1210},
    {id:6, producto: "Arroz Gallo Oro 1kg", precio: 3706},
    {id:7, producto: "Krachitos Papas Fritas x480g", precio:6340}

]
const buscar = Productos.find(producto => producto.id===3)
console.log(buscar)

const existe = Productos.some(producto => producto.nombre === "Yogurt")
console.log(existe)

const precio= Productos.filter((el) => el.precio < 1100)

console.log(precio)

const listaNombres = Productos.map(producto => producto.producto)
console.log(listaNombres)

