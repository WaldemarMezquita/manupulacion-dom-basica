/*const h1 = document.querySelector('h1');
const p = document.querySelectorAll('p');
const parrafito = document.querySelector('.parrafito');
const pid = document.getElementById('pid');
const input = document.querySelector('input');


console.log(p);
console.log({
    h1,p,parrafito,pid,input,
});

h1.innerHTML = 'Patito <br> feo';
console.log(h1.getAttribute('class'));
h1.setAttribute('class','rojo');
console.log(h1.getAttribute('class'));

h1.classList.add('amarillo');
console.log(h1.getAttribute('class'));

h1.classList.remove('rojo');
console.log(h1.getAttribute('class'));

input.value = '456';

const img= document.createElement('img');
img.setAttribute('src','https://static.platzi.com/static/images/conf/logo_black@2x.png');
pid.innerHTML = "";
pid.append(img);*/

const input1 = document.getElementById('calculo1');
const input2 = document.getElementById('calculo2');
const btn = document.getElementById('calcular');
const pResult = document.getElementById('resultado');
const form = document.getElementById('formulario');

/*btn.addEventListener('click',btnOnClick);

function btnOnClick(){
    const sumaImputs = input1.value + input2.value;
    pResult.innerText = "Resultado: " + sumaImputs;
}*/

form.addEventListener('submit',sumarImputsValues);

function sumarImputsValues(event){
    event.preventDefault();//evita que se recargue la página al hacer clic en el botón
    const sumaImputs = input1.value + input2.value;
    pResult.innerText = "Resultado: " + sumaImputs;
}








