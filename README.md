# Facturacion
segundo practico del sexto modulo de la Maestria MDEIS

## Guia de inicio rápido (< 2mn)

```
git clone https://github.com/Ariel-Edward/Facturacion.git
cd Facturacion
npm install
node server.js
```

Luego, en el navegador web abrir [http://localhost:3000/](http://localhost:3000/).

## Requisitos
Para poder ejecutar el proyecto se necesita tener instalado NodeJS

### NodeJS
Puede descargarlo en: https://nodejs.org/es/

### Descargar las fuentes
Puede descargar el proyecto desde: https://github.com/Ariel-Edward/Facturacion/archive/master.zip

### Instale las dependencias del proyecto

Luego de descargar y descomprimir, abra una consola, muevase hacia la carpeta del proyecto y ejecute el siguiente comando:

  `npm install`

## Ejecutar servicios
Para ejecutar el servidor de la API debe ejecutar en la carpeta raiz del proyecto el siguiente comando:

  `node server.js `

## Modulos desarrollados
En el presente proyecto se han desarrollado los modulos de Facturacion y Personas

### Modulo de facturacion
Para probar el funcionamiento debe ingresar a http://localhost:3000/facturas/

### Modulo de personas
Para probar el funcionamiento debe ingresar a http://localhost:3000/personas/

## Analisis de la estructura del proyecto

```
Facturacion 
 └ domainobjects                    → Objetos del dominio (Patrón ValueObject)
    └ estado.js                     → Estados posibles de los objetos
    └ factura.js                    → Clases de las facturas
    └ moneda.js                     → Monedas admitidas en el sistema
    └ monto.js                      → Montos para las facturas
    └ persona.js                    → Personas a las que se hacen las facturas
 └ node_modules (autogenerado)      → Dependencias de NPM
 └ .gitignore                       → Archivo de configuracion de GIT
 └ README.md                        → Este archivo
 └ package-lock.json                → Archivo de configuracion de paquetes de NPM
 └ package.json                     → Archivo de configuracion de paquetes de NPM
 └ server.js                        → Archivo ejecutable principal
```
