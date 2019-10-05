
Repositório do Hackatur (SEBRAE - 2019)
# hackto-theByters
# Aplicação para auxiliar o turista e o cidadão palmense a encontrar os melhores atrativos pela cidade

  

> Desenvolvido por Francisco Vargas, Maria Eugênia M. Pereira.


## Instalação
O projeto usa o [Node.js](http://nodejs.org/) para rodar o servidor e o [Yarn](https://yarnpkg.com) para gerenciar pacotes utilizados pela aplicação.


## Dependências da aplicação
Os pacotes (dependências) que são necessários para o funcionamento da aplicação serão salvos na pasta `node_modules`. Esta pasta não é incluída no repositório e pode ser criada rapidamente com o comando `yarn install`.

1)Handlebars
2)Express
3)Moongose

##o arquivo `package.json` guarda as informações sobre as dependências utilizadas.


##MVC - Software Architectural Pattern

`Models` e `Controllers` encontram-se em `/backend/src`
Views


###Database

MongoDB

### Servidor

Podemos iniciar o servidor digitando o comando `node index.js` dentro da pasta do projeto, no seu terminal ou CMD.

###index.js

Index.js é o arquivo principal da nossa aplicação, onde guarda a configuração das requisições HTTP além de chamar os métodos controladores

### Cliente

Ao iniciar o servidor, você verá no console uma mensagem indicando que o servidor foi iniciado. A partir disso, você poderá acessar pelo seu navegador a partir do endereço [http://localhost:3001](http://localhost:3001). A porta a ser utilizada pode ser alterada em index.js.




