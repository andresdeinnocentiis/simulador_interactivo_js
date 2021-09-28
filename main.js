/*
ENTREGA 04-A: SIMULADOR INTERACTIVO

    by Andres De Innocentiis
*/

const SALIR = 0;
let exit = false
const TERMINAR = 99;
let opcion1 = "Panchin común re aburrido"
let opcion2 = "Panchin más copado (2 salsas)"
let opcion3 = "Panchin buenardo super completo"
let opcion4 = "El mismo que el 3 pero con gaseosa y papitas"

let menu = `===========================================\n~~~~~~~~~~~~~~|  EL PANCHIN LOCO  |~~~~~~~~~~~~~~\n===========================================\n\n1. ${opcion1} ________________________________ $150\n2. ${opcion2} ____________________________ $300\n3. ${opcion3} ________________________ $500\n4. ${opcion4} __________ $4700\n\n==============================================\n0. SALIR\n==============================================\n`;

/*
const precios = {
    opcion1: 150,
    opcion2: 300,
    opcion3: 500,
    opcion4: 4700,
};


let ticket = `Ticket de compra\n"El Panchin loco"\n----------------\n`
const carrito = [];
const total = [];
let sumaTotal
const totalProducto = {}
*/


function mostrarTicket (carrito,totalProducto,sumaTotal,total,precios) {
    let cuenta = `--------------------------- TICKET DE COMPRA ------------------------\n---------------------------------------------------------------------------\n                                         "EL PANCHIN LOCO"                                   \n---------------------------------------------------------------------------\n\n`
    let contador = 0;
    let linea = "_______________________________________________________"
    
    

    for (let producto of carrito) {
        if (!(totalProducto.hasOwnProperty(producto))) {
            totalProducto[producto] = 1;
        } else {
            totalProducto[producto] += 1;
            
        }
    }

    for (let precio of total) {
        sumaTotal += precio;
    }
    

    for (const clave in totalProducto) {
        contador +=1
        cuenta += `(${contador}) ${clave} (x ${totalProducto[clave]}) ${linea.substr(totalProducto[clave]+clave.length)} $${precios[clave] * totalProducto[clave]}\n`
    }

    cuenta += `\n---------------------------------------------------------------------------\nTOTAL _________________________________________________________ $${sumaTotal}\n---------------------------------------------------------------------------`
    return cuenta
}

function main() {
    const precios = {
        "Panchin común re aburrido": 150,
        "Panchin más copado (2 salsas)": 300,
        "Panchin buenardo super completo": 500,
        "El mismo que el 3 pero con gaseosa y papitas": 4700,
    };
    
    
    const carrito = [];
    const total = [];
    let sumaTotal = 0
    const totalProducto = {}
    let opcion

    while (exit == false) {
        opcion = Number(prompt(menu));
        if (opcion == 1) {
            carrito.push(opcion1);
            total.push(precios["Panchin común re aburrido"]);
            alert(`Te compraste un ${opcion1}, querés algo más wachin?`);
            //"Hasta ahora llevas xxxxx queres algo mas?"

        } else if (opcion == 2) {
            carrito.push(opcion2);
            total.push(precios["Panchin más copado (2 salsas)"]);
            alert(`Te compraste un ${opcion2}, querés algo más wachin?`);

        } else if (opcion == 3) {
            carrito.push(opcion3);
            total.push(precios["Panchin buenardo super completo"]);
            alert(`Te compraste un ${opcion3}, querés algo más wachin?`);

        } else if (opcion == 4) {
            carrito.push(opcion4);
            total.push(precios["El mismo que el 3 pero con gaseosa y papitas"]);
            alert(`Te compraste un ${opcion4}, querés algo más wachin?`);

        } else if (opcion == SALIR && (carrito.length)) {
            
            cuenta = mostrarTicket(carrito,totalProducto,sumaTotal,total,precios);
            alert(cuenta);
            console.log(cuenta)
            exit = true
        } else if (opcion == SALIR && !(carrito.length)) {
            alert("Gracia por no compra nada pa'.. Vuelva prontos")
            exit = true
        } else {
            alert("Pero por qué no te fijas la opción que marcaste? Son 4 nomás, no es muy difícil viejo")
        }
        
    }

}

main()