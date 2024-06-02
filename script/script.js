/*
    pegar o elemnto do botao
    2 = ativar funçao clic do botao
    3 = criar a funçao

    classlist toggle significa add e remove caso tenha

    4 quando clicar no botao ativa a fun

*/

const botaoMobile = document.getElementById('btn-menu')

function toggleMenu(){
    const menuNav = document.getElementById('menu-nav');
    menuNav.classList.toogle('active')
}
