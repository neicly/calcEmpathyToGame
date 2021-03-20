function calcEmpathyToGame(){
    const start = confirm('Определим насколько вы любите свою игру'),
        getName = prompt('Как называется ваша игра?'),
        getTime = prompt(`Сколько часов в ${getName} вы отыграли?`),
        getOtherGames = prompt('Сколько обычно часов в играх вы отыгрываете?');

    if(start == false) {return}

    window.setTimeout((result) => {
        setTimeout(() => {
            console.log('Получение отправленных данных...');
        }, 1000);
        setTimeout(() => {
            console.log('Данные получены...');
        }, 1500);
        setTimeout(() => {
            console.log('Обработка полученных данных...');
        }, 2000);
        setTimeout(() => {
            console.log('Данные обработаны. Подготовка к операции.');
        }, 3000);
        setTimeout(() => {
            console.log('Подождите, операция выполняется...');
        }, 3500);
        setTimeout(() => {
                result = (getTime > getOtherGames) 
                ? alert(`Вы очень любите играть в ${getName}, наиграв при этом целых ${getTime} часов!`) 
                : alert(`Вам не очень нравится играть в ${getName}. Вы наиграли только ${getTime} часов`) 
        }, 4000);
    }, 1000);
}