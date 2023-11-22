let Hamburger = document.querySelector('.hamburger')
let SideBar = document.querySelector('.sidebar')

Hamburger.addEventListener('click', () => {
    if (Hamburger.className === 'hamburger') {
        Hamburger.className = 'hamburger-x'
        SideBar.className = 'sidebar-active'
    } else {
        Hamburger.className = 'hamburger'
        SideBar.className = 'sidebar'
    }
})