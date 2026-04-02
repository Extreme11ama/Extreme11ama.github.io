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
  { text: "Why so serious?", movie: "The Dark Knight" },
  { text: "Just keep swimming.", movie: "Finding Nemo" },
  { text: "To infinity and beyond!", movie: "Toy Story" },
  { text: "I am inevitable.", movie: "Avengers: Endgame" },
  { text: "You can't handle the truth!", movie: "A Few Good Men" },
  {text: "Hail to the king, baby.", movie: "Army of Darkness"}
];

const q = quotes[Math.floor(Math.random() * quotes.length)];
document.getElementById('nav-quote').innerHTML = 
  `"${q.text}" <span class="quote-movie">- ${q.movie}</span>`;

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