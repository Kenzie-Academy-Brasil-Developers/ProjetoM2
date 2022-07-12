
//evento de abrir e fechar modal criar habito
const modal = document.querySelector('#modal_criarHabito')
const buttonCriarModal = document.querySelector('.botaoCriar')
buttonCriarModal.addEventListener('click', () => {
    modal.style.display = 'flex'
})
const buttonFecharModal = document.querySelector('.imageFechar')
buttonFecharModal.addEventListener('click', () => {
    modal.style.display = 'none'
})

//evento de abrir e fechar modal de excluir habito
const modalExcluir = document.querySelector('#modal_excluirHabito')
const buttonExcluirModal = document.querySelector('')
buttonExcluirModal.addEventListener('click', () => {
    modalExcluir.style.display = 'flex'
})
const buttonFecharModalExcluir = document.querySelector('.imageFecharExcluir')
buttonFecharModal.addEventListener('click', () => {
    modalExcluir.style.display = 'none'
})