let urlap = document.querySelector('.urlap');
let tablazat = document.querySelector('.tablazat');

let dolgozok = [];

function hozzaad(event){
    event.preventDefault();
    // console.log('OK')
    let dolgozo = {}; //üres objektum
    dolgozo.nev = document.querySelector('#nev').value;
    dolgozo.email = document.querySelector('#email').value;
    dolgozo.szuletesiDatum = document.querySelector('#szuletesi-datum').value;
    dolgozo.neme = document.querySelector('input[name="neme"]:checked').value;

    console.log(dolgozo)
    dolgozok.push(dolgozo); // .push() a végén bővíti a tömböt
}


urlap.addEventListener('sumbit',hozzaad);