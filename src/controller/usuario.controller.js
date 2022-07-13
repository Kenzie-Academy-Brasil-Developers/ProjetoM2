export default class Usuario {
    static baseUrl = "https://habits-kenzie.herokuapp.com/api"
    static token = JSON.parse(localStorage.getItem("@kenzie-habits-token"))

    static async login(data) {
        return await fetch(`${this.baseUrl}/userLogin`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
            .then(res => res.json())
            .then(res => {
                if (res.token !== undefined) {
                    localStorage.setItem("@kenzie-habits-token", JSON.stringify(res.token))
                    localStorage.setItem("@kenzie-habits-user", JSON.stringify(res.response))
                    window.location = './src/views/homePage.views.html'
                }
                return console.log(res)
            })
            .catch(err => console.log(err))


    }

    static async updateUser(data) {
        return await fetch(`${this.baseUrl}/user/profile`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${this.token}`
                },
                body: JSON.stringify(data)
            })
            .then(res => res.json())
            .then(res => res)
            .catch(err => console.log(err))
    }

}

// E-mail: grupo3Caique@mail.com
// Senha: 61532680c163157d92f094e6a0d4303f