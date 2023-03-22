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

function comentario(){
  const nombre = document.querySelector(".name").value;
  const caso = document.querySelector(".case").value;
  const comentario = document.querySelector(".comentario").value;
  const compartir = document.querySelector(".publicar");

  compartir.addEventListener("click",function(){
    if( nombre == ""  && caso == "" && comentario == "" ){
      alert("Debes de rellenar los campos solicitados");
      
    }else{
      const testimonio = document.querySelector(".testimonio");
      const citeNombre = document.createElement("cite");
      const citeCaso = document.createElement("cite");
      const parrCom = document.createElement("p");

      citeNombre.appendChild(nombre);
      citeCaso.appendChild(caso);
      parrCom.appendChild(comentario);

      testimonio.appendChild(citeNombre);
      testimonio.appendChild(citeCaso);
      testimonio.appendChild(parrCom);
    }
   });
}

comentario();