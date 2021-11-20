/*BURGER MENU*/
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

/*ANIM SHAPES*/

export const animBlastShape = () => {
    const coloredShapes = document.querySelectorAll(".colored-shape");

    function shortShapeAnimation() {
        let randomShape = coloredShapes[Math.floor(Math.random() * coloredShapes.length)];
        randomShape.style.animation = "none";
        randomShape.style.animation = `blast 1.2s ease-in`;
    }

    return setTimeout(shortShapeAnimation, 2500);
}

export const animGelatineShapes = () => {
    const coloredShapes = document.querySelectorAll(".colored-shape");

    function longShapeAnimation() {
        let randomShape = coloredShapes[Math.floor(Math.random() * coloredShapes.length)];
        randomShape.style.animation = "none";
        randomShape.style.animation = `gelatine 25s ease infinite alternate`;
    }

    return setTimeout(longShapeAnimation, 5000);

}


/*ANIM COLORED LETTERS*/

export const animColoredLetters = () => {

   function randomLetterAnimation() {
        const coloredLetters = document.querySelectorAll(".colored-letter");
        let lettersAnimations = ["gelatine", "blast", "hithere", "swing", "shake", "bounce", "wobble", "jumpAndSqueeze"];

        let randomLetter = coloredLetters[Math.floor(Math.random() * coloredLetters.length)];
        let randomAnimation = lettersAnimations[Math.floor(Math.random() * lettersAnimations.length)];
        return {randomLetter, randomAnimation}; 
    }

    function animRandomLetterAnimation() {
        let letterAnimation = randomLetterAnimation();
        letterAnimation.randomLetter.style.animation = "none";
        letterAnimation.randomLetter.style.animation = `${letterAnimation.randomAnimation} 1s ease-in backwards`;
    }

    /* let animation = () => {
        setInterval(animRandomLetterAnimation, 8000);
    }  */
    
    setTimeout(animRandomLetterAnimation, 1000);

    /* return animRandomLetterAnimation; */
}


/*ANIM BLACK LETTERS ON HOVER IN HOME TITLE*/
export const animBlackLetters = () => {
    let blackLetters = document.querySelectorAll("#letter");
    const colors = ["#EF4852", "#5CC1A5", "#FFC906"]; 

    function blackLettersAnimation() {
        blackLetters.forEach(letter => {
            let originalColor = letter.style.color; 
            letter.addEventListener("mouseover", () => {
                let randomColor = colors[Math.floor(Math.random() * colors.length)];
                letter.style.color = randomColor; 
                letter.style.animation ="none";
                letter.style.animation = `gelatine  0.8s ease-in forwards`;
            });
            letter.addEventListener("mouseleave", () => {
                setTimeout(() => {
                    letter.style.color = originalColor;
                }, 2000)
                
            }); 
            letter.addEventListener("animationend", () => {
                letter.style.animation = "none";
            })
        })
    }

setTimeout(blackLettersAnimation, 1000); 

}

/*ANIM ARROWS FOR THE SCROLL BUTTON*/
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

    setTimeout(shakeTopArrow, 5000); 

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

    setTimeout(shakeDownArrow, 5000);
}

/*ANIM SOCIAL NETWORKS*/
export const animSocialNetworks = () => {
    
    const socialNetworksIcons = document.querySelectorAll(".social-networks-block a i");
    function bounceSocialIcons() {
            let randomIcon = socialNetworksIcons[Math.floor(Math.random() * socialNetworksIcons.length)];
            randomIcon.style.animation = "none";
            randomIcon.style.animation = "bounce 1s ease backwards";
            randomIcon.addEventListener("animationend", () => {
                randomIcon.style.animation = "none";
            });
    };
    
    return setTimeout(bounceSocialIcons, 6000);
    
};

export function animHoverIcons() {
    const socialNetworksIcons = document.querySelectorAll(".social-networks-block a i");
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

export const animHomeTitle = () => {
    let animatedText = document.querySelectorAll(".home-title span");

    animatedText.forEach(letter => {
        letter.id = "letter";
     }); 

    let index = 0;
    function writeChar() {
        const span = animatedText[index];
        span.classList.add("appear");
        index++;
        if(index === animatedText.length) {
            clearInterval(writeCharInterval);
        }

    }
    
    let writeCharInterval = setInterval(writeChar, 150);
    animBlackLetters();
}

export const animOthersTitle = () => {
    let animatedText = document.querySelectorAll(".colored-title span");

     animatedText.forEach(letter => {
        letter.id = "letter"
     }); 

    let index = 0;
    function writeChar() {
        const span = animatedText[index];
        
        span.classList.add("appear");
        index++;
        if(index === animatedText.length) {
            clearInterval(writeCharInterval);
        }

    }
    let writeCharInterval = setInterval(writeChar, 150);
    animBlackLetters();
}

/*ANIM PROJECTS APPEAR*/

export const rotateProjectGallery = () => {
    let galleryContainer = document.querySelector('.projects-container');
        let figures = document.querySelectorAll('.projects-container figure');
        figures.forEach((figure, index) => {
            figure.addEventListener("click", () => {
                galleryContainer.style.transform = `rotateX(-15deg) rotateY(-${index * 60}deg)`;
            })
            
        })
}

export const projectsListAppear = () => {
    const mobileProjects = document.querySelectorAll(".mobile-project-container");
    mobileProjects.forEach((project, index) => {
        project.style.animation = `appear 1s ease ${0.2 * index}s forwards`;
    })
}

/*Color project-details background*/

export const projectDetailsBackground = () => {
    const colors = ["rgba(239, 72, 82, 0.93)", "rgba(92, 193, 164, 0.93)"];
    const projectDetails = document.querySelector(".project-details");
    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    projectDetails.style.background = randomColor; 
}
