import { atlag } from './lista.js';
import * as lista from './lista.js';
function addnum(){
    lista.hozzaad(parseInt(document.getElementById("bekert").value));
    alert(atlag());
    console.log(lista.lista);
    
}

document.getElementById("gomb").addEventListener('click' , addnum) ;
