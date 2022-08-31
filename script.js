/* usando javascript para criar o efeito da tela rolando suavemente ao clicar em um dos links acima (sobre mim, escolaridade, portfolio e contato), foi o que menos usei pois tive dificuldade porém deu para dar um efeito legal */
const menu = document.querySelectorAll('.navbar a[href^="#"]');

menu.forEach(item =>{
    item.addEventListener('click', scrollToIdOnClick)
})

function scrollToIdOnClick(event) {
    event.preventDefault();
    const element = event.target;
    const id = element.getAttribute('href');
    const to = document.querySelector(id).offsetTop;

    window.scroll({
        top: to - 50,
        behavior: "smooth"
    })
}