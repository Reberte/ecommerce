import {
  desenharProdutoSimples,
  lerLocalStorage,
  apagarDoLocalStorage,
  salvarLocalStorage,
} from "./src/utilizadades";

function desenhaProdutosCheckout() {
  const idsProdutoCarrinhoComQuantidade = lerLocalStorage("carrinho") ?? {}; // Se não encontrar a chave carrinho do cache do navegador ?? então insira um objeto vazio na variavel

  for (const idProduto in idsProdutoCarrinhoComQuantidade) {
    desenharProdutoSimples(
      idProduto,
      "container-produtos-checkout",
      idsProdutoCarrinhoComQuantidade[idProduto]
    );
  }
}

function finalizarCompra(evento) {
  evento.preventDefault(); //preventDefault() desativa o comportamento padrão do Submit que a apenas transmitir as informações enviadas, agora ele irá fazer o que solicitamos que é direcionar para página /pedidos.html
  const idsProdutoCarrinhoComQuantidade = lerLocalStorage("carrinho") ?? {};
  if (Object.keys(idsProdutoCarrinhoComQuantidade).length === 0) {
    return; //Se o carrinho estiver vazio não vai consegui finalizar a compra
  }
  const dataAtual = new Date();

  const pedidoFeito = {
    dataPedido: dataAtual,
    pedido: idsProdutoCarrinhoComQuantidade,
  };

  const historicoDePedidos = lerLocalStorage("historico") ?? [];
  const historicoDePedidosAtualizados = [pedidoFeito, ...historicoDePedidos];

  salvarLocalStorage("historico", historicoDePedidosAtualizados);

  apagarDoLocalStorage("carrinho");
  // window.location.href = window.location.origin + "/pedidos.html";
  window.location.href = "./pedidos.html";
}

desenhaProdutosCheckout();

document.addEventListener("submit", (evt) => finalizarCompra(evt)); // quando tiver o evento subimit, o evento vai passar o evento para a função finalizar compra e lá ele vai travar o evento padrão do foormulario que é transmitir na mesma tela;
