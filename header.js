const TEXT = "Press CTRL+R to generate a new random image. View page source to see the Javascript that generates the image.";
const div = document.createElement("div");
div.style = "padding-bottom:100px"
const text = document.createTextNode(TEXT);
div.appendChild(text);
document.body.appendChild(div);
