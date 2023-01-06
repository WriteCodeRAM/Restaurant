const createContact = () => {
  const contactContainer = document.getElementById('content');

  console.log('this is the contact');

  const change = document.querySelector('.content-wrap');
  const footer = document.createElement('footer');
  const contactSection = document.createElement('div');
  change.innerHTML = ``;

  contactSection.innerHTML = `  <div class="content-wrap">
  <div class="contact-flex">
   <div class="phone">☎️ 678-999-8212</div>
   <div class="address">901 Shelby Dr.</div>
   <div class="map"> <iframe src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d114920.63585037767!2d-80.2569333289204!3d25.827651212266247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x88d9b3dfee894d87%3A0xb83956983047c1ff!2s5600%20Biscayne%20Blvd%2C%20Miami%2C%20FL%2033137!3m2!1d25.827668!2d-80.186893!5e0!3m2!1sen!2sus!4v1668566155376!5m2!1sen!2sus" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>
  </div>
  </div>`;

  change.appendChild(contactSection);
};

export { createContact };
