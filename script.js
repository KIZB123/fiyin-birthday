const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('visible'); revealObserver.unobserve(entry.target); } });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

const petals = document.getElementById('petals');
function makePetal(){
  const p=document.createElement('span'); p.className='petal'; p.textContent=Math.random()>.5?'✿':'♡';
  p.style.left=Math.random()*100+'vw'; p.style.animationDuration=(8+Math.random()*8)+'s'; p.style.fontSize=(10+Math.random()*10)+'px';
  petals.appendChild(p); setTimeout(()=>p.remove(),17000);
}
for(let i=0;i<12;i++) setTimeout(makePetal,i*350);
setInterval(makePetal,1500);

document.getElementById('openSurprise').addEventListener('click',()=>{
  document.getElementById('welcomeMessage').scrollIntoView({behavior:'smooth'});
  for(let i=0;i<18;i++) setTimeout(makePetal,i*70);
});

const lightbox=document.getElementById('lightbox');
document.querySelectorAll('.gallery-item').forEach(item=>item.addEventListener('click',()=>{
  document.getElementById('lightboxImage').src=item.dataset.full; lightbox.classList.add('show'); lightbox.setAttribute('aria-hidden','false');
}));
function closeLightbox(){lightbox.classList.remove('show');lightbox.setAttribute('aria-hidden','true');}
document.getElementById('closeLightbox').addEventListener('click',closeLightbox);
lightbox.addEventListener('click',e=>{if(e.target===lightbox)closeLightbox();});
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeLightbox();});

document.getElementById('openLetter').addEventListener('click',()=>{
  const envelope=document.getElementById('envelope'); envelope.classList.toggle('open');
  document.getElementById('openLetter').innerHTML=envelope.classList.contains('open')?'Close your letter <span>♡</span>':'Tap to open your letter <span>↗</span>';
});

const toast=document.getElementById('toast');
document.getElementById('celebrate').addEventListener('click',()=>{
  toast.classList.add('show'); for(let i=0;i<30;i++) setTimeout(makePetal,i*55);
  setTimeout(()=>toast.classList.remove('show'),3200);
});

