document.addEventListener('DOMContentLoaded', () => {
    
    //card options
    const CARDARRAY = [
        {
            name: 'balloons',
            img: 'assets/img/balloons.png'
        },
        {
            name: 'balloons',
            img: 'assets/img/balloons.png'
        },
        {
            name: 'cap',
            img: 'assets/img/cap.png'
        },
        {
            name: 'cap',
            img: 'assets/img/cap.png'
        },
        {
            name: 'cat',
            img: 'assets/img/cat.png'
        },
        {
            name: 'cat',
            img: 'assets/img/cat.png'
        },
        {
            name: 'cupcake',
            img: 'assets/img/cupcake.png'
        },
        {
            name: 'cupcake',
            img: 'assets/img/cupcake.png'
        },
        {
            name: 'doggo',
            img: 'assets/img/doggo.png'
        },
        {
            name: 'doggo',
            img: 'assets/img/doggo.png'
        },
        {
            name: 'elephant',
            img: 'assets/img/elephant.png'
        },
        {
            name: 'elephant',
            img: 'assets/img/elephant.png'
        },
        {
            name: 'flower',
            img: 'assets/img/flower.png'
        },
        {
            name: 'flower',
            img: 'assets/img/flower.png'
        },
        {
            name: 'giraffe',
            img: 'assets/img/giraffe.png'
        },
        {
            name: 'giraffe',
            img: 'assets/img/giraffe.png'
        },
        {
            name: 'icecream',
            img: 'assets/img/icecream.png'
        },
        {
            name: 'icecream',
            img: 'assets/img/icecream.png'
        },
        {
            name: 'jar',
            img: 'assets/img/jar.png'
        },
        {
            name: 'jar',
            img: 'assets/img/jar.png'
        },
        {
            name: 'kangaroo',
            img: 'assets/img/kangaroo.png'
        },
        {
            name: 'kangaroo',
            img: 'assets/img/kangaroo.png'
        },
        {
            name: 'monkey',
            img: 'assets/img/monkey.png'
        },
        {
            name: 'monkey',
            img: 'assets/img/monkey.png'
        },
        {
            name: 'owl',
            img: 'assets/img/owl.png'
        },
        {
            name: 'owl',
            img: 'assets/img/owl.png'
        },
        {
            name: 'parfum',
            img: 'assets/img/parfum.png'
        },
        {
            name: 'parfum',
            img: 'assets/img/parfum.png'
        },
        {
            name: 'queen',
            img: 'assets/img/queen.png'
        },
        {
            name: 'queen',
            img: 'assets/img/queen.png'
        },
        {
            name: 'snowman',
            img: 'assets/img/snowman.png'
        },
        {
            name: 'snowman',
            img: 'assets/img/snowman.png'
        },
        {
            name: 'turtle',
            img: 'assets/img/turtle.png'
        },
        {
            name: 'turtle',
            img: 'assets/img/turtle.png'
        },
        {
            name: 'umbrella',
            img: 'assets/img/umbrella.png'
        },
        {
            name: 'umbrella',
            img: 'assets/img/umbrella.png'
        },
        {
            name: 'violin',
            img: 'assets/img/violin.png'
        },
        {
            name: 'violin',
            img: 'assets/img/violin.png'
        },
        {
            name: 'xilo',
            img: 'assets/img/xilo.png'
        },
        {
            name: 'xilo',
            img: 'assets/img/xilo.png'
        },
        {
            name: 'yatch',
            img: 'assets/img/yatch.png'
        },
        {
            name: 'yatch',
            img: 'assets/img/yatch.png'
        }
    ]

    CARDARRAY.sort(() => 0.5 - Math.random());

    const GRID = document.querySelector('.grid');
    const RESULTDISPLAY = document.querySelector('#result');
    let cardsChosen = [];
    let cardsChosenId = [];
    const CARDSWON = [];

    //create board
    function createBoard() {
        for (let i = 0; i < CARDARRAY.length; i++) {
            let card = document.createElement('img');
            card.setAttribute('src', 'assets/img/card.png');
            card.setAttribute('data-id', i);
            card.addEventListener('click', flipCard);
            GRID.appendChild(card);
        }
    }

    //check for matches
    function checkForMatch() {
        let cards = document.querySelectorAll('img');
        const OPTIONONEID = cardsChosenId[0];
        const OPTIONTWOID = cardsChosenId[1];

        if (OPTIONONEID == OPTIONTWOID) {
            cards[OPTIONONEID].setAttribute('src', 'assets/img/card.png');
            cards[OPTIONTWOID].setAttribute('src', 'assets/img/card.png');
        } else if (cardsChosen[0] === cardsChosen[1]) {
            cards[OPTIONONEID].setAttribute('src', 'assets/img/blank.png');
            cards[OPTIONTWOID].setAttribute('src', 'assets/img/blank.png');
            cards[OPTIONONEID].removeEventListener('click', flipCard);
            cards[OPTIONTWOID].removeEventListener('click', flipCard);
            CARDSWON.push(cardsChosen);
        } else {
            cards[OPTIONONEID].setAttribute('src', 'assets/img/card.png');
            cards[OPTIONTWOID].setAttribute('src', 'assets/img/card.png');
        }

        cardsChosen = [];
        cardsChosenId = [];
        RESULTDISPLAY.textContent = CARDSWON.length;
        if (CARDSWON.length === CARDARRAY.length/2) {
            RESULTDISPLAY.textContent = 'Atta boy!';
        }
    }

    //flip card
    function flipCard() {
        let cardId = this.getAttribute('data-id');
        cardsChosen.push(CARDARRAY[cardId].name);
        cardsChosenId.push(cardId);
        this.setAttribute('src', CARDARRAY[cardId].img);
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500);
        }
    }

    createBoard();
})