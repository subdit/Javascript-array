const members = [
  {
    name: 'Lindsay Walton',
    role: 'Front-end Developer',
    imageUrl:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    twitterUrl: 'https://twitter.com/lindsay',
    linkedinUrl: 'https://linkedin.com/lindsay'
  },
  {
    name: 'Tom Cook',
    role: 'Architech Engineer',
    imageUrl:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    twitterUrl: 'https://twitter.com/lindsay',
    linkedinUrl: 'https://linkedin.com/lindsay'
  },
  {
    name: 'Coutney Henry',
    role: 'UX/UI designer',
    imageUrl:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    twitterUrl: 'https://twitter.com/lindsay',
    linkedinUrl: 'https://linkedin.com/lindsay'
  },
  {
    name: 'Coutney Henry',
    role: 'UX/UI designer',
    imageUrl:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    twitterUrl: 'https://twitter.com/lindsay',
    linkedinUrl: 'https://linkedin.com/lindsay'
  },
  {
    name: 'Lindsay Walton',
    role: 'Front-end Developer',
    imageUrl:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    twitterUrl: 'https://twitter.com/lindsay',
    linkedinUrl: 'https://linkedin.com/lindsay'
  },
  {
    name: 'Tom Cook',
    role: 'Architech Engineer',
    imageUrl:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    twitterUrl: 'https://twitter.com/lindsay',
    linkedinUrl: 'https://linkedin.com/lindsay'
  }
];

function about() {
  return `
    <header>
     <h1>Who are we!</h1>
     <h3>Meet the team that makes this all possible</h3>
    </header>
    <div class="members">
    ${members.map(member => `${Member(member)}`).join('')}
    </div>
  `;
}
function Member(props) {
  return `
    <div class="member">
      <img class="member"src="${props.imageUrl}"/>
      <h3>${props.name}</h3>
      <p>${props.role}</p>
    </div>
  `;
}

const appMember = document.getElementById('appArray');
appMember.innerHTML = about();
