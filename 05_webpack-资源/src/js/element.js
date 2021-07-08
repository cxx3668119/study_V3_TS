// import "css-loader!../css/style.css";
import "../css/style.css";
import "../css/title.less";
import "../css/image.css";

const divEl = document.createElement("div");
divEl.className = "title";
divEl.innerHTML = "你好啊,李银河";

const imgDiv = document.createElement('div')
imgDiv.className = 'image-bg'

document.body.appendChild(divEl);
document.body.appendChild(imgDiv);
