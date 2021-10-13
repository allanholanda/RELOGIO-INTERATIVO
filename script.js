function carregar() {
    var clock = window.document.getElementById('horas');
    var img = window.document.getElementById('imagem');
    var msg = window.document.getElementById('msg');
    var data = new Date();
    var hora = data.getHours();
    var minutos = data.getMinutes();

    clock.innerHTML = `Agora são ${hora}h e ${minutos}min.`

    if (hora >= 0 && hora < 12){
        //Bom dia
        img.src = 'IMG-model/manha.jpg'
        document.body.style.background = '#e2cd9f'
        msg.innerHTML = 'Bom dia!'
    } else if (hora >= 12 && hora <= 18){
        //Boa tarde
        img.src = 'IMG-model/tarde.jpg'
        document.body.style.background = '#b9846f'
        msg.innerHTML = 'Boa tarde!'
    } else{
        //Boa noite
        img.src = 'IMG-model/noite.jpg'
        document.body.style.background = '#515154'
        msg.innerHTML = 'Boa noite!'
    }

    var calendar = window.document.getElementById('data')
    var dia = data.getDate();
    var mes = data.getMonth() + 1;
    var ano = data.getFullYear();
    calendar.innerHTML = `Data atual: ${dia}/${mes}/${ano}`
}

