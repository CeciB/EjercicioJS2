let frases = ['escritorio', 'gol', 'mate', 'improvisar','remarla','en','dulce de leche', 'copiar', 'covid','jajaja'];

let mensaje = document.querySelector("#mensaje");

for (let frase of frases) {
  let item = document.createElement('li');
  let letras = frase;

  if (frase.includes(" ")) {
    letras = frase.replace(/ /g, "");
    
  }

  //if(frase.length>5){
  //  item.classList.add('rojo');
  //}

  item.innerText = `La frase "${frase}" tiene ${letras.length} caracteres`;

  mensaje.appendChild(item);

}
debugger;


// gol tiene 3 caracteres