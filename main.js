function createGame(player1, player2,hour1) {
    return`
    <li>
            <img src="./assets/${player1}.svg" alt="">
            <strong>${hour1}</strong>
            <img src="./assets/${player2}.svg" alt="">
        </li>
`
}


let delay = -0.3;
function createCard(date, day, games) {
    delay = delay + 0.3;
    return `
    <div class="card" style='animation-delay: ${delay}s'>
    <h2>${date} <span>${day}</span></h2>
    <ul>
        ${games}
    </ul>
</div>

    `
}


document.querySelector('#app').innerHTML = `
<header>
<img src="./assets/logo.svg" alt="LOGO DA NLW">
</header>
<main id="cards">
${createCard('24/11', 'QUINTA', createGame('switzerland', 'cameroon', '07:00')+createGame('portugal', 'ghana', '13:00')+createGame('brazil', 'servia', '16:00'))}
${createCard('28/11', 'segunda', createGame('coreiasul', 'ghana', '10:00')+createGame( 'brazil', 'switzerland', '13:00') +createGame('portugal', 'uruguai', '16:00'))}

</main>
`