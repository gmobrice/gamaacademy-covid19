function toggleMenu()
{
    let menuItems = document.getElementsByClassName('item');
    
    for (let i = 0; i < menuItems.length; i++)
    {
        menuItems[i].style.display = (menuItems[i].style.display === 'none' || menuItems[i].style.display === '') ? 'inline' : 'none';
    }
}

function sendMail()
{
    let contato = 
    {
        'nome': document.getElementById('nome').value,
        'email': document.getElementById('email').value,
        'assunto': document.getElementById('assunto').value,
        'mensagem': document.getElementById('mensagem').value
    };

    fetch("/sendMail.php", { method: 'POST', body: JSON.stringify(contato)})
        .then(() => {
            alert("E-mail enviado com sucesso!");
        });
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