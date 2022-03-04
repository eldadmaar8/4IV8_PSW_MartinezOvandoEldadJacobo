const imgagenes = document.querySelectorAll('.img-galeria')
const imagenesLight = document.querySelector('.agregar-imagen')
const contendeorLight= document.querySelector('.imagen-light')
const menu1 = document.querySelector('.menu');

console.log(imagen =>{
    imagen.addEventListener('click', ()=>{

    })
})

contendeorLight.addEventListener('click', (e)=>{
    if(e.target!== imagenesLight){
        contendeorLight.classList.toggle(show)
        imagenesLight.classList.toggle('showImage')
        menu1.style.opacity='1'
    }
})

const aparecerImagen =(imagen)=>{
    imagenesLight.scr =imagen;
    contendeorLight.classList.toggle(show)
    imagenesLight.classList.toggle('showImage')
    menu1.style.opacity='0'
}