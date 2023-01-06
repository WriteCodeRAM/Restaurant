const footerPage = () => {
  const change = document.querySelector('.content-wrap');
  const footerLink = document.createElement('div');
  footerLink.classList.add('footer-link');

  change.innerHTML = ``;
  const title = document.createElement('h1');

  title.classList.add('space');

  title.innerText = '🚧    UNDER      C O N S T R U C T I O N    🚧';

  footerLink.append(title);

  change.append(footerLink);
};

export { footerPage };
