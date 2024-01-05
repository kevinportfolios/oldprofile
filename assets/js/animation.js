
            
const wrapper= document.querySelectorAll('#home');
const anim=(x,wrap)=>{
  const bub=document.createElement('div');
  bub.classList.add('bubble');
  bub.style.left=x+"px";
  wrap.appendChild(bub);
  console.log(x,wrap)
  setTimeout(()=>{bub.classList.remove('bubble')},500)
}

wrapper[0].onmousemove=e=>anim(e.clientX,wrapper[0]); 
// wrapper[1].onmousemove=e=>wow(e.clientX,wrapper[1],e.clientY);
// wrapper[2].onmousemove=e=>wtf(e.clientX,wrapper[2],e.clientY);
wrapper[0].ontouchmove=e=>anim(e.clientX,wrapper[0]); 
// wrapper[1].ontouchmove=e=>wow(e.clientX,wrapper[1],e.clientY);
// wrapper[2].ontouchmove=e=>wow(e.clientX,wrapper[2],e.clientY);





