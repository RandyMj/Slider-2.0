const prev = document.getElementById('btnPrev');
const next = document.getElementById('btnNext');
const imgContainer = document.getElementById('img-container');
const bar = document.querySelectorAll(".point");

const numberOfElements = bar.length
const divSpace = 100;
const imgSpace = divSpace / numberOfElements;

let i = 0;

// NEW CODE FOR THE SELECTION BARS
bar.forEach( (bars, i) => {
    bar[i].addEventListener('click', () => {
        let position = i;
        let positionCalc = position * -`${imgSpace}`;

        imgContainer.style.transform = `translateX(${positionCalc}%)`;

        bar.forEach (( bars, i) => {
            bar[i].classList.remove('active');
        });

        bar[i].classList.add('active');
    })
});


// CODE WRITEN FOR THE PREV AND NEXT BUTTONS---------------------------------------------------------------------
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
    } 
    else if ( i < 0 ) {
        // Dont know why it takes the two variables and concatenates them. Left the code commented for later review.
        // i = i+`${imgSpace}`;
        i = i + 20;
    }
    imgContainer.style.transform = `translateX(${i}%)`
}

prev.addEventListener('click', positionPrev);
next.addEventListener('click', positionNext);
