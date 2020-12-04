const menu = document.querySelector('.menu');
const menuItems = document.querySelectorAll('.mitem');
const controls = document.querySelector('.controls');
let currentId;

class ScriptLoader {
  constructor(script) {
    this.script = script;
    this.scriptElement = document.createElement('script');
    this.head = document.querySelector('head');
  }
  load() {
    return new Promise((resolve, reject) => {
      this.scriptElement.src = this.script;
      this.scriptElement.onload = e => resolve(e);
      this.scriptElement.onerror = e => reject(e);
      this.head.appendChild(this.scriptElement);
    });
  }
}


const controlsLoader = () => {
  // CREATE BUTTONS
  const closeBtn = document.createElement('button');
  closeBtn.innerHTML = '<i class="material-icons">close</i>';
  closeBtn.classList.add('btn', 'close-btn');
  controls.appendChild(closeBtn);

  const redoBtn = document.createElement('button');
  redoBtn.innerHTML = '<i class="material-icons">autorenew</i>';
  redoBtn.classList.add('btn', 'redo-btn');
  controls.appendChild(redoBtn);

  const linkBtn = document.createElement('button');
  linkBtn.innerHTML = '<i class="material-icons">code</i>';
  linkBtn.classList.add('btn', 'link-btn');
  controls.appendChild(linkBtn);

  // LISTENERS
  closeBtn.addEventListener('click', () => location.reload());
  redoBtn.addEventListener('click', () => console.log('reset code required!'));
  linkBtn.addEventListener('click', () => window.open(`https://github.com/farzadgo/p5js-works/blob/master/sketches/${currentId}.js`, '_blank'));
}


menuItems.forEach(e => {
  e.addEventListener('click', () => {
    currentId = e.id;
    let uri = './sketches/' + currentId + '.js';
    const loader = new ScriptLoader(uri);
    loader.load().
      then(e => console.log(e)).
      catch(e => console.error(e));
    menu.style.display = "none";
    controlsLoader();
  });
});

