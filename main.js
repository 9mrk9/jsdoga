import './style.css';

const URL = "https://petrik-utazas-default-rtdb.europe-west1.firebasedatabase.app/travelDestinations.json";
const app = document.getElementById('app');
const template = document.getElementById('card');

async function fetchData () {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

function createCards (data) {
  data.forEach(dest => {
    const { title, content, img:image } = dest;
    const temp = template.content.cloneNode(true);
    const h2 = temp.querySelector('h2');
    const p = temp.querySelector('p');
    const img = temp.querySelector('img');
    h2.textContent = title;
    p.textContent = content;
    img.src = image;
    img.alt = title;
    app.appendChild(temp);
  })
}

async function main () {
  const data = await fetchData();
  createCards(data);
}

document.addEventListener('DOMContentLoaded', main);