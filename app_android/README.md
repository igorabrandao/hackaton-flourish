Siorganize Mobile
=========================

Neste repositório, encontram-se os códigos relacionados ao aplicativo de Siorganize.

Durante o desenvolvimento, navegue até a pasta `src` e execute:

    ionic serve

Para executar o projeto no navegador juntamente com os plugins do cordova, execute:

    ionic cordova run browser

Para executar o projeto no navegador com os plugin do cordova e livereload, execute:

    npm run browser

Isso instalará todas as dependências do projeto, criará um servidor local  `http://localhost:8100` e abrirá o navegador com o LiveReload ativado para que a página se auto-atualize toda vez que for detectada alguma mudança no código.

E quando quiser lançar o aplicativo para produção, execute o comando:

    ionic cordova build <platform> --prod --release

Para atualizar o `CHANGELOG.md`, primeiramente instale o `auto-changelog`: [**npm install -g auto-changelog**] e depois execute o comando:

    auto-changelog --template keepachangelog