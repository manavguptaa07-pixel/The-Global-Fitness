(function(){
 var m=document.querySelector('.menu'),n=document.querySelector('nav');
 if(m)m.addEventListener('click',function(){n.classList.toggle('open')});
 var f=document.getElementById('f');
 if(f)f.addEventListener('submit',function(e){e.preventDefault();document.getElementById('ok').style.display='block';f.reset()});
 var els=document.querySelectorAll('[data-n]');
 if(!els.length)return;
 var calm=window.matchMedia('(prefers-reduced-motion:reduce)').matches;
 function run(el){var t=+el.dataset.n,s=el.dataset.s||'',d=1200,t0=null;
  if(calm){el.textContent=t+s;return}
  (function step(ts){if(!t0)t0=ts;var p=Math.min((ts-t0)/d,1);el.textContent=Math.round(t*p)+s;if(p<1)requestAnimationFrame(step)})(performance.now())}
 if(!('IntersectionObserver' in window)){els.forEach(function(e){e.textContent=e.dataset.n+(e.dataset.s||'')});return}
 var io=new IntersectionObserver(function(es){es.forEach(function(x){if(x.isIntersecting){run(x.target);io.unobserve(x.target)}})},{threshold:.4});
 els.forEach(function(e){io.observe(e)});
})();
