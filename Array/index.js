const features = [
  '✅ Push to deploy',
  '✅ SSL certificates',
  '✅ Simple queues',
  '✅ Commit feature branches'
];

const iterateFeature = () => {
  return `
    <ul>
    ${features
      .map(
        feature => `
      <li>${feature}</li>
    `
      )
      .join('')}
    </ul>
  `;
};

const appDiv = document.getElementById('app');
appDiv.innerHTML = iterateFeature();
