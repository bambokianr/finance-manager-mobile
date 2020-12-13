## **CES-26: [mobile] Projeto final**

> Alunos:
> Leo Gomes, Pedro Alves e Rafaella Bambokian - COMP21


<img src="./gif/prj_mobile.gif" width="320" />

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

Permitir a criação, edição e remoção de despesas. Assim como no projeto web, criar o formulário presente na página `InsertEditExpense` e, além disso, incrementar na listagem das despesas os botões de ação que permitem tanto remover um item quanto direcioná-lo para a tela mencionada anteriormente.

Adicionar à página `Dashboard` o gráfico que permite a visualização do overview semanal de despesas, com a possibilidade de filtrar os dados pelas tags de categorização. Para isso, pode ser usada a biblioteca [react-native-chart-kit](https://github.com/indiespirit/react-native-chart-kit).

Integrar o aplicativo com o Google Calendar para que, ao adicionar uma despesa que tenha um lembrete para efetuar o pagamento, esse item possa ser inserido à conta Google do usuário na data escolhida para o aviso.

obs: repositório back-end do projeto [aqui](https://github.com/alvesouza/financemanagerces26back).

obs: repositório front-end web do projeto [aqui](https://github.com/bambokianr/finance-manager-front).

### :round_pushpin: Execução do projeto

** Modo 1
Acessar o [link](https://expo.io/@bamborrib/projects/finance-manager-mobile).

** Modo 2
É necessário ter [Node.js](https://nodejs.org/en/) e [expo cli](https://docs.expo.io/workflow/expo-cli/) instalado em sua máquina.

```
Instalar todos as dependências do projeto, presentes no arquivo package.json com o seguinte comando
$ npm install

Para executar o projeto, rodar o seguinte comando
$ npm start

A partir daí, pode-se ter acesso ao app desenvolvido de várias maneiras:
- baixar o expo app e escanear o QR code com seu celular para que o projeto seja executado
- rodar com emulador em sua máquina
```
