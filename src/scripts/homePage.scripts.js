import Usuario from "../controller/usuario.controller.js";
import Habito from "../controller/habits.controller.js";

// const newHabit = await Habito.createHabit({
//     "habit_title": "bater ponto corretamente",
//     "habit_description": "bater ponto todos os dias nos horários corretos",
//     "habit_category": "trabalho"
// })

// console.log(newHabit)

const lerTodos = await Habito.readAll()

console.log(lerTodos)
    // const categoria = "trabalho"

// const lerCategoria = await Habito.readByCategory(categoria)
// console.log(lerCategoria)

// const atualizarHabito = await Habito.updateHabit({
//     "habit_title": "Jogar volei aos domingos no parque Marina",
//     "habit_description": "Ir aos domingos com a família no parque Marina e aproveitar para jogar vôlei de areia",
//     "habit_category": "lazer"
// }, 435)

// console.log(atualizarHabito)

// const completarHabito = await Habito.completeHabit(435)
// console.log(completarHabito)

const deletarHabito = await Habito.deleteHabit(440)
console.log(deletarHabito)
    // const login = await Usuario.login({
    //     "email": "grupo3Caique@mail.com",
    //     "password": "61532680c163157d92f094e6a0d4303f"
    // })

// console.log(login)

// const update = await Usuario.updateUser({
//     "usr_image": "https://www.google.com/images/Kammer",
// })
// console.log(update)

// habit_id: 435