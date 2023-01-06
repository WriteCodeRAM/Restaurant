const createMenu = () => {
  console.log('this is the menu');

  const change = document.querySelector('.content-wrap');
  const footer = document.createElement('footer');
  const menuSection = document.createElement('div');
  change.innerHTML = ``;

  menuSection.innerHTML = `
  
  <div class="container">
  <div class="menu-items">
  <div class="item">
<img class="menu-img" src="/src/cheesepizzaimage.jpg" alt="image of cheese pizza">
<h3>Cheese Pizza</h3>
<p class="price">$1.49</p>
  </div>

  <div class="item">
      <img class="menu-img" src="/src/pepperonipizza.jpeg" alt="image of pepperoni pizza">
      <h3>Pepperoni Pizza</h3>
      <p class="price">$1.99</p>
          </div>


          <div class="item">
              <img class="menu-img" src="/src/sausagepizza.avif" alt="image of sausage pizza">
              <h3>Sausage Pizza</h3>
              <p class="price">$1.99</p>
                  </div>

                  <div class="item">
                      <img class="menu-img" src="/src/supremepizza.jpeg" alt="image of supreme pizza">
                      <h3>Supreme Pizza</h3>
                      <p class="price">$2.49</p>
                          </div>
  
</div>
</div>`;

  menuSection.style.color = 'white';

  change.appendChild(menuSection);
  change.appendChild(footer);
};

export { createMenu };
