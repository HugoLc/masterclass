# ANOTAÇÕES #

- so de criar um arquivo dentro da página pages automaticamente é criada uma rota para essa url.

- os css globais são importados dentro do arquivo _app.jsx

- os props de um componente é um objeto contendo a lista dos parametro passados na chamada do componente. pode ser usado como variavel: props.name ou com object destruct {name}

- props são read only, só será possível mudar utilizando estados (useState hook)

- pode ser usado o operador ?? para definir um prop padrão caso o campo da prop não for preenchido : {prop.titulo ?? "titulo padrao"}