# Participantes en la integración
- Omar Pava | o.pava@uniandes.edu.co
- Harold Virguez | h.virgueze@uniandes.edu.co
- Pablo Rivera | p.riverah@uniandes.edu.co
- Edwin Cruz | e.cruzs@uniandes.edu.co

# Instrucciones generales:

Para la ejecución de las pruebas se agregaron archivos de instrucciones específicos para cada segmento de pruebas con las instrucciones puntuales para cada ejecución. 

## Instalación
1. Clona el repositorio en tu máquina local:
   Si utilizas SSH:
   ```
   git clone git@github.com:oapava/ghost-8w.git
   cd ghost-8w
   ```
   Si utilizas HTTPS:
   ```
   git clone https://github.com/oapava/ghost-8w.git
   cd ghost-8w
   ```

## Pruebas E2E + Pruebas de regresión visual( Cypress + ResembleJS ) 
Para ejecutar las pruebas sobre la version Ghost 5.96 se deben seguir los siguientes pasos:

#### Requisitos previos
Antes de comenzar, asegúrate de cumplir con los siguientes requisitos:

* **Node.js**: Instala la versión LTS de Node.js desde [https://nodejs.org/](https://nodejs.org/).
* **npm o Yarn**: Una herramienta para gestionar paquetes (npm viene con Node.js).
* **Cypress**: Herramienta usada para pruebas e2e. Si no lo tienes instalado puedes hacerlo mediante consola ejecutando el comando `npm install -g cypress`
* **Canvas** :Instalar la dependencia en el sistema para poder ejecutar las pruebas con ResembleJS. Las instrucciones de instalación las puede encontrar en https://www.npmjs.com/package/canvas
* Las pruebas de regresion visual se realizan comparando entre los navegadores Google Chrome y Mozilla Firefox por lo que debe tener instalados los dos navegadores en el equipo.
* **Ghost version 5.96** [Ghost](https://ghost.org/docs/install/)

#### Configuraciones previas
* En la carpeta *'cypress-ghost-v5'* se encuentra el archivo **cypress.config.js** donde se debe configurar el puerto por el cual se esta ejecutando la version 5.96 de Ghost. Adicional se debe indicar las credenciales de acceso a la herramienta.
* Desde la consola en la raiz del proyecto se debe ejecutar el comando `npm install` para que se instalen las dependecias necesarias.

#### Ejecución de las pruebas

Se debe ubicar desde la consola en la raiz del proyecto, desde alli se ejecuta el siguiente comando el cual se encarga de ejecutar los escenarios de las pruebas e2e en las dos versiones de Ghost y posteriormente realiza las pruebas de regresion visual de forma automatica. 

```
npm run test:cy:rsjs:all
```

#### Resultados de las pruebas
Al finalizar las ejecuciones de las pruebas e2e con cypress se deja un registro visual de cada uno de los pasos ejecutados en los escenarios, en los directorios 'screenshots' de cada carpeta.

Al finalizar la ejecución de pruebas de regresion visual se genera de forma automática un directorio llamado output_differences, el cual contiene las carpetas de las imagenes comparadas que se encontraron en las dos ejecuciones de E2E, también se encuentra un archivo HTML que muestra el reporte de los resultados de la prueba.

El informe de resultados en HTML contiene una tabla con el nombre del archivo comparado, la imagen de la ejecución en el navegador Google Chrome y la imagen de la ejecución en el navegador Mozilla Firefox, la imagen que refleja las diferencias, el porcentaje de diferencia encontrado y el tiempo de ejecución.

#### Observaciones finales
Los pasos descritos anteriormente se basan en el sistema opertaivo **macOs**, si se ejecuta desde windows se deben realizar desde el Powershell.
