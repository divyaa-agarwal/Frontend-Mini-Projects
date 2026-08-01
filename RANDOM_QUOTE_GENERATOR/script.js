let library=[
    {
        quote:"\❝ Put your ear down close to your soul and listen hard.\❞",
        author:"-Anne Sexton"
    },
    {
        quote:"\❝ Too much sanity may be madness—and maddest of all: to see life as it is, and not as it should be!.\❞",
        author:"-Miguel de Cervantes"
    },
    {
        quote:"\❝ The scariest moment is always just before you start.\❞",
        author:"-Stephen King"
    },
    {
        quote:"\❝ So we beat on, boats against the current, borne back ceaselessly into the past.\❞",
        author:"-Scott Fitzgerald"
    },
    {
        quote:"\❝ You cannot control what happens to you, but you can control your attitude toward what happens to you.\❞",
        author:"-Brian tracy"
    },
    {
        quote:"\❝Small steps still move you forward.\❞",
        author: "-Elena Hart"
    },
    {
        quote:"\❝Start before you feel ready.\❞",
        author: "-Noah Blake"
    },
    {
        quote:"\❝Your effort matters more than perfection.\❞",
        author: "-Mira Bennett"
    },
    {
        quote:"\❝Progress begins with a single decision.\❞",
        author: "-Adrian Cole"
    },
    {
        quote:"\❝Keep going; your future self will thank you.\❞",
        author: "-Lena Brooks"
    },
    {
        quote:"\❝Difficult roads can lead to meaningful places.\❞",
        author: "-Ethan Reed"
    },
    {
        quote:"\❝Believe in the work you are willing to do.\❞",
        author: "-Sophia Lane"
    },
    {
        quote:"\❝A slow journey is still a journey.\❞",
        author: "-Daniel Hayes"
    },
    {
        quote:"\❝You grow every time you choose to continue.\❞",
        author: "-Amelia Rose"
    },
    {
        quote:"\❝Let your actions speak louder than your doubts.\❞",
        author: "-Oliver Grant"
    },
    {
        quote:"\❝A fresh perspective can turn an old problem into a new possibility.\❞",
        author: "-Aria Whitmore"
    },
    {
        quote:"\❝You do not need every answer to take the next step.\❞",
        author: "-Elliot Hayes"
    },
    {
        quote:"\❝Some chapters become meaningful only after you have turned the page.\❞",
        author: "-Violet Harper"
    },
    {
        quote:"\❝Protect the habits that quietly build the life you want.\❞",
        author: "-Samuel Rowan"
    },
    {
        quote:"\❝Wonder begins when you allow yourself to ask why.\❞",
        author: "-Lydia Sterling"
    },
    {
        quote:"\❝The direction you choose matters more than the speed you travel.\❞",
        author: "-Oscar Wells"
    },
    {
        quote:"\❝A thoughtful choice today can save you from a difficult choice tomorrow.\❞",
        author: "-Maeve Collins"
    },
    {
        quote:"\❝Not every delay is a denial; sometimes it is preparation.\❞",
        author: "-Henry Lawson"
    },
    {
        quote:"\❝Leave space in your plans for something unexpected and beautiful.\❞",
        author: "-Celeste Quinn"
    },
    {
        quote:"\❝The person you are becoming deserves patience from the person you are today.\❞",
        author: "-Arthur Ellis"
    },
    {
        quote:"\❝Sometimes clarity arrives after you stop forcing an answer.\❞",
        author: "-Clara Monroe"
    },
    {
        quote:"\❝The things worth building rarely happen overnight.\❞",
        author: "-Julian West"
    },
    {
        quote:"\❝A quiet mind can hear possibilities that noise hides.\❞",
        author: "-Nora Ellis"
    },
    {
        quote:"\❝You can outgrow a dream without outgrowing yourself.\❞",
        author: "-Lucas Avery"
    },
    {
        quote:"\❝Every unanswered question can become an invitation to learn.\❞",
        author: "-Iris Morgan"
    },
    {
        quote:"\❝Do not measure your beginning against someone else's middle.\❞",
        author: "-Theo Carter"
    },
    {
        quote:"\❝Sometimes changing your approach is better than changing your goal.\❞",
        author: "-Sienna Clarke"
    },
    {
        quote:"\❝The smallest act of courage can open an unexpected door.\❞",
        author: "-Marcus Vale"
    },
        {
        quote:"\❝What feels ordinary today may become a memory you treasure later.\❞",
        author: "-Eva Sinclair"
    },
    {
        quote:"\❝You become stronger each time you choose understanding over doubt.\❞",
        author: "-Leo Bennett"
    },
    {
        quote:"\❝A little kindness can change the atmosphere of an entire day.\❞",
        author: "-Isla Bennett"
    },
    {
        quote:"\❝Your attention grows whatever you choose to give it to.\❞",
        author: "-Rowan Pierce"
    },
    {
        quote:"\❝Sometimes the bravest choice is to give yourself another chance.\❞",
        author: "-Amara Fields"
    },
    {
        quote:"\❝A dream becomes clearer when you begin giving it your time.\❞",
        author: "-Finn Mercer"
    },
    {
        quote:"\❝You can carry the lesson without carrying the burden.\❞",
        author: "-Elise Warren"
    },
    {
        quote:"\❝The right question can be more valuable than a quick answer.\❞",
        author: "-Jonah Miles"
    },
    {
        quote:"\❝There is beauty in becoming someone you once needed.\❞",
        author: "-Sofia Maren"
    },
    {
        quote:"\❝Your perspective can turn a closed door into a different direction.\❞",
        author: "-Caleb Stone"
    },
    {
        quote:"\❝Make choices that your quieter self can be proud of.\❞",
        author: "-Layla Rivers"
    },
    {
        quote:"\❝A peaceful moment can give you the strength to face a busy one.\❞",
        author: "-Elias Ford"
    },
    {
        quote:"\❝You are allowed to take a different route to the same destination.\❞",
        author: "-Maya Sterling"
    },
    {
        quote:"\❝The things you practice in private eventually shape what you show the world.\❞",
        author: "-Nathan Wells"
    },
    {
        quote:"\❝Some of the best ideas arrive when you stop trying to rush them.\❞",
        author: "-Ruby Dawson"
    },
    {
        quote:"\❝Your curiosity can take you places that certainty never could.\❞",
        author: "-Theo Morgan"
    },
    {
        quote:"\❝A better tomorrow often begins with one honest choice today.\❞",
        author: "-Freya Collins"
    },
];
let NewQuote=document.querySelector(".new-quote");
let quote=document.querySelector("p");
let author=document.querySelector("span");
let copy_btn=document.querySelector(".copy");

NewQuote.addEventListener('click' ,()=>{
    let random_index=Math.floor(Math.random()*library.length);    
    quote.innerHTML=library[random_index].quote;
    author.innerHTML=library[random_index].author;
})

copy_btn.addEventListener('click', ()=>{
    navigator.clipboard.writeText(quote.innerHTML);
})
