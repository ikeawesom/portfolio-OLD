var boop_audio = new Audio('audio/boop.mp3');
var music = new Audio('audio/battle.mp3');
music.muted = true;

var next = document.getElementById('right_arrow');
var prev = document.getElementById('left_arrow');

var page1 = document.getElementById('page1');
var page2 = document.getElementById('page2');
var page3 = document.getElementById('page3');
var page4 = document.getElementById('page4');

var dot1 = document.getElementById('dot1');
var dot2 = document.getElementById('dot2');
var dot3 = document.getElementById('dot3');
var dot4 = document.getElementById('dot4');

var sound_on = document.getElementById('on');
var sound_off = document.getElementById('off');

var muted = 1;
var page = 1;
var playing = 0;

sound_off.addEventListener('click', () => {
    muted = 0;
    music.muted = false;
    sound_off.style.display = 'none';
    sound_on.style.display = "block";
})

sound_on.addEventListener('click', () => {
    muted = 1;
    music.muted = true;
    sound_off.style.display = 'block';
    sound_on.style.display = "none";
})

dot1.style.backgroundColor = '#fc902b';

function goto_1() {
    page1.style.left = '18%';
    page2.style.left = '218%';
    page3.style.left = '418%';
    page4.style.left = '616%';
    prev.style.animation = 'fade_out 0.5s';
    setTimeout(() => {
        prev.style.display = 'none';
    }, 500);
}

function goto_2() {
    page1.style.left = "-218%";
    page2.style.left = "18%";
    page3.style.left = "218%";
    page4.style.left = '418%';
    prev.style.animation = 'fade_in 0.5s';
    setTimeout(() => {
        prev.style.display = 'block';
    }, 500);
}

function goto_3() {
    page1.style.left = "-418%"; 
    page2.style.left = "-218%";
    page3.style.left = "18%";
    page4.style.left = '218%';
}

function goto_4() {
    page1.style.left = "-618%"; 
    page2.style.left = "-418%";
    page3.style.left = "-218%";
    page4.style.left = '18%';
    next.style.animation = "fade_out 0.5s";
    setTimeout(() => {
        next.style.display = "none";
    }, 500);
}

function boop () {
    if (muted == 0) {
        boop_audio.play();
    }
}

next.addEventListener('click', ()=> {
    boop();
    if (playing == 0) {
        playing == 1;
        music.play();
    }

    if (page == 1) {
        goto_2();
        dot2.style.backgroundColor = '#fc902b';
        dot1.style.backgroundColor = '#5a6a7d';
        page += 1;
    } else if (page == 2) {
        goto_3();
        dot3.style.backgroundColor = '#fc902b';
        dot2.style.backgroundColor = '#5a6a7d';
        page += 1;
    } else if (page == 3) {
        goto_4();
        dot4.style.backgroundColor = '#fc902b';
        dot3.style.backgroundColor = '#5a6a7d';
        page += 1;
    }
});

prev.addEventListener('click', () => {
    boop();
    if (playing == 0) {
        playing == 1;
        music.play();
    }
    if (page == 2) {
       goto_1();
       dot1.style.backgroundColor = '#fc902b';
       dot2.style.backgroundColor = '#5a6a7d';
       page -= 1;
    }

    if (page == 3) {
        goto_2();
        dot2.style.backgroundColor = '#fc902b';
        dot3.style.backgroundColor = '#5a6a7d';
        page -= 1;
    }

    if (page == 4) {
        goto_3();
        dot3.style.backgroundColor = '#fc902b';
        dot4.style.backgroundColor = '#5a6a7d';
        next.style.animation = 'fade_in 0.5s';
        setTimeout(() => {
            next.style.display = 'block';
        }, 500);
        page -= 1;
    }
});

