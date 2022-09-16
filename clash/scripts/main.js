// splashscreen
var begin = document.getElementById('start');
begin.addEventListener('mouseover',boop);
begin.addEventListener('mousedown',press);
begin.addEventListener('mouseup',lift);
begin.addEventListener('click', startgame);
var music = new Audio('audio/main_theme.mp3');

// functions for buttons when clicked and hovered
function lift () {
    begin.style.transform = 'scale(1.1,1)';
}
function press () {
    begin.style.transform = 'scale(0.9,1)';
}
function boop () {
    var boop_audio = new Audio('audio/boop.mp3');
    boop_audio.play();
}

// start intro
function startgame() {
    // play music
    music.loop = true;
    boop();
    music.play();

    // remove splashscreen
    var intro = document.getElementById('intro');
    intro.style.transition = "1s";
    intro.style.animationDelay = "1s";
    intro.style.animation = "1.5s dropdown";
    setTimeout(() => {
        intro.style.transform = "translate(0,100%)";
    }, 1500);

    // declaring all variables first
    var main = document.getElementById('main');
    var overlay = document.getElementById('overlay');

    /// king stuff
    var next_1 = document.getElementById('next_1');
    var kingspeech = document.getElementById('kingspeech');
    var kingtext = document.getElementById('kingtext');
    var king_main = document.getElementById('king');
    var king_search = document.getElementById('king_search');
    var king_laughing = document.getElementById('king_laughing');

    /// hog stuff
    var hogspeech = document.getElementById('hogspeech');

    // counter to keep track of storyline
    var count = 0;

    // starting animations
    main.style.animation = 'bg 2s';
    king_main.style.animation = "move_king 2s";
    overlay.style.animation = 'fade 2s';
    kingspeech.style.animation = 'fade 3s';

    // when clicking continue text
    next_1.addEventListener('click',() => {
        if (count == 0) {
            king_search.style.opacity = 100;
            king_main.style.opacity = 0;
            kingtext.textContent = "Oh you're here to see our champ ? Let's see if he's here today...";
            count += 1;

        } else if (count == 1) {
            kingspeech.style.animation = "fadeout 0.5s";
            setTimeout(() => {
                kingspeech.style.opacity = 0;
                kingspeech.style.left = "500%";
            }, 400);

            // hog intro
            new Audio('audio/hog_sound.mp3').play();
            setTimeout(() => {
                hogspeech.style.opacity = 100;
                setTimeout(() => {
                    new Audio('audio/king_laugh.mp3').play();
                    hogspeech.style.opacity = 0;
                    king_search.style.opacity = 0;
                    
                    // back to king speech
                    king_laughing.style.opacity = 100;
                    kingspeech.style.left = "35%";
                    kingspeech.style.animation = 'fade 1s';
                    setTimeout(() => {
                        kingspeech.style.opacity = 100;
                    }, 900);
                    kingtext.textContent = 'Ah.. Mr Hoggers has arrived ! Please go introduce yourself !';
                }, 3400);
            }, 2000);
            
            count += 1;
        } else if (count == 2) {
            // bye king
            king_laughing.style.animation = 'fadeout 0.5s';
            kingspeech.style.animation = 'fadeout 0.5s';
            setTimeout(() => {
                king_laughing.style.opacity = 0;
                kingspeech.style.opacity = 0;
                kingspeech.style.left = '500%';
                hog_dialogue();
            },450);   
        }
    })
}

function hog_dialogue () {
    // variables
    var hog_main = document.getElementById('hog_main');
    var hog_main_speech = document.getElementById('hog_main_speech');
    var hog_main_text = document.getElementById('hog_main_text');
    var next_2 = document.getElementById('next_2');
    var count = 0;

    // hog dialogue
    hog_main.style.opacity = 100;
    hog_main_speech.style.left = "35%";
    hog_main_speech.style.animation = "fade 1s";
    setTimeout(() => {
        hog_main_speech.style.opacity = 100;    
    }, 900);
    
    next_2.addEventListener('click', () => {
        if (count == 0) {
            hog_main_text.textContent = "Oh, you wanna see my stats? Come on over!";
            count += 1;
        } else if (count == 1) {
            hog_main.style.animation = 'fadeout 1s';
            hog_main_speech.style.animation = 'fadeout 1s';
            overlay.style.animation = 'fadeout 1s';
            setTimeout(() => {
                hog_main_speech.style.opacity = 0;
                hog_main.style.opacity = 0;
                overlay.style.opacity = 0;
            }, 1000);
            setInterval(() => {
                if (music.volume > 0.0000000000000001) {
                    x += 1;
                    music.volume -= 0.01;
                } else {
                    clearInterval();
                }
            }, 20);
            main.style.animation = 'fadeout 2s';
            setTimeout(() => {
               location.href = 'hog.html';
            }, 1600);
            
        }
    })

    
}