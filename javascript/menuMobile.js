const buttonMenuMobile = document.querySelector('[data-menu-mobile="mobile"]')

const configMenuMobile = () => {
    const navMenu = document.querySelector('[data-mobile-list="mobile"]')
    navMenu.classList.toggle('active')
}

buttonMenuMobile.addEventListener('click', () => configMenuMobile())