// filter Array

const links = [
  {
    text: 'About',
    href: '/company/about'
  },
  {
    text: 'Pricing',
    href: '/support/pricing'
  },
  {
    text: 'Jobs',

    href: '/company/jobs'
  },
  {
    text: 'Press',
    href: '/company/press'
  },
  {
    text: 'Documentation',
    href: '/support/docs'
  }
];

const todos = [
  {
    done: false,
    text: 'Wash dishes',
    owner: 'Mama'
  },
  {
    done: true,
    text: 'Pick up laundry',
    owner: 'Alex'
  },
  {
    done: true,
    text: 'Feed dog',
    owner: 'James'
  }
];
// Function todoList

function TodoList() {
  // <div>
  //    <h1>What I did today</h1>
  //    <ul>
  //     ${todos.map(todo => `${todoItem(todo)}`).join('')}
  //    </ul>
  //   </div>
  return `
    <div>
    <h1>What should I do next!</h1>
    <ul>
      ${todos.map(todo => `${todoItem(todo)}`).join('')}
    </ul>
    </div>
  `;
}
// iterating through the todoItem adn listing out as <li></li>

const todoItem = todo => {
  return `
  <li>
  <span>${todo.done ? '✅' : '❌'}</span>
  <span>${todo.text}</sp>
  <h6>Responsible by:  ${todo.owner}</h6>
  </li>
  `;
};

// const filtered = [1, 2, 3, 4, 'fruits'].filter(number => (number = 'f'));
// console.log(filtered);

// Checking to validate the value of link.hrdf.startWith=====
function Footer() {
  return `
    <footer>
      <section>
        <h4>Support Team</h4>
        <div class="container">
       ${links
         .filter(link => link.href.startsWith('/support'))
         .map(
           link => `${Link(link)}
         `
         )
         .join('')}
        </div>
      </section>
      <section>
        <h4>Company</h4>
        <div>
        ${links
          .filter(link => link.href.startsWith('/company'))
          .map(link => `${Link(link)}`)
          .join('')}
        </div>
      </section>
      
    </footer>
  `;
}

function Link(link) {
  return `
  <div >
   <a href="${link.href}">

  ${link.text}</a>
   
  </div>
   
  `;
}
function doSomethingCoolHere() {
  return 'Will do!';
}

const appDiv = document.getElementById('app');
appDiv.innerHTML = `${TodoList()}
${Footer()}
${doSomethingCoolHere()}
`;
// <li>
// //   <span>${todo.done ? '✅' : '❌'}</span>
// //   <span>${todo.text}</span>
// // </li>
