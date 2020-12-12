## **CES-26: [mobile] Projeto final**

> Alunos:
> Leo Gomes, Pedro Alves e Rafaella Bambokian - COMP21

_Overview do projeto_

### :bangbang: Proposta

Aplicativo para visualização dos gastos pessoais anteriormente geridos na [plataforma web](https://github.com/bambokianr/finance-manager-front) desenvolvida como projeto exploratório da disciplina. A aplicação final, desenvolvida em React Native, contempla:

- acesso a contas já criadas na plataforma web
- criação de nova conta
- listagem do histórico de despesas registrados na plataforma web - cada item contendo descrição, categorização por tag, valor gasto e dia em que a despesa foi feita
- lista contendo lembretes diários, ou seja, a despesa foi criada por registrada como pagamento pendente

### :computer: Desenvolvimento

Principais módulos auxiliares ao desenvolvimento mobile do projeto.

- expo - ferramenta usada como ambiente de desenvolvimento React Native
- context API - gerenciamento de estados globais da aplicação
- styled-components - biblioteca de estilos que permite escrever código css em arquivos JavaScript
- unform - biblioteca para criação de formulários focada em performance, evitando a renderização de cada componente com a atualização de campos de inserção de dados
- yup - biblioteca para validação de dados (vindos de inputs de formulários)
- react-navigation (navegação 'stack') - biblioteca que facilita a manipulação de rotas da aplicação
- axios - cliente HTTP para consumo de api backend
- async storage - persistência de informações simples do contexto do usuário no dispositivo em que o app está sendo executado
- react-native-iphone-x-helper - biblioteca que auxilia na criação de layouts para distintos dispositivos (variáveis contendo métricas automáticas que facilitam a disposição de componentes)
- redux / react-redux - biblioteca de gerenciamento de estados globais
- redux-saga - controle de operações assíncronas (acesso à api da aplicação) ligadas ao estado do redux

### :pencil: Implementações futuras

...

obs: repositório back-end do projeto [aqui](https://github.com/alvesouza/financemanagerces26back).

obs: repositório front-end web do projeto [aqui](https://github.com/bambokianr/finance-manager-front).