dot1.addEventListener('click', () => {
    boop();
    if (playing == 0) {
        playing == 1;
        music.play();
    }
    goto_1();
    if (page == 4) {  
        dot1.style.backgroundColor = '#fc902b';
        dot4.style.backgroundColor = '#5a6a7d';
        next.style.animation = 'fade_in 0.5s';
        setTimeout(() => {
            next.style.display = 'block';
        }, 500);
        page = 3
    } else {
        dot1.style.backgroundColor = '#fc902b';
        dot2.style.backgroundColor = '#5a6a7d';
        dot3.style.backgroundColor = '#5a6a7d';
        dot4.style.backgroundColor = '#5a6a7d';
    }
    page = 1;
})

dot2.addEventListener('click', () => {
    boop();
    if (playing == 0) {
        playing == 1;
        music.play();
    }
    goto_2();
    if (page == 4) {  
        dot2.style.backgroundColor = '#fc902b';
        dot4.style.backgroundColor = '#5a6a7d';
        next.style.animation = 'fade_in 0.5s';
        setTimeout(() => {
            next.style.display = 'block';
        }, 500);
    } else {
        if (page == 1) {
            prev.style.animation = 'fade_in 0.5s';
            setTimeout(() => {
                prev.style.display = 'block';
            }, 500);
        }
        dot2.style.backgroundColor = '#fc902b';
        dot3.style.backgroundColor = '#5a6a7d';
        dot1.style.backgroundColor = '#5a6a7d';
        dot4.style.backgroundColor = '#5a6a7d';
    }
    page = 2;
})

dot3.addEventListener('click', () => {
    boop();
    if (playing == 0) {
        playing == 1;
        music.play();
    }
    goto_3();
    if (page == 4) {  
        dot3.style.backgroundColor = '#fc902b';
        dot4.style.backgroundColor = '#5a6a7d';
        next.style.animation = 'fade_in 0.5s';
        setTimeout(() => {
            next.style.display = 'block';
        }, 500);
    } else {
        if (page == 1) {
            prev.style.animation = 'fade_in 0.5s';
            setTimeout(() => {
                prev.style.display = 'block';
            }, 500);
        }
        dot3.style.backgroundColor = '#fc902b';
        dot2.style.backgroundColor = '#5a6a7d';
        dot1.style.backgroundColor = '#5a6a7d';
        dot4.style.backgroundColor = '#5a6a7d';
    }
    page = 3;
})

dot4.addEventListener('click', () => {
    boop();
    if (playing == 0) {
        playing == 1;
        music.play();
    }
    goto_4();
    if (page == 1) {
        prev.style.animation = 'fade_in 0.5s';
        setTimeout(() => {
            prev.style.display = 'block';
        }, 500);
    }
    dot4.style.backgroundColor = '#fc902b';
    dot2.style.backgroundColor = '#5a6a7d';
    dot3.style.backgroundColor = '#5a6a7d';
    dot1.style.backgroundColor = '#5a6a7d';
    page = 4;
})

var scream = document.getElementById('scream');
var hmm = document.getElementById('hmm');

scream.addEventListener('mouseover', boop);
hmm.addEventListener('mouseover', boop);

scream.addEventListener('click', ()=> {
    if (muted == 0) {
        var scream_audio = new Audio('audio/scream emote.mp3');
        scream_audio.play();
    }
    scream.style.content = "url('images/emotes/scream.gif')";
    setTimeout(() => {
        scream.style.content = "url('images/emotes/scream pic.png')";
    }, 2000);
})

hmm.addEventListener('click', ()=> {
    if (muted == 0) {
        var hmm_audio = new Audio('audio/hmm emote.mp3');
        hmm_audio.play();
    }
    hmm.style.content = "url('images/emotes/hmm.gif')";
    setTimeout(() => {
        hmm.style.content = "url('images/emotes/hmm pic.png')";
    }, 2100);
})

var cycle = document.getElementById('cycle');
var eq = document.getElementById('eq');
var curr_page = 1;

