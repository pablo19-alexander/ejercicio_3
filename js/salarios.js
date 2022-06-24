const colombia = [];
// creamos a las personas (objetos)
colombia.push({
    name: "juanita",
    salary: 1000,
});
colombia.push({
    name: "andrea",
    salary: 500,
});
colombia.push({
    name: "pablo",
    salary: 1500,
});
colombia.push({
    name: "natalia",
    salary: 1700,
});
colombia.push({
    name: "harol",
    salary: 2000,
});
colombia.push({
    name: "pedro",
    salary: 1900,
});
colombia.push({
    name: "juan",
    salary: 1200,
});
colombia.push({
    name: "laura",
    salary: 1300,
});
colombia.push({
    name: "crisian",
    salary: 1200,
});
colombia.push({
    name: "andres",
    salary: 1600,
});


const main = document.getElementById("main");
colombia.forEach((elem) => {
    //crea donde van a aparecer los objetos
    const line = document.createElement("div");
    const nombre = document.createElement("h2");
    const salario = document.createElement("h4")
        //llama sus clases 
    line.classList.add("card");
    nombre.classList.add("name");
    salario.classList.add("salario");
    // crea lo que va a imprimir
    nombre.innerText = "Nombre: " + elem.name
    salario.innerText = "Sueldo de: $" + elem.salary
    line.appendChild(nombre);
    line.appendChild(salario);
    main.appendChild(line);
})



// const resulNo = document.getElementById("ResulNo");
// //muestra el resultado atra vez de un parrafo con el .innerText
// resulNo.innerText = "" + name;