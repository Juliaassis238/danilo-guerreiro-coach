# Danilo Guerreiro Coach

Site institucional responsivo de página única para Danilo Guerreiro, International Head Coach de MMA e boxe. O design editorial usa preto, branco e vermelho, sem dourado ou emojis, com uma capa distinta para cada formato de tela.

## Imagens e desempenho

As capas estão em `images/cover-mobile.webp` (1440 × 2560, aproximadamente 220 KB) e `images/cover-desktop.webp` (2560 × 1440, aproximadamente 154 KB). O navegador escolhe a imagem correta pelo elemento HTML `<picture>` e pelos breakpoints, e o HTML pré-carrega apenas a versão correspondente à largura da tela. A foto principal recebe prioridade alta, evitando baixar a capa alternativa no mesmo dispositivo. Os caminhos do armazenamento do projeto são usados como fallback caso a cópia local falhe.

## Executar localmente

Não há dependências externas nem etapa de compilação. Com Python 3 instalado, na raiz do repositório execute:

```bash
python3 -m http.server 3000
```

Depois abra `http://localhost:3000`.

## Estrutura

- `index.html`: conteúdo, metadados, pré-carregamento responsivo e navegação acessível.
- `styles.css`: identidade visual, hero em tela cheia e layouts responsivos.
- `app.js`: fallback das capas, menu móvel, ano do rodapé e animações respeitando `prefers-reduced-motion`.
- `images/`: as duas capas WebP incluídas no repositório.
- `dg-mark.svg`: monograma vetorial e favicon.
- `manus-routes.json`: declaração da rota da página inicial.
