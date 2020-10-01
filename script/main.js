// day 1

const btnBurger = document.querySelector('.btn-burger')
const btnClose = document.querySelector('.btn-close')
const catalog = document.querySelector('.catalog')
const subCatalog = document.querySelector('.subcatalog')
const subCatalogHeader = document.querySelector('.subcatalog-header')
const btnReturn = document.querySelector('.btn-return')

const overlay = document.createElement('div')
overlay.classList.add('overlay')
document.body.append(overlay)


const catalogMenu = () => {
    if(catalog.classList.contains('open') && overlay.classList.contains('active')) {
        catalog.classList.remove('open')
        overlay.classList.remove('active')
        closeSubMenu()
    } else {
        catalog.classList.add('open')
        overlay.classList.add('active')
    }
}

const openSubMenu = event => {
    event.preventDefault()
    const target = event.target
    const itemList = target.closest('.catalog-list__item')
    if(itemList) {
        subCatalogHeader.innerHTML = itemList.innerHTML
        if(subCatalog.classList.contains('subopen')) {
            subCatalog.classList.remove('subopen')
        } else {
            subCatalog.classList.add('subopen')
        }
    }
}

const closeSubMenu = () => {
    subCatalog.classList.remove('subopen')
}


btnBurger.addEventListener('click', catalogMenu)
btnClose.addEventListener('click', catalogMenu)
btnReturn.addEventListener('click', closeSubMenu)
overlay.addEventListener('click', catalogMenu)
catalog.addEventListener('click', openSubMenu)


document.addEventListener('keydown', event => {
    if(event.code === 'Escape') {
        catalogMenu();
    }
})