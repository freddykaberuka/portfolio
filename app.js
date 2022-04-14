/* eslint-disable linebreak-style */

const popData= [
  {
    id: 1,
    header: 'Tonic',
    position: 'Back End Dev',
    period: '2015',
    image: './assets/Snapshoot1.png',
    skills: ['html', 'css', 'javascript'],
    location: 'CANOPY',
  },
  {
    id: 2,
    header: 'Multi-Post Stories',
    position: 'Back End Dev',
    period: '2015',
    image: './assets/Snapshoot2.png',
    skills: ['html', 'css', 'javascript'],
    location: 'CANOPY',
  },
  {
    id: 3,
    header: 'Facebook 360',
    position: 'Back End Dev',
    period: '2015',
    image: './assets/Snapshoot3.png',
    skills: ['html', 'css', 'javascript'],
    location: 'CANOPY',
  },
  {
    id: 4,
    header: 'Uber Navigation',
    position: 'Back End Dev',
    period: '2015',
    image: './assets/Snapshoot4.png',
    skills: ['html', 'css', 'javascript'],
    location: 'CANOPY',
    details: 'A daily selection of privately personalized reads; no accounts or sign-ups required.'
  },
];

portCard.innerHTML = popData.map((el) => `
            <div class="desktop-work" id="portCard">
                <div class="popHeader">${el.header}</div>
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
                        <li>html</li>
                        <li>css</li>
                        <li>javascript</li>
                    </ul>
                </div>
                <button type="submit" data-id=${el.id} class="hoved dataTarget">See Project</button>
                </div>
                </div>
            </div>`;

const portCard = document.getElementsById('portCard');
const popupContainer = document.querySelector('.popup-container');
// eslint-disable-next-line linebreak-style
popHeader.innerHTML = 'Tonic';

function displaypopUp() {
    portCard.style.display = 'flex';
}