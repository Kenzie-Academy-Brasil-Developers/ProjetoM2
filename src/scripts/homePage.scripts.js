//evento de abrir e fechar modal criar habito
const buttonCriarModal = document.querySelector('')
const modal = document.querySelector('.modal')
buttonCriarModal.addEventListener('click', () => {
    modal.style.display = 'flex'
})
const buttonFecharModal = document.querySelector('.imageFechar')
buttonFecharModal.addEventListener('click', () => {
    modal.style.display = 'none'
})
//

