import Usuario from "../controller/usuario.controller.js";


const buttonLogin = document.querySelector("button")
buttonLogin.addEventListener('click', () => {
    const inputEmail = document.querySelector('.email')
    const inputSenha = document.querySelector('.senha')


    let obj = {
        email: inputEmail.value,
        password: inputSenha.value
    }
    Usuario.login(obj)
})


let objs = await Habito.readAll()

function listandoHabitos(obj) {
    obj.forEach(elem => {
        const table = document.querySelector('table')
        const tr = document.createElement("tr")
        const thStatus = document.createElement('th')
        const inputCheck = document.createElement('input')
        const thTitulo = document.createElement('th')
        const thDescricao = document.createElement('th')
        const thCategoria = document.createElement('th')
        const thEditar = document.createElement('th')
        inputCheck.type = 'checkbox'
        inputCheck.className = 'check'
        thStatus.className = 'conteudoStatus'
        thTitulo.className = 'conteudoTitulo'
        thDescricao.className = 'conteudoDescricao'
        thCategoria.className = 'conteudoCategoria'
        thEditar.className = 'conteudoEditar'
        tr.className = 'conteudoTabela'
        const concluidos = document.querySelector('.botaoConcluidos');
        concluidos.addEventListener('click', filtroConcluido)
        thTitulo.innerText = elem.habit_title
        thDescricao.innerText = elem.habit_description
        thCategoria.innerText = elem.habit_category
        thEditar.innerText = '...'
        thEditar.id = elem.habit_id
        thStatus.appendChild(inputCheck)
        tr.append(thStatus, thTitulo, thDescricao, thCategoria, thEditar)
        table.append(tr)
    })
}
listandoHabitos(objs);
// criar filtro do habitos "Concluídos"
console.log(objs)
    //const concluidos = document.querySelector('.botaoConcluidos');
function filtroConcluido() {
    const listaFiltroHabitos = objs.filter((obj) => {
        return obj.habit_status === true
    })
    listandoHabitos(listaFiltroHabitos);
}