function first_deck() {
    cycle.addEventListener('mouseover',() => {
        cycle.style.content = "url('images/decks/hog cycle1.png')"
        boop();
    })
    cycle.addEventListener('mouseleave', () => {
        cycle.style.content = "url('images/decks/hog cycle.png')"
    })
    eq.addEventListener('mouseover',() => {
        eq.style.content = "url('images/decks/hog eq1.png')"
        boop();
    })
    eq.addEventListener('mouseleave', () => {
        eq.style.content = "url('images/decks/hog eq.png')"
    })
}

first_deck();

function second_deck() {
    cycle.addEventListener('mouseover',() => {
        cycle.style.content = "url('images/decks/hog giant skele1.png')"
        boop();
    })
    cycle.addEventListener('mouseleave', () => {
        cycle.style.content = "url('images/decks/hog giant skele.png')"
    })
    eq.addEventListener('mouseover',() => {
        eq.style.content = "url('images/decks/hog freeze1.png')"
        boop();
    })
    eq.addEventListener('mouseleave', () => {
        eq.style.content = "url('images/decks/hog freeze.png')"
    })
}

function third_deck() {
    cycle.addEventListener('mouseover',() => {
        cycle.style.content = "url('images/decks/mk hog1.png')"
        boop();
    })
    cycle.addEventListener('mouseleave', () => {
        cycle.style.content = "url('images/decks/mk hog.png')"
    })
}

function rangeSlide(value) {
    var cringe = document.getElementById('cringe');
    if (value == 1) {
        cringe.innerHTML = 'LOW';
        cycle.style.content = "url('images/decks/hog cycle.png')";
        eq.style.content = "url('images/decks/hog eq.png')";
        first_deck();
    } else if (value == 2) {
        cringe.innerHTML = 'MEDIUM'
        cycle.style.content = "url('images/decks/hog giant skele.png')"
        eq.style.content = "url('images/decks/hog freeze.png')"
        second_deck();
    } else {
        cringe.innerHTML = 'HIGH';
        cycle.style.content = "url('images/decks/mk hog.png')";
        third_deck();
    }
}

function naming() {
    if (value == 1) {

    }
}

var dmg = document.getElementById('dmg1');
var dmgtime = document.getElementById('dmgtime1');
var hp = document.getElementById('hp1');

function rangeSlide1(value) {
    
    document.getElementById('lvl').innerHTML = value;
    if (value == 3) {
        dmg.textContent = '150';
        dmgtime.textContent = '93';
        hp.textContent = '800';
    }
    if (value == 4) {
        dmg.textContent = '165';
        dmgtime.textContent = '103';
        hp.textContent = '880';
    }
    if (value == 5) {
        dmg.textContent = '181';
        dmgtime.textContent = '113';
        hp.textContent = '968';
    }
    if (value == 6) {
        dmg.textContent = '199';
        dmgtime.textContent = '124';
        hp.textContent = '1064';
    }
    if (value == 7) {
        dmg.textContent = '219';
        dmgtime.textContent = '136';
        hp.textContent = '1168';
    }
    if (value == 8) {
        dmg.textContent = '240';
        dmgtime.textContent = '150';
        hp.textContent = '1,280';
    }
    if (value == 9) {
        dmg.textContent = '264';
        dmgtime.textContent = '165';
        hp.textContent = '1,408	';
    }
    if (value == 10) {
        dmg.textContent = '289';
        dmgtime.textContent = '180';
        hp.textContent = '1,544';
    }
    if (value == 11) {
        dmg.textContent = '318';
        dmgtime.textContent = '198';
        hp.textContent = '1,696';
    }
    if (value == 12) {
        dmg.textContent = '349';
        dmgtime.textContent = '218';
        hp.textContent = '1,864';
    }
    if (value == 13) {
        dmg.textContent = '240';
        dmgtime.textContent = '384';
        hp.textContent = '2,048';
    }
    if (value == 14) {
        dmg.textContent = '421';
        dmgtime.textContent = '263';
        hp.textContent = '2,248';
    }
}