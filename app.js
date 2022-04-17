/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
const menu = document.getElementById('hamburger');
const navContainer = document.getElementById('navContainer');
const closeNav = document.getElementById('close');
const navLink = document.querySelectorAll('.navLink');

menu.addEventListener('click', () => {
  navContainer.style.display = 'block';
  menu.style.display = 'none';
});
closeNav.addEventListener('click', () => {
  menu.style.display = 'block';
  navContainer.style.display = 'none';
});
navLink.forEach((link) => {
  link.addEventListener('click', () => {
    menu.style.display = 'block';
    navContainer.style.display = 'none';
  });
});
const popSec = document.querySelector('.pop-sec');
const portofolio = document.getElementById('portofolio');
const project = [
  {
    id: 1,
    header: 'Tonic',
    location: 'CANOPY',
    position: 'Back End Dev',
    period: '2015',
    skills: ['html', 'css', 'javascript'],
    image: './assets/Snapshoot1.png',
    details: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
  },
  {
    id: 2,
    header: 'Multi-Post Stories',
    location: 'CANOPY',
    position: 'Back End Dev',
    period: '2015',
    skills: ['html', 'css', 'javascript'],
    image: './assets/Snapshoot4.png',
    details: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
  },
  {
    id: 3,
    header: 'Facebook 360',
    location: 'FACEBOOK',
    position: 'Full Stack Dev',
    period: '2015',
    skills: ['html', 'Ruby on rails', 'css', 'javaScript'],
    image: './assets/Snapshoot2.png',
    details: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
  },
  {
    id: 4,
    header: 'Uber Navigation',
    location: 'UBER',
    position: 'Lead Developer',
    period: '2015',
    skills: ['html', 'css', 'javascript'],
    image: './assets/Snapshoot3.png',
    details: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
  },
];

const data = (id) => {
  let item = project.filter((el) => el.id === id);
  item = item.shift();
  popSec.innerHTML = `<div class="popup-container" id="popupContainer">
            
                <div class="pop-wrap"></div>
                <div class="popup-work-container-wrap">
                   <div class="pop-header">
                     <div class="popup-work-title"><h1 class="work-header">${item.header}</h1></div>
                     <a href="/"><i class="fa-solid fa-xmark" id="popupClose"></i></a>
                   </div> 
                <div class="popup-work-technology">
                    <ul>
                        <li class="">${item.location}</li>
                        <li class=""><img src="assets/counter.png" alt=""></li>
                        <li class="tech">${item.position}</li>
                        <li class=""><img src="assets/Counter.png" alt=""></li>
                        <li class="date">${item.period}</li>
                    </ul>
                </div>
                <div class="popup-image-info">
                <div class="popup-port-image">
                    <img src="${item.image}" alt="Tonic" class="img-work">
                    </div>
                    </div>
                    <div class="popup-description-work">
                
                <div class="popup-work-details">
                    <p class="work-paragraph">
                    ${item.details}
                        </p>
                </div>
                <div class="pop-skills-btn">
                <div class="popup-work-skills">
                    <ul>
                        <li>${item.skills[0]}</li>
                        <li>${item.skills[1]}</li>
                        <li>${item.skills[2]}</li>
                    </ul>
                </div>
                <div class="btn">
                <div class="work-button">
                    <button>
                        <a href="https://freddykaberuka.github.io/portfolio/">See Live<i class="fa-solid fa-up-right-from-square"></i></a>
                    </button>
                </div>
                <div class="work-button">
                    <button>
                        <a href="https://github.com/freddykaberuka ">See Source<i class="fa-brands fa-github"></i></a>
                    </button>
                </div>
                </div>
                </div>
<<<<<<< HEAD
                </div>
                </div>
=======
>>>>>>> 08e4a8a (add and update linters)
            </div> `;
  popSec.style.transform = 'translate(0%,0%) scale(1)';
};
const portofolioData = () => {
  const items = project.map((el, index) => {
    const res = index % 2 === 0 ? `<div class="desktop-work">
                <div class="work-container-wrap card2">
                <div class="image-info">
                <div class="port-image">
                    <img src="${el.image}" alt="Tonic" class="img-work">
                    </div>
                    </div>
                    <div class="description-work">
                <div class="work-title"><h1 class="work-header">${el.header}</h1></div>
                <div class="work-technology">
                    <ul>
                        <li class="">${el.location}</li>
                        <li class=""><img src="assets/counter.png" alt=""></li>
                        <li class="tech">${el.position}</li>
                        <li class=""><img src="assets/Counter.png" alt=""></li>
                        <li class="date">${el.period}</li>
                    </ul>
                </div>
                <div class="work-details">
                    <p class="work-paragraph">${el.details}</p>
                </div>
                <div class="work-skills">
                    <ul>
                        <li>${el.skills[0]}</li>
                        <li>${el.skills[1]}</li>
                        <li>${el.skills[2]}</li>
                    </ul>
                </div>
                <div class="work-button"><button onClick="data(${el.id})">See Project</button></div>
                </div>
                </div>
            </div>` : `<div class="desktop-work">
                <div class="work-container-wrap">
                <div class="image-info">
                <div class="port-image">
                    <img src="${el.image}" alt="Tonic" class="img-work">
                    </div>
                    </div>
                    <div class="description-work">
                <div class="work-title"><h1 class="work-header">${el.header}</h1></div>
                <div class="work-technology">
                    <ul>
                        <li class="">${el.location}</li>
                        <li class=""><img src="assets/counter.png" alt=""></li>
                        <li class="tech">${el.position}</li>
                        <li class=""><img src="assets/Counter.png" alt=""></li>
                        <li class="date">${el.period}</li>
                    </ul>
                </div>
                <div class="work-details">
                    <p class="work-paragraph">${el.details}</p>
                </div>
                <div class="work-skills">
                    <ul>
                        <li>${el.skills[0]}</li>
                        <li>${el.skills[1]}</li>
                        <li>${el.skills[2]}</li>
                    </ul>
                </div>
                <div class="work-button"><button onClick="data(${el.id})">See Project</button></div>
                </div>
                </div>
            </div>`;
    return res;
  });

  portofolio.innerHTML = items;
};
window.addEventListener('load', portofolioData);
