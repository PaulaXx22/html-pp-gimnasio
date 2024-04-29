let Coche = {
    marca: "Toyota",
    modelo: "Corolla",
    matricula: "ABC-123"
};
let Casa={
    codPostal:"48003",
    calle:"siige 22",
    portal:"21",
    piso:"1",


}
const FullStackDeveloper  ={
    lenguajes: ["java", "javaScript"],
    proyectos: ["instagram"]
}
const Perro  ={
    nombre: "zuri", 
    raza: "boxer", 
    color: "marron", 
    edad: 1, 
    ladrar: function(){
        console.log("Guau");
    },
    popo: function(){
        return Math.random() * 3;
    } 
}

//lectura de propiedades

let marcaPortatil = Portatil.marca;
 let marcaPortatil2=Portatil["marca"];
 let grupos=Concierto.grupos;
 let RGB=[Led.rojo, Led.verde, Led.azul];

//modificación de propiedades

Portatil.modelo = "P345"
Concierto.cartelera.push("Guns N' Roses")
Concierto.fecha= new Date ()
Impresora.imprimiendo= {
    nombreArchivo: "hola",
     copias: 5,
      numPaginas:204
}

// objetos

const Noticia={
    titular: "hola",
    cuerpo: "hola2"

}

const Persona={
    nombre: "paula",
    apellidos:"hurtado",
    edad:"26"

}

const Avion = {
    numPasajeros: 150,
    despegar: function() {
        console.log("despegando");
    },
    volar: function() {
        console.log("llegando al destino");
    },
    aterrizar: function() {
        console.log("aterrizando");
    }
};
let Paquete = {
    contenido: []

};
const Pais = {
    numHabitantes: 10000000,
    continente: "América",
    gentilicio: "americano"
};
const codError = O_Error.codigo;
let integrantes = Grupo.integrantes;
let nivelesTinta = Impresora.tinta;
let pixeles = Pantalla.pixeles;
let especificaciones = Movil["especificaciones"];
Grupo.numIntegrantes = 5
Pantalla.dimensiones = "1920x1080"
Led.encendido = !Led.encendido
Movil.temperatura = "20º";