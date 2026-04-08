function openModal(id) {
  const data = document.getElementById(id + '-data').innerHTML;
  document.getElementById('modal-content').innerHTML = data;
  document.getElementById('modal-overlay').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modal-overlay').classList.remove('active');
  document.body.style.overflow = '';
}

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') closeModal();
});


const quotes = [
  { text: "Why so serious?", movie: "The Dark Knight", url: "https://www.imdb.com/title/tt0468569/" },
  { text: "Just keep swimming.", movie: "Finding Nemo", url: "https://www.imdb.com/title/tt0266543/" },
  { text: "To infinity and beyond!", movie: "Toy Story", url: "https://www.imdb.com/title/tt0114709/" },
  { text: "I am inevitable.", movie: "Avengers: Endgame", url: "https://www.imdb.com/title/tt4154796/" },
  { text: "You can't handle the truth!", movie: "A Few Good Men", url: "https://www.imdb.com/title/tt0104257/" },
  { text: "Hail to the king, baby.", movie: "Army of Darkness", url: "https://www.imdb.com/title/tt0106308/"},
  { text: "All those moments will be lost in time, like tears in rain.", movie: "Blade Runner", url: "https://www.imdb.com/title/tt0083658/"}
];

/*
const q = quotes[Math.floor(Math.random() * quotes.length)];
document.getElementById('nav-quote').innerHTML = 
  `"${q.text}" <span class="quote-movie">- ${q.movie}</span>`;*/

let currentQuote = Math.floor(Math.random() * quotes.length);

function showQuote() {
  const q = quotes[currentQuote];
  document.getElementById('nav-quote').innerHTML = 
    `"${q.text}" <span class="quote-movie">- <a href="${q.url}" target="_blank">${q.movie}</span>`;
}

function nextQuote() {
  currentQuote = (currentQuote + 1) % quotes.length;
  showQuote();
}

showQuote();

window.addEventListener('scroll', function() {
    const sections = ['about', 'projects', 'contact'];
    const colors = {
        about: '#0f172a',
        projects: '#1b3c55',
        contact: '#0f172a'
    };

    let current = 'about';
    for (const id of sections) {
        const section = document.getElementById(id);
        if (section && window.scrollY >= section.offsetTop - 200) {
            current = id;
        }
    }

    document.body.style.transition = 'background 0.6s ease';
    document.body.style.background = colors[current];
});


const pCanvas = document.getElementById('particle-canvas');
const pCtx = pCanvas.getContext('2d');

pCanvas.width = pCanvas.offsetWidth;
pCanvas.height = pCanvas.offsetHeight;

const dots = [];
const DOT_COUNT = 80;
const MAX_DIST = 150;

for (let i = 0; i < DOT_COUNT; i++) {
  dots.push({
    x: Math.random() * pCanvas.width,
    y: Math.random() * pCanvas.height,
    vx: (Math.random() - 0.5) * 0.8,
    vy: (Math.random() - 0.5) * 0.8,
    radius: Math.random() * 2 + 1
  });
}

function drawParticles() {
  pCtx.clearRect(0, 0, pCanvas.width, pCanvas.height);

  for (let i = 0; i < dots.length; i++) {
    const d = dots[i];

    d.x += d.vx;
    d.y += d.vy;

    if (d.x < 0 || d.x > pCanvas.width) d.vx *= -1;
    if (d.y < 0 || d.y > pCanvas.height) d.vy *= -1;

    pCtx.beginPath();
    pCtx.arc(d.x, d.y, d.radius, 0, Math.PI * 2);
    pCtx.fillStyle = '#60a5fa';
    pCtx.fill();

    for (let j = i + 1; j < dots.length; j++) {
      const d2 = dots[j];
      const dx = d.x - d2.x;
      const dy = d.y - d2.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < MAX_DIST) {
        pCtx.beginPath();
        pCtx.moveTo(d.x, d.y);
        pCtx.lineTo(d2.x, d2.y);
        pCtx.strokeStyle = `rgba(96, 165, 250, ${1 - dist / MAX_DIST})`;
        pCtx.lineWidth = 0.5;
        pCtx.stroke();
      }
    }
  }

  requestAnimationFrame(drawParticles);
}

drawParticles();

window.addEventListener('resize', () => {
  pCanvas.width = pCanvas.offsetWidth;
  pCanvas.height = pCanvas.offsetHeight;
});