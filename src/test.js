import{lista , hozzaad , atlag} from './lista.js';

for(let i = 0 ; i < 15; i++){

    hozzaad(Math.floor(Math.random() * 11));
    console.log(lista[i]);
   }

   hozzaad(-5);
   atlag();