const mobileMenu = document.querySelector('.mobile-menu');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

const sliderImage = document.querySelector('.slider');
const heading = document.querySelector('h2');
const paragraph = document.querySelector('.hero-text p');

const heroText = document.querySelector('.hero-text');

const textArray = [
  {
    heading: 'Discover innovative ways to decorate',
    para: 'We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.',
  },
  {
    heading: 'We are available all across the globe',
    para: "With stores all over the world, it's easy for you to find furniture for your home or place of business.Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
  },
  {
    heading: 'Manufactured with the best materials',
    para: 'Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.',
  },
];

function toggleMenu() {
  mobileMenu.classList.toggle('active');
}
var counter = 1;
function changeContent(event) {
  if (event.target == leftArrow) {
    counter--;
  } else {
    counter++;
  }

  if (counter < 1) {
    counter = 3;
  } else if (counter > 3) {
    counter = 1;
  }

  handleContent(counter);
}

function handleContent(counter) {
  heroText.style.opacity = 0;
  sliderImage.style.opacity = 0;
  heroText.ontransitionend = () => {
    if (sliderImage.style.backgroundImage.includes('desktop')) {
      sliderImage.style.backgroundImage = `url("images/desktop-image-hero-${counter}.jpg")`;
    } else {
      sliderImage.style.backgroundImage = `url("images/mobile-image-hero-${counter}.jpg")`;
    }
    heading.innerHTML = textArray[counter - 1].heading;
    paragraph.innerHTML = textArray[counter - 1].para;
    heroText.style.opacity = 1;
    sliderImage.style.opacity = 1;
  };
}

function updateImage() {
  if (window.innerWidth < 800) {
    sliderImage.style.backgroundImage = `url("images/mobile-image-hero-1.jpg")`;
  } else {
    sliderImage.style.backgroundImage = `url("images/desktop-image-hero-1.jpg")`;
  }
}
leftArrow.addEventListener('click', changeContent);
rightArrow.addEventListener('click', changeContent);
window.addEventListener('load', updateImage);
