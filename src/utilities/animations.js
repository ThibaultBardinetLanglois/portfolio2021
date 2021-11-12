
export const animBurgerMenu = () => {
    const navigation = document.querySelector('.navigation');
    const burgerMenu = document.querySelector('.burger-menu');
    const topLine = document.querySelector('.burger-menu .top-line');
    const centerLine = document.querySelector('.burger-menu .center-line');
    const bottomLine = document.querySelector('.burger-menu .bottom-line');
    
    const navLinks = document.querySelectorAll('.navigation ul a');
    navLinks.forEach(link => {
        link.addEventListener('click', removeBurgerClass());
    })

    function removeBurgerClass() {
        navigation.classList.remove("change");
        topLine.classList.remove("rotate1");
        centerLine.classList.remove('disapear');
        bottomLine.classList.remove('rotate2');
        burgerMenu.classList.remove("moveDown");
    }

    function navigationAppear() {
        if(navigation.classList.contains("change")) {
            removeBurgerClass();
        } else {
            
            navigation.classList.add('change');
            topLine.classList.add("rotate1");
            centerLine.classList.add('disapear');
            bottomLine.classList.add('rotate2');
            burgerMenu.classList.add("moveDown");
            
        } 
    }

    burgerMenu.addEventListener('click', navigationAppear);

    return () => {
        document.removeEventListener('click', navigationAppear);
    } 
}


export const animShapes = () => {
    const coloredShapes = document.querySelectorAll(".colored-shape");

    function shortShapeAnimation() {
        let randomShape = coloredShapes[Math.floor(Math.random() * coloredShapes.length)];
        randomShape.style.animation = "none";
        randomShape.style.animation = `blast 1.2s ease-in`;  
    }

    setTimeout(shortShapeAnimation, 2500);


    function longShapeAnimation() {
        setInterval(() => {
            let randomShape = coloredShapes[Math.floor(Math.random() * coloredShapes.length)];
            randomShape.style.animation = "none";
            randomShape.style.animation = `gelatine 25s ease infinite alternate`;
        }, 2000);
    }

    setTimeout(longShapeAnimation, 5000);
}


/*color letters variable*/

export const animColoredLetters = () => {

    const redLetter = document.querySelector('#letter-red path');
    console.log("Red letter path length => ", redLetter); 

    const yellowLetter = document.querySelector('#letter-yellow path');
    console.log("Yellow letter path length => ", yellowLetter); 
    const blueLetter = document.querySelector('#letter-blue path');
    console.log("blue letter path length => ", blueLetter); 

    const greenLetter = document.querySelector('#letter-green path');
    console.log("green letter path length => ", greenLetter);  

   function randomLetterAnimation() {
        const coloredLetters = document.querySelectorAll(".colored-letter path");
        let lettersAnimations = ["gelatine", "blast", "hithere", "swing", "shake", "bounce", "wobble", "jumpAndSqueeze"];

        let randomLetter = coloredLetters[Math.floor(Math.random() * coloredLetters.length)];
        let randomAnimation = lettersAnimations[Math.floor(Math.random() * lettersAnimations.length)];
        return {randomLetter, randomAnimation}; 
    }

    function coloredLetterAnimation() {
        setInterval(() => {
            let letterAnimation = randomLetterAnimation();
            letterAnimation.randomLetter.style.animation = "none";
            letterAnimation.randomLetter.style.animation = `${letterAnimation.randomAnimation} 1s ease-in backwards`;
        }, 10000);  
    }

    setTimeout(coloredLetterAnimation, 5000);
}


export const animFirstRow = () => {
    /*first-row letters variable*/
    const firstRowLetters = document.querySelectorAll(".first-row-wrapper #letter");
    const firstRowLettersPath = document.querySelectorAll('.first-row-wrapper #letter path');

    /*first row letters handle*/
    for(let i = 0; i < firstRowLettersPath.length; i++) {
        /* console.log(firstRowLettersPath[i].getTotalLength()); */
        firstRowLettersPath[i].style.animation = `stroke-anim 1s ease forwards ${0.4 + 0.3 * i}s`;
        firstRowLetters[i].style.animation = `fill 0.6s ease forwards ${1.7 + 0.125 * i}s`; 
    } 

}


