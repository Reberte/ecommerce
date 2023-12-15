//Importando as funções que estão em arquivos separados

import { renderizarCatalogo } from "./src/cartaoProduto";
import {
  atualizarPrecoCarrinho,
  inicializarCarrinho,
  renderizarProdutosCarrinho,
} from "./src/menuCarrinho";
import { inicializarFiltros } from "./src/filtroCatalogo";

//Inicializando algumas funções principais para o funcionamento do site usando JavaScript
renderizarCatalogo();
inicializarCarrinho();
renderizarProdutosCarrinho();
atualizarPrecoCarrinho();
inicializarFiltros();
