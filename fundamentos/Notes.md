# ANOTAÇÕES #

- so de criar um arquivo dentro da página pages automaticamente é criada uma rota para essa url.

- os css globais são importados dentro do arquivo _app.jsx

- os props de um componente é um objeto contendo a lista dos parametro passados na chamada do componente. pode ser usado como variavel: props.name ou com object destruct {name}

- props são read only, só será possível mudar utilizando estados (useState hook)

- pode ser usado o operador ?? para definir um prop padrão caso o campo da prop não for preenchido : {prop.titulo ?? "titulo padrao"}

- para url dinamicas é criado o component com o nome entre colchetes [componente]. qualquer texto que for adicionado na url /clientes/ será direcionado para esse componente.

- pre-rendering significa que o next.js gera um html para cada página previamente ao invés de tudo ser feito pelo javascript no client-side. Primeiro é renderizado o html, css e depois as funcionalidades dos componentes.

- em suma, com o react a pájina so é carregada juntamente com o js. com o next, os elementos html/css são carregados primeiro, independentemente do carregamento do js que vira em seguida
- https://www.youtube.com/watch?v=BeXbCgRxifs&list=PLC3y8-rFHvwgC9mj0qv972IO5DmD-H0ZH&index=15