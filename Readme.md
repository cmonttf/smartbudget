# SmartBudget

Proyecto web que utiliza **Sass (SCSS)** para la organización y compilación de los estilos CSS.

## Requisitos

Antes de comenzar, asegúrate de tener instalado:

* Node.js
* npm
* Sass

### Instalar Sass

Si aún no lo tienes instalado, ejecuta:

```bash
npm install -g sass
```

O como dependencia de desarrollo del proyecto:

```bash
npm install --save-dev sass
```

## Estructura del proyecto

```text
SmartBudget/
│
├── css/
│   └── main.css
│
├── sass/
│   ├── abstracts/
│   ├── components/
│   ├── layout/
│   ├── pages/
│   ├── utilities/
│   └── main.scss
│
└── index.html
```

## Compilar Sass

Para generar el archivo CSS automáticamente cada vez que se modifique un archivo `.scss`, ejecuta:

```bash
sass --watch sass/main.scss:css/main.css
```

Mientras el comando esté en ejecución, cualquier cambio realizado dentro de la carpeta `sass/` actualizará automáticamente el archivo:

```text
css/main.css
```

Para detener el proceso de compilación, presiona:

```text
Ctrl + C
```

## Compilación única

Si solo deseas generar el CSS una vez, utiliza:

```bash
sass sass/main.scss css/main.css
```

## Tecnologías utilizadas

* HTML5
* CSS3
* Sass (SCSS)
* JavaScript
* Bootstrap 5
