function createTitle(header, style) {
  return `<h1 style=${style}>My:${header}</h1>`;
}

function createCoverImage(src, height = '500px', width = '850px') {
  return `<img src=${src} height=${height} widht=${width}>`;
}

const app = document.getElementById('app');
app.innerHTML = `${createTitle(' laptop is the beast!', 'color:darkred;')}
${createCoverImage('./assets/darkTheam.jpg')}

`;
