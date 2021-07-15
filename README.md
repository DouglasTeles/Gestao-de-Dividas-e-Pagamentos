# API Gestao-de-Dividas-e-Pagamentos
Sistema para gestão de débitos de moradores em uma república

## Regras de negócio
  Essa API tem a função de gerenciar débitos de moradores de uma república.
  Um dos moradores será o administrador do sistema, e ele tera alguns privilegios e responsabilidades extras. 
  O administrador é responsavel por cadastrar todos os débitos mensais dos outros moradores. 
  O administrador também pode cadastrar créditos aos moradores, sendo que esses créditos são abatidos do débito total de cada morador.
  O sistema faz o calculo de débito total de cada morador individualmente.

## tecnologias utilizadas
    Nodejs
    JavaScript
    Express
    MongoDB

### Recursos exclusivos ao Administrador
    Deletar Usuários
    Criar categoria de contas
    Deletar uma categoria de contas
    Criar débito a um morador
    Deletar débito de um morador
    Atualizar débito de um morador
    Deletar os débitos de todos moradores
    Cadastrar crédito a um morador

### Recursos disponiveis aos moradores (inclui o adm)
    Criar um cadastro
    Realizar Login
    Listar as categorias de contas
    Listar os débitos individuais
    Visualizar créditos individuais
    Visualizar o Total de débitos
    

### Disponivel em
  getao-republica.herokuapp.com


### Considerações <br/>
Essa API ainda não esta em sua verão final, pretendo fazer alguns ajustes para adições de recursos e melhorias no código se houver necessidade.

### Nesse momento estou desenvolvendo o front com React.
