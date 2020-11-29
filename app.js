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

// const scriptRemover = () => {
//   let head = document.querySelector('head');
//   head.removeChild(head.lastChild);
// }

const menu = document.querySelector('.menu');
const menuItems = document.querySelectorAll('.mitem');
const closeBtn = document.querySelector('.close');
const canvas = document.querySelector('.p5Canvas');


menuItems.forEach((e, i) => {
  e.addEventListener('click', () => {
    let uri = './sketches/' + e.id + '.js';
    // console.log(uri);
    const loader = new ScriptLoader(uri);
    // console.log(loader);
    loader.load().
      then(e => console.log(e)).
      catch(e => console.error(e));

    menu.style.display = "none";
    closeBtn.style.display = "block";
  });
});

closeBtn.addEventListener('click', () => {
  // scriptRemover();
  // menu.style.display = "block";
  // closeBtn.style.display = "none";
  location.reload();
});







