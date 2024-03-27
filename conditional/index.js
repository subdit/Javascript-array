// Ternary
const defaultAvatar = './asset/defaultAvatar.jpg';
const defaultTheam = './asset/darkTheam.jpg';

const profile = () => {
  const user = {
    name: 'Kasidit',
    lastName: 'Bualoeng',
    avatar: './asset/profile-imag-2.jpg'
  };

  return `
    <div>
      <h1>Welcome: ${user.name} ${user.lastName}!</h1>
      ${!user.avatar ? `<img src="${user.avatar}" width="100px"/>` : ''}
      
    </div>
    <h3 style="background-color:green;">Section Here</h3>
    <div><img src="${defaultTheam}" width="550px" height="350px" /></div>
  `;
};

const appDiv = document.getElementById('app');
appDiv.innerHTML = profile();
