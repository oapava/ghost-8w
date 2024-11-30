const fs = require('fs');
const { exec } = require('child_process');

// Obtén el navegador de las variables de entorno (o usa 'chrome' por defecto)
const browser = process.env.BROWSER || 'chrome';

// Archivo de configuración de Cypress
const configFilePath = './cypress.config.js';

// Paso 1: Modificar el archivo de configuración
const updateConfig = () => {
  try {
    // Lee el archivo de configuración actual
    let configContent = fs.readFileSync(configFilePath, 'utf-8');

    // Busca la variable del navegador y actualiza su valor
    const updatedDirectoryScreenshoots = configContent.replace(/screenshotsFolder:\s*['"].*['"]/g, `screenshotsFolder: 'cypress/screenshots-${browser}'`);

    // Escribe los cambios en el archivo
    fs.writeFileSync(configFilePath, updatedDirectoryScreenshoots);
    console.log(`Archivo de configuración actualizado: Navegador -> ${browser}`);
  } catch (error) {
    console.error(`Error actualizando el archivo de configuración: ${error.message}`);
    process.exit(1);
  }
};

// Paso 2: Ejecutar Cypress en modo headless
// const runCypress = () => {
//   console.log(`Ejecutando Cypress en modo headless con ${browser}...`);
//   exec(`npx cypress run --browser ${browser}`, (error, stdout, stderr) => {
//     if (error) {
//       console.error(`Error ejecutando Cypress: ${error.message}`);
//       return;
//     }
//     console.log(`Salida de Cypress:\n${stdout}`);
//     if (stderr) console.error(`Errores:\n${stderr}`);
//   });
// };

// Ejecutar los pasos
updateConfig();
//runCypress();
