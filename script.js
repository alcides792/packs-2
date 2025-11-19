// Helpful JS: smooth scroll, telegram opener, form handler, year inserter
function openTelegram(prefill){
  const user = 'SEU_USUARIO'; // <--- substitua pelo seu @usuario do Telegram
  const text = prefill ? encodeURIComponent(prefill) : '';
  const url = text ? `https://t.me/${user}?text=${text}` : `https://t.me/${user}`;
  window.open(url, '_blank');
}

function scrollToProdutos(){
  document.getElementById('produtos').scrollIntoView({behavior:'smooth'});
}

function handleContact(e){
  e.preventDefault();
  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;
  const mensagem = document.getElementById('mensagem').value;
  const text = encodeURIComponent(`Contato:%0ANome:%20${nome}%0AEmail:%20${email}%0AMensagem:%20${mensagem}`);
  // abre telegram com a mensagem pre-preenchida
  const user = 'SEU_USUARIO';
  window.open(`https://t.me/${user}?text=${text}`,'_blank');
}

// insert current year
document.getElementById('ano') && (document.getElementById('ano').textContent = new Date().getFullYear());
document.getElementById('ano2') && (document.getElementById('ano2').textContent = new Date().getFullYear());
document.getElementById('ano3') && (document.getElementById('ano3').textContent = new Date().getFullYear());
document.getElementById('ano4') && (document.getElementById('ano4').textContent = new Date().getFullYear());

// small accessibility: allow Enter on focused card to open details
document.querySelectorAll('.card').forEach(card=>{
  card.addEventListener('keypress',e=>{ if(e.key==='Enter'){ card.querySelector('.btn-outline')?.click(); } });
});

