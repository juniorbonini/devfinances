# 💸 dev.finance$ - Controle Financeiro Pessoal

O **dev.finance$** é uma aplicação de gestão financeira intuitiva que permite o controle total de entradas e saídas de capital. Este projeto foi desenvolvido focado em demonstrar o domínio de **JavaScript Vanilla** e manipulação eficiente do DOM.

---

## 🚀 Diferenciais do Projeto

Este repositório demonstra habilidades fundamentais de engenharia de software para a web, indo muito além de um layout estático:

* **Arquitetura Baseada em Objetos:** O código JavaScript é organizado em objetos literais com responsabilidades únicas:
    * `Transaction`: Centraliza a lógica de negócio e cálculos financeiros.
    * `DOM`: Gerencia toda a renderização e interação com o usuário na tela.
    * `Storage`: Implementa a camada de persistência de dados.
    * `Utils`: Funções utilitárias para formatação de moedas (BRL) e datas.
* **Persistência com Web Storage API:** Utiliza o `localStorage` para garantir que os dados do usuário não sejam perdidos ao fechar ou atualizar o navegador.
* **Manipulação Dinâmica do DOM:** Adição e remoção de transações em tempo real sem a necessidade de frameworks externos, garantindo um código leve e performático.
* **Tratamento de Erros e Validação:** Implementação de fluxos de `try/catch` para validação de formulários, impedindo o envio de dados incompletos.

---

## 🛠️ Tecnologias Utilizadas

* **HTML5:** Estrutura semântica focada em acessibilidade (uso de classes como `sr-only`).
* **CSS3:** Layout moderno utilizando **Flexbox** e **CSS Grid**, além de **Variáveis CSS** para um design system consistente.
* **JavaScript (ES6+):** Lógica pura para manipulação de estados, arrays e eventos.

---

## 📊 Detalhes Técnicos

### Sistema de Cálculos
A aplicação calcula automaticamente o balanço financeiro através da fórmula:
$$Total = \sum Incomes + \sum Expenses$$

### Formatação Brasileira
Diferente de sistemas básicos, este projeto trata os valores como inteiros (multiplicando por 100) para evitar erros de precisão decimal em cálculos financeiros, convertendo para `pt-BR` apenas na exibição final.

### Design Responsivo
O projeto utiliza `@media queries` para adaptar os cards de balanço, transformando-os de uma lista vertical (mobile) para um grid horizontal em telas maiores.

---

## 📦 Como rodar o projeto

1.  Clone este repositório:
    ```bash
    git clone git@github.com:juniorbonini/devfinances.git
    ```
2.  Navegue até a pasta do projeto e abra o arquivo `index.html` em seu navegador.

---

## 👤 Autor

**Luiz Augusto Bonini Junior** — *Web & Mobile Developer*

> "Entender a base é o que diferencia um codificador de um engenheiro de software."
