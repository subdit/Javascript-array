function createButton(action, style) {
  return `<button style=${style}>${action}</button>`;
}

function createHeader(title, style) {
  return `<h1 style=${style}>Watch For Free: ${title}</h1>`;
}
const videoSrc =
  'https://reactbootcamp.nyc3.digitaloceanspaces.com/big-buck-bunny.mp4';
function createVideo(src, style) {
  return `<video src=${src} style=${style}></video>`;
}

const app = document.getElementById('app');
app.innerHTML = `
  
   ${createHeader('Watch: ', 'color:blue;')}
  ${createVideo(videoSrc, 'height:300px; width:100%')}
    <div style="margin-top:20px; content:center;">
      ${createButton(
        'Liked Video',
        'background-color:green;color:white; border-radius: 25px; text-align:center;'
      )}

      ${createButton(
        'Disliked Video',
        'background-color:red;color:white; border-radius: 25px; text-align:center;'
      )}
    </div>

  
  
`;
