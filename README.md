# Lista de Tarefas com React e Typescript

## Visão Geral
A lista de tarefas com React é uma aplicação simples de gerenciamento de tarefas construída usando HTML, CSS, TypeScript e React. Permite aos usuários adicionar e marcar tarefas como concluídas. A aplicação oferece uma interface limpa e intuitiva para gerenciar tarefas de forma eficiente.

![image](https://github.com/Jeanpk12/Lista-de-Tarefas-com-React/assets/122842874/301453e9-28ac-437f-b167-c908d5d2e40e)

## Funcionalidades
- **Adição de Tarefas**: Os usuários podem adicionar novas tarefas à lista digitando o nome da tarefa e pressionando a tecla Enter.
- **Exibição da Lista de Tarefas**: A aplicação exibe uma lista de tarefas, mostrando seus nomes e uma caixa de seleção indicando se a tarefa está concluída ou não.
- **Atualização de Status da Tarefa**: Os usuários podem marcar tarefas como concluídas ou não, clicando nas caixas de seleção ao lado de cada tarefa.

## Estrutura do Projeto
O projeto está organizado em vários arquivos e pastas principais:

- **App.tsx**: O componente principal que orquestra a estrutura geral da aplicação. Gerencia o estado da lista de tarefas e renderiza os componentes da lista de tarefas.

- **AddArea/index.tsx**: Um componente responsável por lidar com a adição de novas tarefas. Ele consiste em um campo de entrada para inserir nomes de tarefas e atualiza dinamicamente a lista de tarefas quando a tecla Enter é pressionada.

- **ListItem.tsx**: Um componente que representa um item de tarefa individual na lista. Inclui uma caixa de seleção para alternar o status concluído da tarefa e exibe o nome da tarefa.

- **styles.ts**: Contém componentes estilizados para uma estilização consistente em toda a aplicação.

## Tecnologias Utilizadas
- HTML
- CSS
- TypeScript
- React

## Uso
1. Clone o repositório.
2. Instale as dependências: `npm install`.
3. Execute a aplicação: `npm start`.
4. Abra a aplicação em seu navegador.

Sinta-se à vontade para personalizar e estender a aplicação com base em suas necessidades!
