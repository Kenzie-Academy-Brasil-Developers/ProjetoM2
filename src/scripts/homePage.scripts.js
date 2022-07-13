const buttonLogout = document.querySelector('.btnLogout')
buttonLogout.addEventListener('click', () => {
    localStorage.removeItem("@kenzie-habits-token")
    localStorage.removeItem("@kenzie-habits-user")
    window.location = '../../index.html'
})