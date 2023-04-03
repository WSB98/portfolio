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
            
            <h2 class="IBM-monospace sectionTitle">Green Valley</h2>
            
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
        
        <img id="gvaGraphic" src="img/diego_mobileConversation.png" class="overlayGraphic">

        <p id="overlayText" class="overlayText">Project DIEGO <code>(Dialect Interpretation Engine Generating Output)</code> is an open source website template that lets you speak directly the the OpenAI APIs.
        </p> 

        <p id="overlayTextContent" class="overlayTextContent">Upon the release of Whisper (AI Audio Transcription) from OpenAI, my childhood dream of having a "Jarvis" from Marvel at my desk became
        possible with a few API calls. So I set out to make a simple web-app that anyone could run on their computer and have their own at-desk AI assistant.
        </p>

        <p id="overlayTextContent2" class="overlayTextContent2">It is important to note that this is not like LLaMa / Alpaca and requires an internet connection due to the reuqests using <code>fetch()</code> methods.
        First, DEIGO sends the audio recording to the Whisper API, then uses the transcription to show the user's message on screen and send a request to the GPT 3.5 Turbo API. The final response from GPT-3.5
        is then used for DIEGO's response.
        </p>

        <p id="overlayTextContent3" class="overlayTextContent3">DIEGO has continued to recieve updates as of the most recent update of this page. Other developers have also been using the code to integrate
         an AI-assistant into their own web-project. The main advantages DIEGO offers as a template is in the integration of <code>localStorage()</code> where your chat history is saved to your
         own device's browser, and the format for those logs is also saved, making it much easier to engineer prompts if the desired AI-assistant is not just ChatGPT.
          You can find the GitHub repo <a target="_blank" href="https://github.com/WSB98/D.I.E.G.O.">here</a>. 
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
            
        <h2 class="IBM-monospace sectionTitle">Summi</h2>
        
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

        <p id="overlayText" class="overlayText">The Galactic Saloon is an NFT-based project that aims to provide holders with a true web3.0 experience. All art and development are done by myself.
        </p> 

        <p id="overlayTextContent" class="overlayTextContent">Throughout my research, the <a target="_blank" href="https://internetcomputer.org">Internet Computer</a> stood out as a unique platform to build on that shed light on the better parts
        of crypto, which is why I chose to build the Galactic Saloon on it. From the "reverse gas model" to competitive pricing for website hosting, everyhting aligned for what I wanted the Galactic Saloon to be.
        </p>

        <p id="overlayTextContent2" class="overlayTextContent2">After almost a year as of writing, the Galactic Saloon has gone from 0 members to over 2,000, with 25 unique holders of the NFT. The current <a target="_blank" href="https://galacticsaloon.com">site</a> that
        NFT holders gain access to currently gives holders access to a version of DIEGO called CowboyGPT that is more focused on coding questions and is soon to push an update that gives users access to prompt engineering tools, all without their own OpenAI account.
        </p>

        <p id="overlayTextContent3" class="overlayTextContent3">The future plans are to make a fully functional DAO where holders have access to:  
        submitting proposals to the NNS on the Internet Computer, voting on proposals using a shared Neuron, NFT minting tool, token swapping tool, discussion board, and 3d replicas of 2d NFTs as avatars in ICP Metaverse gaems.
        However, I feel required to say that this is mostly a fun side project for me, and I have no set in stone plans for it as much as I am learning 
        more about blockchain technology by working on it. 

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