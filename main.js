const form = document.getElementById("formulario");
let formNumA = parseInt(document.getElementById('num-a'));
let formNumB = parseInt(document.getElementById('num-b'));

function validaNum(num1, num2) {
    let resultado = false;
    if (num1 > num2) {resultado = true}
    return resultado;
}

form.addEventListener('submit', function(e) {

    //e.preventDefault();
    
    let numA = parseInt(document.getElementById('num-a').value);
    let numB = parseInt(document.getElementById('num-b').value);

    let resultado = validaNum(numA, numB)

    if (resultado) {
        document.getElementById('num-a').classList.add('error');
        document.querySelector('.error-message').style.display = "block";
        document.querySelector('.succes-message').style.display = 'none';} 
    else {
        document.getElementById('num-a').classList.remove('error');
        document.querySelector('.succes-message').style.display = 'block';
        document.querySelector('.error-message').style.display = "none";}
})
