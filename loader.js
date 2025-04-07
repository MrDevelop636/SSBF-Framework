import { bgColorModule } from './modules/bgColor.js';
import { textColorModule } from './modules/textColor.js';
import { textSizeModule } from './modules/textSize.js';
import { normalizeLoader } from './modules/normalizeLoader.js';
import { cssLoader } from './modules/cssLoader.js';
import { marginModule } from './modules/margin.js';
import { widthModule } from './modules/width.js';
import { heightModule } from './modules/height.js';
import { renderTemplateInstances } from './modules/renderTemplate.js';

async function applyDynamicStyles() {
  try {
    await normalizeLoader();
    await cssLoader();
    await bgColorModule();
    await marginModule();
    await widthModule();
    await heightModule();
    await textSizeModule();
    await textColorModule();
    await renderTemplateInstances(); // Wywołanie funkcji renderTemplate

    console.log('SSBF loaded succesfully'); // Komunikat o sukcesie
  } catch (error) {
    console.error('Error loading SSBF:', error);
    // Dodaj ewentualną obsługę błędów, np. wyświetlenie komunikatu dla użytkownika
  }
}

document.addEventListener('DOMContentLoaded', applyDynamicStyles);