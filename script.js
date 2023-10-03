let urlap = document.querySelector('.urlap');
let tablazat = document.querySelector('.tab');

function hozzaad(event){
    event.preventDefault();
    // console.log('OK')
    let dolgozo = {}; //üres objektum
    dolgozo.nev = document.querySelector('#nev').value;

    console.log(dolgozo)
}


urlap.addEventListener('submit',hozzaad)