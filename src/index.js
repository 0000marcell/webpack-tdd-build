import css from './index.css';
import testImport from './test-import.js';

window.onload = () => {
  document.querySelector('#testButton')
    .addEventListener('click', () => {
      testImport.init();
  });
}
