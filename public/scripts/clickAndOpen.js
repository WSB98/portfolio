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

    

    if(clickedID === '1'){
        console.log('MSL')
        overlay.innerHTML = `
            <a id="close" onclick="closeOverlay()"><svg class='closeIcon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License 
            - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 
            175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z"/></svg></a>
            
            <h2 class="IBM-monospace sectionTitle">My Sales League</h2>
            
            <img id="mslGraphic1" src="img/mslShopDesktop (2).png" class="overlayGraphic">

            <p id="overlayText" class="overlayText">My Sales League (MSL) is a Gamification platform created for the automotive industry with the primary goal of making work a more engaging, and fun, experience.
            </p> 

            <p id="overlayTextContent" class="overlayTextContent">While there is no single role I have in this small startup, I consider the frontend development and graphic design my main contribution.
                The system boasts a bevy of features, such as a shop for users to redeem in-game avatars, customizable contests with automated scoring, and employee engagement tools via rewards systems.
            </p>

            <p id="overlayTextContent2" class="overlayTextContent2">We achieved this interface and game-like features by utilizing an iterative web development workflow that begins and ends with UX. 
                Accessibility and simplicity are a primary focus of MSL and the interface is the product of many customer dicovery phases and QA tested prototypes.
            </p>

            <p id="overlayTextContent3" class="overlayTextContent3">As of the latest update of this page, MSL is still in a development and testing phase. If this product is of itnerest to you, please
            reach out by going to the Contact section of this site, found under Resources.
            </p>
            
            
            <img id="mslGraphic2" src="img/mslLandingPageMobile.png" class="overlayGraphic2">
            
            <img id="mslGraphic3" src="img/mslDashDesk.png" class="overlayGraphic3">
                            `
    }
    if(clickedID === '2'){
        console.log('GVA')
        overlay.innerHTML = `
            <a id="close" onclick="closeOverlay()"><svg class='closeIcon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License -
             https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 
             175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z"/></svg></a>
            
            <h2 class="IBM-monospace sectionTitle">Green Valley Web System</h2>
            
            <img id="gvaGraphic" src="img/gvaDesktopGraphic.png" class="overlayGraphic">

            <p id="overlayText" class="overlayText">The Green Valley Web System is an end-to-end custom CRM specifically created for a business in Harrisonburg, VA.
            </p> 

            <p id="overlayTextContent" class="overlayTextContent">While in my final year of college, I was part of a team that won a "Captsone Competition," in which a panel of judges, and the potential users of
            the system, held a tournament-style compeititon to select the best web system. Upon winning, the clients offered the team an opportunity to implement the system. I was the only member who decided to move
            forward with the opportunity.
            </p>

            <p id="overlayTextContent2" class="overlayTextContent2">The final web system uses a collection of AWS services to achieve the functionality requested by the clients. In short the site uses Elastic Beanstalk
            for hosting, S3 for file storage, RDS for the SQL database, and CloudWatch for management and monitoring.
            </p>

            <p id="overlayTextContent3" class="overlayTextContent3">Green Valley has continued using the system and has servered thousands of customers through it, while reducing their usage of paper by over 80%.
            I continue to work with Green Valley every few months to apply new features and keep their AWS services up to date. 
            </p>
            
            
            <img id="gvaGraphic2" src="img/gvaMobileLoginGraphic.png" class="overlayGraphic2">
            
            <img id="gvaGraphic3" src="img/gvaDesktopGraphic.png" class="overlayGraphic3">
            `
    }
    if(clickedID === '3'){
        console.log('DIEGO')
        overlay.innerHTML = `
        <a id="close" onclick="closeOverlay()"><svg class='closeIcon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - 
        https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175
         175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z"/></svg></a>
            
        <h2 class="IBM-monospace sectionTitle">Project D.I.E.G.O.</h2>
        
        <img id="gvaGraphic" src="img/diegoMobileGraphic.png" class="overlayGraphic">

        <p id="overlayText" class="overlayText">The Green Valley Web System is an end-to-end custom CRM specifically created for a business in Harrisonburg, VA.
        </p> 

        <p id="overlayTextContent" class="overlayTextContent">While in my final year of college, I was part of a team that won a "Captsone Competition," in which a panel of judges, and the potential users of
        the system, held a tournament-style compeititon to select the best web system. Upon winning, the clients offered the team an opportunity to implement the system. I was the only member who decided to move
        forward with the opportunity.
        </p>

        <p id="overlayTextContent2" class="overlayTextContent2">The final web system uses a collection of AWS services to achieve the functionality requested by the clients. In short the site uses Elastic Beanstalk
        for hosting, S3 for file storage, RDS for the SQL database, and CloudWatch for management and monitoring.
        </p>

        <p id="overlayTextContent3" class="overlayTextContent3">Green Valley has continued using the system and has servered thousands of customers through it, while reducing their usage of paper by over 80%.
        I continue to work with Green Valley every few months to apply new features and keep their AWS services up to date. 
        </p>
        
        
        <img id="gvaGraphic2" src="img/diegoBlankMobile.png" class="overlayGraphic2">
        
        <img id="gvaGraphic3" src="img/diegoConversationDesktop.png" class="overlayGraphic3">
        `
    }
    if(clickedID === '4'){
        console.log('summi')
        overlay.innerHTML = `
        <a id="close" onclick="closeOverlay()"><svg class='closeIcon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license 
        (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6
         9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z"/></svg></a>
            
        <h2 class="IBM-monospace sectionTitle">Summi: Text Summarizer</h2>
        
        <img id="gvaGraphic" src="img/summiDesktop.png" class="overlayGraphic">

        <p id="overlayText" class="overlayText">The Green Valley Web System is an end-to-end custom CRM specifically created for a business in Harrisonburg, VA.
        </p> 

        <p id="overlayTextContent" class="overlayTextContent">While in my final year of college, I was part of a team that won a "Captsone Competition," in which a panel of judges, and the potential users of
        the system, held a tournament-style compeititon to select the best web system. Upon winning, the clients offered the team an opportunity to implement the system. I was the only member who decided to move
        forward with the opportunity.
        </p>

        <p id="overlayTextContent2" class="overlayTextContent2">The final web system uses a collection of AWS services to achieve the functionality requested by the clients. In short the site uses Elastic Beanstalk
        for hosting, S3 for file storage, RDS for the SQL database, and CloudWatch for management and monitoring.
        </p>

        <p id="overlayTextContent3" class="overlayTextContent3">Green Valley has continued using the system and has servered thousands of customers through it, while reducing their usage of paper by over 80%.
        I continue to work with Green Valley every few months to apply new features and keep their AWS services up to date. 
        </p>
        
        
        <img id="gvaGraphic2" src="img/gvaMobileLoginGraphic.png" class="overlayGraphic2">
        
        <img id="gvaGraphic3" src="img/gvaDesktopGraphic.png" class="overlayGraphic3">
        `
    }
    if(clickedID === '5'){
        console.log('GS')
        overlay.innerHTML = `
        <a id="close" onclick="closeOverlay()"><svg class='closeIcon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - 
        https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c-9.4
         9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z"/></svg></a>
            
        <h2 class="IBM-monospace sectionTitle">Galactic Saloon</h2>
        
        <img id="gvaGraphic" src="img/GSdashboardMobile.png" class="overlayGraphic">

        <p id="overlayText" class="overlayText">The Green Valley Web System is an end-to-end custom CRM specifically created for a business in Harrisonburg, VA.
        </p> 

        <p id="overlayTextContent" class="overlayTextContent">While in my final year of college, I was part of a team that won a "Captsone Competition," in which a panel of judges, and the potential users of
        the system, held a tournament-style compeititon to select the best web system. Upon winning, the clients offered the team an opportunity to implement the system. I was the only member who decided to move
        forward with the opportunity.
        </p>

        <p id="overlayTextContent2" class="overlayTextContent2">The final web system uses a collection of AWS services to achieve the functionality requested by the clients. In short the site uses Elastic Beanstalk
        for hosting, S3 for file storage, RDS for the SQL database, and CloudWatch for management and monitoring.
        </p>

        <p id="overlayTextContent3" class="overlayTextContent3">Green Valley has continued using the system and has servered thousands of customers through it, while reducing their usage of paper by over 80%.
        I continue to work with Green Valley every few months to apply new features and keep their AWS services up to date. 
        </p>
        
        
        <img id="gvaGraphic2" src="img/GSCollectionMobile.png" class="overlayGraphic2">
        
        <img id="gvaGraphic3" src="img/GS_swap_desktop.png" class="overlayGraphic3">
        `
    }
    
    if(!e.target.contains(nextButton) && !e.target.contains(prevButton) && opened === false){
        overlay.style.opacity = '100'
        overlay.style.transform = 'translate(0px,50px)'
        opened = true;
    }
    
});


async function closeOverlay(){
    overlay.style.transform = 'translate(0px,-1000px)';
    opened = false
}

body.addEventListener('click', async(e) => {
    if(opened === true && e.target.id === 'psuedoBody'){
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