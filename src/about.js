import { createMenu } from './menu';

const aboutCheapza = () => {
  const body = document.getElementById('content');

  const change = document.querySelector('.content-wrap');
  const container = document.createElement('div');
  const title = document.createElement('h1');
  const para = document.createElement('p');
  // const btn = document.createElement('button');
  const footer = document.createElement('footer');

  change.innerHTML = ``;

  console.log('this is about');

  container.classList.add('container');

  title.innerText = 'ABOUT US';
  title.classList.add('center');

  change.appendChild(container);
  container.appendChild(title);

  para.innerText =
    "Here at Cheapza we've been providing the best price per slice since 2010 and make it our mission to deliver a quality product at an affordable price! \n \n Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa exercitationem ullam quam odio! Quaerat architecto repellat repellendus eos quo natus corporis sint sit mollitia aliquid! Incidunt rem deserunt consequatur animi.";

  para.style.color = 'white';
  para.classList.add('para');

  // btn.innerText = 'MENU';

  // btn.classList.add('menu-btn');

  // btn.addEventListener('click', createMenu);

  container.appendChild(para);
  // container.appendChild(btn);
  container.appendChild(footer);
  body.appendChild(change);
};

export { aboutCheapza };
