const cerrar = document.querySelector(".aceptar"); 
cerrar.addEventListener("click", function(){
  const aviso = document.querySelector(".aviso");
  aviso.style.display="none";
});

document.addEventListener('DOMContentLoaded',()=>{
  const imgLightBox = document.querySelectorAll('.evidencia');
  M.Materialbox.init(imgLightBox); 
  const elems = document.querySelectorAll('.collapsible');
  const instaces = M.Collapsible.init(elems,{
    accordion:false
  });
});
