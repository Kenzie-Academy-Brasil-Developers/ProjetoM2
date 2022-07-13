// import Habito from "../controller/habits.controller.js";

// // const newHabit = await Habito.createHabit({
// //     "habit_title": "bater ponto corretamente",
// //     "habit_description": "bater ponto todos os dias nos horários corretos",
// //     "habit_category": "trabalho"
// // })

// // console.log(newHabit)

// const lerTodos = await Habito.readAll()

// console.log(lerTodos)
//     // const categoria = "trabalho"

// // const lerCategoria = await Habito.readByCategory(categoria)
// // console.log(lerCategoria)

// // const atualizarHabito = await Habito.updateHabit({
// //     "habit_title": "Jogar volei aos domingos no parque Marina",
// //     "habit_description": "Ir aos domingos com a família no parque Marina e aproveitar para jogar vôlei de areia",
// //     "habit_category": "lazer"
// // }, 435)

// // console.log(atualizarHabito)

// // const completarHabito = await Habito.completeHabit(435)
// // console.log(completarHabito)

// const deletarHabito = await Habito.deleteHabit(440)
// console.log(deletarHabito)
//     // const login = await Usuario.login({
//     //     "email": "grupo3Caique@mail.com",
//     //     "password": "61532680c163157d92f094e6a0d4303f"
//     // })

// // console.log(login)

// // const update = await Usuario.updateUser({
// //     "usr_image": "https://www.google.com/images/Kammer",
// // })
// // console.log(update)

// // habit_id: 435




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
buttonExcluirModal.addEventListener('click', (e) => {
    e.preventDefault()
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

// evento button logout 
const buttonLogout = document.querySelector('.btnLogout')
buttonLogout.addEventListener('click', () => {
    localStorage.removeItem("@kenzie-habits-token")
    localStorage.removeItem("@kenzie-habits-user")
    window.location = '../../index.html'
})


//função de dados do user 
let usuario = JSON.parse(localStorage.getItem('@kenzie-habits-user'))
function elementosDom(data) {
    const boxUser = document.querySelector(".segundoBox")
    const figure = document.createElement("figure")
    const img = document.createElement("img")
    const h3 = document.createElement("h3")

    h3.innerText = data.usr_name
    img.src = data.usr_image

    figure.append(img)
    boxUser.append(figure, h3)

    const figureBoxMenor = document.querySelector(".figureUser")
    const imgMenorBox = document.createElement('img')
    imgMenorBox.src = data.usr_image
    figureBoxMenor.append(imgMenorBox)
}
elementosDom(usuario)