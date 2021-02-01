// Crea una clase Factura que reciba el nombre del cliente, un array de elementos y una
// pseudoclase información con las propiedades: baseImponible, iva, total y forma de
//pago.
//La clase Cliente recibirá el nombre, dirección, teléfono y nif.
//La clase Elemento recibirá la descripción, cantidad y precio.

class Cliente {
    constructor(nombre, direccion, telefono, nif) {
      this.nombre = nombre;
      this.direccion = direccion;
      this.telefono = telefono;
      this.nif = nif;
    }
  }
  
  class Elemento {
    constructor(descripcion, cantidad, precio) {
      this.descripcion = descripcion;
      this.cantidad = cantidad;
      this.precio = precio;
    }
  }
  
  class Factura {
    constructor(cliente, elementos) {
      this.cliente = cliente;
      this.elementos = elementos;
      this.informacion = {
        baseImponible: 0,
        iva: 21,
        total:0,
        formaPago: "contado"
      };
  
//Cálculo del total: recorreremos los elementos del array de elementos calculando la
//base imponible de la factura y el total. Esa información la guardaremos en el total de
//la pseudoclase información.
//Base imponible = cantidad * precio.
//Total = base imponible * (1+ (100/16)).
//Mostrar en pantalla. Ejecutaremos la función anterior y mostraremos el resultado por
//pantalla.



      this.calculaTotal = () => {
        for (var i = 0; i <this.elementos.length; i++) {
          this.informacion.baseImponible += this.elementos[i].cantidad * this.elementos[i].precio;
        }
        this.informacion.total = this.informacion.baseImponible * (1+(this.informacion.iva/100));
      }
  
      this.muestraTotal = function () {
        this.calculaTotal();
        alert("total = " + this.informacion.total + " euros");
      }
    };
  }
  
  var elCliente = new Cliente("Cliente 1", "", "", "");
  var losElementos = [new Elemento("elemento1", "1", "5"), new Elemento("elemento2", "2", "12")];
  var laFactura = new Factura(elCliente, losElementos);
  laFactura.muestraTotal();