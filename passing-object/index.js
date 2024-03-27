const profileProps = {
  src: './asset/profile-imag-2.jpg',
  name: 'Kasidit',
  lastName: 'Bualoeng'
};
// const person = profileProps();

function createProfile(props) {
  return `
  <header>
    <img class="profile" src="${props.src}"/>
    <strong>${props.name}</strong>
    <span>${props.lastName}</span>
  </header>
  <nav class="nav"> 
    <ul className="li">Home</ul>
    <ul className="li">About me</ul>
    <ul className="li">Gallery</ul>
    <ul className="li">Menu</ul>
  
  </nav>
`;
}
const photoProps = {
  src: './asset/darkTheam.jpg',
  width: '680px',
  height: '450px'
};

function createPhoto(props) {
  return `
  <body class="container">
  <img src="${props.src}" width="${props.width}" height="${props.height}"/>
  </body>
    
  `;
}

function footer() {
  return `<p>copy right@2024</p>`;
}

const app = document.getElementById('app');
app.innerHTML = `
  <div>
    ${createProfile(profileProps)}
    ${createPhoto(photoProps)}
    <div>
    ${footer()}
    </div>
   
  </div>
`;
