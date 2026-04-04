
function filtrar(tamanho) {
  const produtos = document.querySelectorAll('.produto');

  for (let i = 0; i < produtos.length; i++) {

    if (tamanho === 'todos') {
      produtos[i].style.display = 'block';

    } else if (produtos[i].dataset.tamanho === tamanho) {
      produtos[i].style.display = 'block';

    } else {
      produtos[i].style.display = 'none';
    }

  }
}