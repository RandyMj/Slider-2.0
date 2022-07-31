const prev = document.getElementById('btnPrev');
const next = document.getElementById('btnNext');
const imgContainer = document.getElementById('img-container');

const numberOfElements = 5
const divSpace = 100;
const imgSpace = divSpace / numberOfElements;

let i = 0;

function positionNext () {
    if ( i <= 0 && i > - `${divSpace - imgSpace}`) {
        i = i - `${imgSpace}`;
    } else if( i == - `${divSpace - imgSpace}`) {
        i = 0;
    }
    imgContainer.style.transform = `translateX(${i}%)`
}

function positionPrev () {
    if ( i == 0) {
        i = i - `${divSpace - imgSpace}`;
        console.log(i);
    } 
    else if ( i < 0 ) {
        // Dont know why it takes the two variables and concatenates them. Left the code commented for later review.
        // i = i + `${imgSpace}`;
        console.log(`${imgSpace}`);
        i = i + 20;
        console.log(i);
    }
    imgContainer.style.transform = `translateX(${i}%)`
}


prev.addEventListener('click', positionPrev);
next.addEventListener('click', positionNext);
