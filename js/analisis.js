//helpers
//empezamos a calcular la mediana 
//sabemos si el muero es par
function esPar(numero) {
    return (numero % 2 === 0);
}
//se calcula la mediana entre los dos elementos =
//(personaMitad1 y personaMitad2)
function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;

        }
    );
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}

//calculadora de mediana
//calculamos la mediana general
function medianaSalarios(lista) {
    //nos posicionamos en la mitad de los obejos para sacar la mediana 
    const mitad = parseInt(lista.length / 2);
    //vemos si la lista de nuestras personas en colombia es par o no 
    //le envia la cantidad de elementos que hay en la lista(lista.length)
    if (esPar(lista.length)) {
        //si es par
        // se calcula la mediana 
        const personaMitad1 = lista[mitad - 1];
        const personaMitad2 = lista[mitad];
        //envia los datos de las dos personas a la funion calcularMediaAritmetica
        const mediana = calcularMediaAritmetica([personaMitad1, personaMitad2]);
        return mediana;
    } else {
        //si no es par
        const personaMitad = lista[mitad];
        return personaMitad;
    }
}

//me trae el salario de las personas
const salariosCol = colombia.map(
    function(persona) {
        return persona.salary;
    }
);
//me orgniza la lista de los salarios
const salariosColSorted = salariosCol.sort(
    function(salaryA, salaryB) {
        return salaryA - salaryB;
    }
);

const medianaGeneralCol = medianaSalarios(salariosColSorted);

//vamos a crear el top 10
//calculamos el 10%
// en el spliceStart empezamos en el 90%
const spliceStart = (salariosColSorted.length * 90) / 100;
//la cantidad total de personas que hay, le restamos la
//cantidad de spliceStart paa sacar el 10% que falta
const spliceCount = salariosColSorted.length - spliceStart;

//splice posiciona las cordenas para tomar datos
const salarioColTop10 = salariosColSorted.splice(
    spliceStart,
    spliceCount,
);

const medianaTop10Col = medianaSalarios(salarioColTop10);



// medianaGeneralCol,
// medianaTop10Col,


//mostramos la mediana de los salarios

const mediana = document.getElementById("mediana");

const caja2 = document.createElement("div");
const caja = document.createElement("div");
const media = document.createElement("h2");
const top10 = document.createElement("h2");

caja.classList.add("card");
caja2.classList.add("card");
media.classList.add("media");
top10.classList.add("media");

media.innerText = " el sueldo medio es de: $" + medianaTop10Col;
top10.innerText = " la mediana del 10% es de: " + medianaTop10Col;


mediana.appendChild(caja);
mediana.appendChild(caja2);
caja.appendChild(media);
caja2.appendChild(top10);
// caja.appendChild()