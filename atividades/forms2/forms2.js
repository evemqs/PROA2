function validarNome(){
  let elemento = document.getElementById("nome");
  let valorElemento = elemento.value;
  if (valorElemento.length == 0) {
      alert(`Preencha o nome`);
      elemento.style.border = 'red solid 2px';
  } else {
      alert(`O nome digitado foi: ${valorElemento}`);
      elemento.style.border = 'green dashed 2px';
  }
}

function validarEmail(){
  let elemento = document.getElementById("idEmail");
  let valorElemento = elemento.value;
  if (valorElemento.length == 0) {
      alert(`Preencha o email`);
      elemento.style.border = 'red solid 2px';
  } else {
      alert(`O email digitado foi: ${valorElemento}`);
      elemento.style.border = 'green dashed 2px';
  }
}

function validacoes(){
  validarNome();
  validarEmail();
}