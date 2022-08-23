

let SugarLogs = document.getElementById("Sugar");
SugarLogs.addEventListener("click", Sugarpop);

function Sugarpop() {
    let sugarpopOut = document.createElement("p")
    sugarpopOut.innerText = "Application base: MVC-->    There are roughly 26 million type 2 diabetics in the USA. A lot of them depend on supplies from the insurance that have strict guidelines for the diabetics. For the patient to get supplies they need to show sugar logs, sometimes for 30 days, other times for longer. I have found that some insurances will deny logs if they are hand written. While there are apps that let diabetics record their numbers, usually they want you to input other information which makes recording numbers tedious and frustrating for older diabatics. PROPOSAL:  Create an app/website that lets user log in, enter what their ideal range would be and then just be able to enter their numbers. If it goes above the number, then have it highlighted in red, below in yelow, and in range be green. Then have a feature that will allow the user to share the information- either creating a pdf, sharing it via email, but make it accessible and easy to read. ";

    SugarLogs.append(sugarpopOut);


}


let BOGA = document.getElementById("Boga");
BOGA.addEventListener("click", bogapop)

function bogapop() {
    let bogaPopOut = document.createElement("p")
    bogaPopOut.innerText = "Application base: MVC--> My gaming group meets twice a month and records who attends and what games are played, taught and won. Why do we do this? Well once a year we hots an anniversary party and give prizes for the top winners, top losers, most taught games, etc. Currently we are doing all of this via paper, then taking the data and imputing it into an excel sheet and running the stats that way. We have talked about for a while in creating a system where people can input the information via phone or tablet and the data is saved for us (the board) to have easily available. PROPOSAL: Make my life easier! Create a game tracking system for us. Things to consider, we would only want it to be accessed at the gaming location during gaming times. Log in would be for the board members to see what games are being played and to make sure all is going well. Maybe give top 5 winners, losers and games taught tab for the user to see if their name is on the list. ";
    BOGA.append(bogaPopOut)
}


let Chat = document.getElementById("Chatbot");
Chat.addEventListener("click", Chatpop)

function Chatpop() {
    let chatPopOut = document.createElement("p");
    chatPopOut.innerText = "Application base: MVC--> When you talk to someone who is not in the best mental state, a lot of them say, 'I just wish I had someone to talk to'. I have often heard that it is easier to talk to a screen then to a real person, or a person you know. PROPOSAL: create a chatbot that will get to know the person (ask hobbies, say something silly, maybe even play a quick game) and give the user space to calm their thoughts. maybe have an option, would you like to talk to someone live (have it call suicide helpline/ or send a text)";
    Chat.append(chatPopOut);
}


let Weaving = document.getElementById("Weaving");
Weaving.addEventListener("click", Weavingpop)

function Weavingpop() {
    let weavingPopOut = document.createElement("p")
    weavingPopOut.innerText = "Application base: MVC--> As a weaver, one thing that all weavers ask, do these colors go together? Or I have an idea for a project but I have something o0n my loom!! So either they write it on paper, weave small samples or use excel to check out color combos. PROPOSAL: Create an app where weavers can log in, use a grid to try different color combos, save the file for later. We can take it a step further, and target only one type of looms (Rigid Heddle Looms), put the different widths of the looms and make the grid show up for that width.)";
    Weaving.append(weavingPopOut)

}