export const animSecondRow = () => {
    /*second-row letters variable*/
    const secondRowLetters1 = document.querySelectorAll(".second-row-wrapper .first-part #letter");
    const secondRowLettersPath1 = document.querySelectorAll('.second-row-wrapper .first-part #letter path');

    const secondRowLetters2 = document.querySelectorAll(".second-row-wrapper .second-part #letter");
    const secondRowLettersPath2 = document.querySelectorAll('.second-row-wrapper .second-part #letter path');

    /*second-row letters handle*/
    for(let i = 0; i < secondRowLettersPath1.length; i++) {
        /* console.log(secondRowLettersPath1[i].getTotalLength()); */
        secondRowLettersPath1[i].style.animation = `stroke-anim 0.5s ease forwards ${2.8 + 0.2 * i}s`;
        secondRowLetters1[i].style.animation = `fill 0.6s ease forwards ${3.4 + 0.1 * i}s`; 
    }  

    for(let i = 0; i < secondRowLettersPath2.length; i++) {
        /* console.log(secondRowLettersPath2[i].getTotalLength()); */
        secondRowLettersPath2[i].style.animation = `stroke-anim 0.5s ease forwards ${4 + 0.2 * i}s`;
        secondRowLetters2[i].style.animation = `fill 0.6s ease forwards ${5.6 + 0.1 * i}s`;
    } 
}


export const animThirdRow = () => {
    /*third-row letters variable*/
    const thirdRowLetters1 = document.querySelectorAll(".third-row-wrapper .first-part #letter");
    const thirdRowLettersPath1 = document.querySelectorAll('.third-row-wrapper .first-part #letter path');

    const thirdRowLetters2 = document.querySelectorAll(".third-row-wrapper .second-part #letter");
    const thirdRowLettersPath2 = document.querySelectorAll('.third-row-wrapper .second-part #letter path'); 

    /*third-row letters handle*/
    for(let i = 0; i < thirdRowLettersPath1.length; i++) {
        /* console.log(thirdRowLettersPath1[i].getTotalLength()); */
        thirdRowLettersPath1[i].style.animation = `stroke-anim 0.6s ease forwards ${7.2 + 0.2 * i}s`;
        thirdRowLetters1[i].style.animation = `fill 0.6s ease forwards ${8.7 + 0.1 * i}s`;
    } 
    
    for(let i = 0; i < thirdRowLettersPath2.length; i++) {
        /* console.log(thirdRowLettersPath2[i].getTotalLength()); */
        thirdRowLettersPath2[i].style.animation = `stroke-anim 0.3s ease forwards ${7.6 + 0.1 * i}s`;
        thirdRowLetters2[i].style.animation = `fill 0.6s ease forwards ${9 + 0.1 * i}s`;
    }  
}


export const animBlackLetters = () => {
    let blackLetters = document.querySelectorAll("#letter");

    function blackLettersAnimation() {
        blackLetters.forEach(letter => {
            
            letter.addEventListener("mouseover", () => {
                letter.style.animation ="none";
                letter.style.animation = `gelatine  01s ease-in forwards`;
            });
            letter.addEventListener("animationend", () => {
                letter.style.animation = "none";
            })
        })
    }

setTimeout(blackLettersAnimation, 11500); 

}


export const animTopArrow = () => {
    /*ARROW SCROLL DOWN ANIM*/

    const topArrow = document.querySelector("#scroll-top");

    function shakeTopArrow() {
        setInterval(() => {
            topArrow.style.animation = "none";
            topArrow.style.animation = "shakeToTop 1.5s ease forwards";
            topArrow.addEventListener("animationend", () => {
                topArrow.style.animation = "none";
            });
        }, 10000);
    }

    setTimeout(shakeTopArrow, 7000); 

}

export const animBottomArrow = () => {

    const downArrow = document.querySelector("#scroll-bottom");

    function shakeDownArrow() {
        setInterval(() => {
            downArrow.style.animation = "none";
            downArrow.style.animation = "shakeToBottom 1.5s ease forwards";
            downArrow.addEventListener("animationend", () => {
                downArrow.style.animation = "none";
            });

        }, 10000);
    }

    setTimeout(shakeDownArrow, 7000);
}

export const animSocialNetworks = () => {

    /*SOCIAL ICONS ANIM*/
    
    const socialNetworksIcons = document.querySelectorAll(".social-networks-block a i");
    function bounceSocialIcons() {
        setInterval(() => {
            let randomIcon = socialNetworksIcons[Math.floor(Math.random() * socialNetworksIcons.length)];
            randomIcon.style.animation = "none";
            randomIcon.style.animation = "bounce 1s ease backwards";
            randomIcon.addEventListener("animationend", () => {
                randomIcon.style.animation = "none";
            })
        }, 15000);
    }
    
    setTimeout(bounceSocialIcons, 6000);

    function animHoverIcons() {
        socialNetworksIcons.forEach(icon => {
            
            icon.addEventListener("mouseover", () => {
                icon.style.animation ="none";
                icon.style.animation = `bounce  0.8s ease-in forwards`;
            });
            icon.addEventListener("animationend", () => {
                icon.style.animation = "none";
            })
        })
    }

    setTimeout(animHoverIcons, 11500); 
    
}
