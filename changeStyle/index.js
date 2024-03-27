function DownloadButton(props) {
  return `<button class="download-button ${props.isPaid ? 'Paid' : ''}">
  <span>${props.isPaid ? 'Buy Now' : 'Download Here'}</span>
  </button>`;
}

const appDiv = document.getElementById('app');
appDiv.innerHTML = DownloadButton({
  isPaid: false
});
