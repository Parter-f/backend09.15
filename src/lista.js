let lista = [];

function hozzaad(num){
    if(num < 0)
    {console.log("A szám hibás , kérem adjon meg 0 vagy annál nagyobb számot");}
    else{
        lista.push(num);
    }
}

function atlag(){
    let sum =0;
   for(let i = 0 ; i < lista.length; i++){

    sum += lista[i]

   }
   console.log(sum);
}
