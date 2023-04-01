/* open the overlay for the clicked project */


var projects = document.querySelectorAll('.carousel-slide');
var overlay = document.getElementById('overlay');
var carousel = document.querySelector('.carousel-container')
var nextButton = document.querySelector('.carousel-next')
var prevButton = document.querySelector('.carousel-prev')
var spans = document.querySelectorAll('.showTitle')
var body = document.body;
var opened = false;

carouselContainer.addEventListener('click', async(e) => {
    var clickedID = e.target.id;

    /*

    if(clickedID === '1'){
        console.log('MSL')
        overlay.innerHTML = `<a id="close" onclick="closeOverlay()"><svg class='closeIcon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z"/></svg></a>
                            <h3 class="IBM-monospace sectionTitle">My Sales League</h3>
                            `
    }
    if(clickedID === '2'){
        console.log('GVA')
        overlay.innerHTML = `<a id="close" onclick="closeOverlay()"><svg class='closeIcon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z"/></svg></a>
                            <h3 class="IBM-monospace sectionTitle">Green Valley Web System</h3>`
    }
    if(clickedID === '3'){
        console.log('DIEGO')
        overlay.innerHTML = `<a id="close" onclick="closeOverlay()"><svg class='closeIcon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z"/></svg></a>
                            <h3 class="IBM-monospace sectionTitle">Project D.I.E.G.O.</h3>`
    }
    if(clickedID === '4'){
        console.log('summi')
        overlay.innerHTML = `<a id="close" onclick="closeOverlay()"><svg class='closeIcon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z"/></svg></a>
                            <h3 class="IBM-monospace sectionTitle">Summi: Text Summarizer</h3>`
    }
    if(clickedID === '5'){
        console.log('GS')
        overlay.innerHTML = `<a id="close" onclick="closeOverlay()"><svg class='closeIcon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z"/></svg></a>
                            <h3 class="IBM-monospace sectionTitle">Galactic Saloon</h3>`
    } */
    
    if(!e.target.contains(nextButton) && !e.target.contains(prevButton) && opened === false){
        overlay.style.opacity = '100'
        overlay.style.transform = 'translate(0px,125px)'
        opened = true;
    }
    
});


async function closeOverlay(){
    overlay.style.transform = 'translate(0px,-1000px)';
    opened = false
}

body.addEventListener('click', async(e) => {
    if(opened === true && (e.target.id === 'psuedoBody' || !overlay.innerHTML.contains(e.target))){
        spans.forEach(async o => {
            if(e.target.id === '1'){
                notInCarousel = false;
            }
            else{
                notInCarousel = true;
            }
        })
        if(notInCarousel){
            closeOverlay()
        }
        console.log('clicked')
    }
});