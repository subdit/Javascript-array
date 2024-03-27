function createButton(action, style) {
  return `<button style="${style}">${action} Video</button>`;
}
const app = document.getElementById('app-video');
app.innerHTML = createButton(
  'Like It',
  'background-color:green;color:white; border-radius: 25px; text-align:center;'
);

// Add parameter =style and we can passing the background and text-color.
