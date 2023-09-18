let biblioteca = [
    { titulo: "El nombre del viento", autor: "Patrick Rothfuss", año: "2007" },
    { titulo: "1984", autor: "George Orwell", año: "1949" },
    { titulo: "Cien años de soledad", autor: "Gabriel García Márquez", año: "1967" },
    { titulo: "Harry Potter y la piedra filosofal", autor: "J.K. Rowling", año: "1997" },
    { titulo: "El Hobbit", autor: "J.R.R. Tolkien", año: "1937" },
    { titulo: "Crimen y castigo", autor: "Fyodor Dostoevsky", año: "1866" }
];

function mostrarLibros() {
    if (biblioteca.length === 0) {
        console.log("La biblioteca está vacía.");
    } else {
        console.log("Libros en la biblioteca:");
        for (let libro of biblioteca) {
            console.log("Título:", libro.titulo);
            console.log("Autor:", libro.autor);
            console.log("Año:", libro.año);
            console.log("");
        }
    }
}

function buscarLibro() {
    const opcionBusqueda = prompt("Seleccione una opción de búsqueda:\n1. Buscar por título\n2. Buscar por autor\n3. Buscar por año");

    if (opcionBusqueda) {
        switch (opcionBusqueda) {
            case "1":
                const tituloBuscado = prompt("Ingrese el título del libro a buscar:");
                buscarPorCampo("titulo", tituloBuscado);
                break;
            case "2":
                const autorBuscado = prompt("Ingrese el autor del libro a buscar:");
                buscarPorCampo("autor", autorBuscado);
                break;
            case "3":
                const añoBuscado = prompt("Ingrese el año del libro a buscar:");
                buscarPorCampo("año", añoBuscado);
                break;
            default:
                console.log("Opción de búsqueda no válida.");
        }
    } else {
        console.log("Operación cancelada.");
    }
}

function buscarPorCampo(campo, valor) {
    const resultados = biblioteca.filter(libro => libro[campo].toLowerCase().includes(valor.toLowerCase()));

    if (resultados.length > 0) {
        console.log("Resultados de la búsqueda:");
        for (let libro of resultados) {
            console.log("Título:", libro.titulo);
            console.log("Autor:", libro.autor);
            console.log("Año:", libro.año);
            console.log("");
        }
    } else {
        console.log("No se encontraron libros que coincidan con la búsqueda.");
    }
}

function agregarLibro() {
    const titulo = prompt("Ingrese el título del libro:");
    const autor = prompt("Ingrese el autor del libro:");
    const año = prompt("Ingrese el año de publicación del libro:");

    if (titulo && autor && año) {
        biblioteca.push({ titulo, autor, año });
        console.log("Libro agregado a la biblioteca.");
    } else {
        console.log("Operación cancelada. Asegúrese de ingresar todos los datos.");
    }
}

function eliminarLibro() {
    const tituloEliminar = prompt("Ingrese el título del libro a eliminar:");
    if (tituloEliminar) {
        for (let i = 0; i < biblioteca.length; i++) {
            if (biblioteca[i].titulo.toLowerCase() === tituloEliminar.toLowerCase()) {
                biblioteca.splice(i, 1);
                console.log("Libro eliminado de la biblioteca.");
                return;
            }
        }
        console.log("Libro no encontrado en la biblioteca.");
    } else {
        console.log("Operación cancelada.");
    }
}

mostrarLibros();
const opcion = prompt("Seleccione una opción:\n1. Buscar libro\n2. Agregar libro\n3. Eliminar libro");

switch (opcion) {
    case "1":
        buscarLibro();
        break;
    case "2":
        agregarLibro();
        break;
    case "3":
        eliminarLibro();
        break;
    default:
        console.log("Opción no válida.");
}
function buscarPorCampo(campo, valor) {
    const resultados = biblioteca.filter(libro => libro[campo].toLowerCase().includes(valor.toLowerCase()));

    if (resultados.length > 0) {
        console.log("Resultados de la búsqueda:");
        for (let libro of resultados) {
            console.log("Título:", libro.titulo);
            console.log("Autor:", libro.autor);
            console.log("Año:", libro.año);
            console.log("");
        }
        alert("true"); 
    } else {
        console.log("No se encontraron libros que coincidan con la búsqueda.");
        alert("false"); 
    }
}







