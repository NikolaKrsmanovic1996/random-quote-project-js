//IMMIDATE INVOKED FUNCTIONS
//LOCAL SCOPE !!


(function (){
    let quotes = [
        { 
            quote:
            "Stop chasing the light that burns you embrace the darkness that forges you !",
            author: "Goddes of night Nyx"
        },
        {
            quote:
            "A certain darkness in needed in order to see the true light",
            author: "Goddes of night Nyx"
        },
        {
            quote:
            "You are never truly alone in the dark",
            author: "Goddess of night Nyx"
        },
        {
            quote:
            "Shadows will welcome me my death goes without apology and i welocome the Nyx to summon me now !",
            
            author: "Nikola Azuma"
        },
        {
            quote: "The price of anything is the amount of life you exchange for it.",
            author: "David Thoreau"
        },
        {
            quote:
              "Life is too short and sweet to be spent by cribbing and complaining about things. Here are some random quotes about the most wonderful gift that we've got",
            author: " Life"
          },
          {
            quote:
              "Humor is richly rewarding to the person who employs it. It has some value in gaining and holding attention. But it has no persuasive value at all",
            author: "John Kenneth Galbraith"
          },
          {
            quote:
              "God save me from my friends. I can protect myself from my enemies.",
            author: "Claude Louis Hector de Villars "
          },

    ];
    let button = document.getElementById('generate-btn');
    button.addEventListener('click',function(){
     let random = Math.floor(Math.random()*quotes.length);
     console.log(random);
     document.getElementById('quote').textContent = quotes[random].quote;
     document.querySelector('.author').textContent = quotes[random].author;
    })
})();