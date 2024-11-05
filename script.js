// State Variables can be declared outside of the onReady
// Feel free to make this to what you want!
// Example:
// let fungusHP = 100;
    
    // Make sure you check the index.html file! 
    // There are lots of buttons and things ready for you to hook into here!
    
    
    // 🧠 Remember
    // - Handle events that ->
    // - Updates state which is ->
    // - Rendered to the DOM



    //My To-Do List:
        //Attack Buttons Need To:
            //Lose HP for the fungus.
            //Lose AP for me
                //Make sure these numbers can't become negative (0 is the lowest they can go).
        //DOM Needs To:
            //Update text above the attack buttons
            //Update the text above the fungus
            //If the fungus dies, have it switch from CSS class "walk" to CSS class "dead"
            //If I run out of AP, have the fungus css class swith from "walk" to "jump"
            //When AP reached 0, disable all the attack buttons

    //My Initial Notes:
        //My first thought is to make a function for each attack buttons
            //Each button will have elements as follows:
                //They will make the AP go down the proper amount.
                //They will have the HP go down the proper amount.
                //They will trigger the proper animation.
        //I think I also need a function that will be called within each of those functions to notify the trigger if either I or the fungus reach 0
            //Something like an if/else statement to trigger when the appropriate bar is at 0 to make the right animation happen, else render the button as usual?

    let fungusHP = 100
    let heroAP = 100
    let minHP = 0
    let minAP = 0

    function updateUI() {
        // Update AP and HP text
        document.querySelector('.ap-text').textContent = `${heroAP} AP`;
        document.querySelector('.hp-text').textContent = `${fungusHP} HP`;
    
        // Update progress bars
        document.getElementById('ap-meter').value = heroAP;
        document.getElementById('hp-meter').value = fungusHP;
    }

    function arcaneSceptor() {
        //testing that the function is called when button is clicked:
        console.log( 'Hero attacked using Arcane Sceptor!')
        
        //Updating the text and the progress bars:
        heroAP = Math.max(minAP, heroAP - 12);
        fungusHP = Math.max(minHP, fungusHP - 14);
        updateUI();
    }

    function entangle(event) {
        //testing that the function is called when button is clicked:
        console.log( 'Hero attacked using Entangle!')

        //Updating the text and the progress bars:
        heroAP = Math.max(minAP, heroAP - 23);
        fungusHP = Math.max(minHP, fungusHP - 9);
        updateUI();
    }

    function dragonBlade(event) {
        //testing that the function is called when button is clicked:
        console.log( 'Hero attacked using Dragon Blade!')

        //Updating the text and the progress bars:
        heroAP = Math.max(minAP, heroAP - 38);
        fungusHP = Math.max(minHP, fungusHP - 47);
        updateUI();
    }

    function starFire(event) {
        //testing that the function is called when button is clicked:
        console.log( 'Hero attacked using Star Fire!')

        //Updating the text and the progress bars:
        heroAP = Math.max(minAP, heroAP - 33);
        fungusHP = Math.max(minHP, fungusHP - 25);
        updateUI();
    }