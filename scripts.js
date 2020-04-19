function toggleMenu()
{
    let menuItems = document.getElementsByClassName('item');
    
    for (let i = 0; i < menuItems.length; i++)
    {
        menuItems[i].style.display = (menuItems[i].style.display === 'none' || menuItems[i].style.display === '') ? 'inline' : 'none';
    }
}

function onWindowResize(e)
{
    if (e.target.outerWidth > 768)
    {
        let menuItems = document.getElementsByClassName('item');
    
        for (let i = 0; i < menuItems.length; i++)
        {
            menuItems[i].style.display = 'inline';
        }
    }
}

window.addEventListener("resize", onWindowResize);