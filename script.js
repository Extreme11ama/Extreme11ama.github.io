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