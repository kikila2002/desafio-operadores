

class Persona {
    constructor (nombre, email, peso, dolar) {
        this.n = nombre;
        this.e = email;
        this.p = peso;
        this.d = dolar;
    }

    calcularDolar() {
        return this.p / this.d;
    }
}


const personas = [];

 

const idFormulario = document.getElementById('formulario');

idFormulario.addEventListener('submit', (e) => {
    e.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const peso = document.getElementById('peso').value;
    const dolar = document.getElementById('dolar').value;
    
    const persona = new Persona (nombre, email, peso, dolar);
    
    personas.push(persona);
    
    localStorage.setItem('Persona', JSON.stringify(personas));
    
    idFormulario.reset();

     
    mostrarInfo(persona);
})


const resultado = document.getElementById('infoUsuarios');

const mostrarInfo = (persona) => {
    let aux = '';
    aux += `<p class="resultado"> ${persona.n} tu Dolares son los siguientes: </p>
            <p class="resultado"> IMC: ${persona.calcularDolar()} </p>`;
    resultado.innerHTML = aux;
}



const botonAdmin = document.getElementById('admin');
const datosAdmin = document.getElementById('datosAdmin');

botonAdmin.addEventListener('click', () => {
    const personas = JSON.parse(localStorage.getItem('Persona'));
    let aux = '';
    personas.forEach(persona => {
        aux += `<p class="resultado"> Nombre: ${persona.n} </p>
                <p class="resultado"> Correo Electrónico: ${persona.e}</p><hr>`
    });
    datosAdmin.innerHTML = aux;
});