//evento de abrir e fechar modal criar habito
const modal = document.querySelector('#criarHabito')
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
const buttonExcluirModal = document.querySelector('.botaoExcluir')
buttonExcluirModal.addEventListener('click', () => {
    modalEdit.style.display = 'none'
    modalExcluir.style.display = 'flex'
})
const buttonFecharModalExcluir = document.querySelector('.imageFecharExcluir')
buttonFecharModalExcluir.addEventListener('click', () => {
    modalExcluir.style.display = 'none'
})



// evento para abrir o editar 
const edit = document.querySelectorAll('.conteudoEditar')
const modalEdit = document.querySelector('#modal_editarHabito')
edit.forEach(elem => {
    elem.addEventListener('click', () => {
        modalEdit.style.display = 'flex'
    })
})
const buttonFecharEdit = document.querySelector(".imageFecharEdit")
buttonFecharEdit.addEventListener('click', () => {
    modalEdit.style.display = 'none'
})

