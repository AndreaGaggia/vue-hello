/*
Istruzioni:
Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
Bonus: Aggiungere un’immagine presa anch’essa da un data
*/

let content = new Vue({
    el: '#content',
    data: {
        phrase: '"è strano come una discesa vista dal basso somigli a una salita"',
        imagePath: './be_goofy.jpg',
        imageStyle: 'height: 500px; border-radius: 2rem',
        bgLY: 'background-color: lightyellow'
    }
});