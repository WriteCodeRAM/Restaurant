import { createMenu } from './menu';
import { aboutCheapza } from './about';
import { createContact } from './contact';
import { footerPage } from './footer-link';

const pageLoad = () => {
  const content = document.querySelector('#content');
  const footer = document.createElement('footer');

  content.innerHTML = `
  <nav> <h1 class="brand">CHEAPZA</h1>
       <ul class='test' id="myLinks">
      <li><a href="#" class="nav-item about">About</a></li>
      <li><a href="#" class="nav-item menu">Menu</a></li>
      <li><a href="#" class="nav-item contact">Contact</a></li>

      
  </ul>
  <a href="javascript:void(0);" class="icon">
    <i class="fa fa-bars"></i>
  </a>
  </nav>

  `;

  const hamburgerMenu = document.querySelector('.fa');

  const x = document.getElementById('myLinks');

  hamburgerMenu.addEventListener('click', () => {
    if (x.style.display === 'flex' || x.style.display === 'block') {
      x.style.display = 'none';
    } else {
      x.style.display = 'block';
    }
  });

  const brandName = document.querySelector('.brand');
  const change = document.createElement('div');
  change.classList.add('content-wrap');

  change.innerHTML = `
  <div class="hero">
      <div class="left">
      <h2>Best <span> Price Per Slice </span> Since <span>2010</span></h2>
      <button class="order">menu</button>
  </div>
      <img class="heroImg" src="../src/NYPizzaPie.jpeg" alt="">
  </div>
  
</div>`;

  footer.innerHTML = ` <ul>
  <li><a href="#" class="footer-link nav-item">Reviews</a></li>


  </ul> 
 <p> <span>Cheapza</span> 2022 &copy;</p>
 
 <ul>
  <li><a href="#" class="contact nav-item">Address</a></li>

  <li><a href="https://www.github.com/WriteCodeRam">Owner</a></li>
 </ul>`;

  content.appendChild(change);
  content.appendChild(footer);

  const menuBtn = document.querySelector('.order');
  const about = document.querySelector('.about');
  const menuNav = document.querySelector('.menu');
  const contactNav = document.querySelectorAll('.contact');
  const footerLinks = document.querySelectorAll('.footer-link');

  menuBtn.addEventListener('click', createMenu);
  menuBtn.addEventListener('click', () => {
    navItems[1].classList.add('active');
  });
  menuNav.addEventListener('click', createMenu);
  about.addEventListener('click', aboutCheapza);
  contactNav.forEach((contact) => {
    contact.addEventListener('click', createContact);
  });
  brandName.addEventListener('click', pageLoad);

  console.log(footerLinks);

  footerLinks.forEach((link) => {
    link.addEventListener('click', footerPage);
  });

  const navItems = document.querySelectorAll('.nav-item');

  for (var i = 0; i < navItems.length; i++) {
    navItems[i].addEventListener('click', function () {
      const current = document.getElementsByClassName('active');

      // If there's no active class
      if (current.length > 0) {
        current[0].className = current[0].className.replace(' active', '');
      }

      // Add the active class to the current/clicked button
      this.className += ' active';
    });
  }
};

export { pageLoad };
