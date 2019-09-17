$( document ).ready(function() {

    var playerSelected;
    var defenderSelected;
    var gamePlaying = false;
    var currentPlayer = {};
    var defendingPlayer = {};
    var totalDefeted;

    class Character {
        constructor(name, healthPoints, attackPower, counterAttackPower) {
            this.name = name;
            this.healthPoints = healthPoints;
            this.attackPower = attackPower;
            this.counterAttackPower = counterAttackPower;
        }
    }

    var captainAmerica = new Character("Captain Aerica", 120, 8, 8);

    var hulk = new Character("Hulk", 180, 5, 5);

    var ironMan = new Character("Iron Man", 125, 20, 20);

    var thor = new Character("Thor", 175, 15, 15);

    function initGame() {
        playerSelected = undefined;
        defenderSelected = undefined;
        gamePlaying = false;
        currentPlayer = {};
        defendingPlayer = {};
        totalDefeted;

        $(".character").removeClass("character-selected enemy-character defender-character").addClass("character-selection");
        $("#my-characters").html($(".character-selection").show());

        $("#restart").hide();
    }

    function initMyPlayer(mySelectedPlayer){
        currentPlayer.name = mySelectedPlayer.name;
        currentPlayer.healthPoints = mySelectedPlayer.healthPoints;
        currentPlayer.attackPower = mySelectedPlayer.attackPower;
        currentPlayer.counterAttackPower = mySelectedPlayer.counterAttackPower;
    }

    function initMyCurrentEnemy(mySelectedEnemy){
        defendingPlayer.name = mySelectedEnemy.name;
        defendingPlayer.healthPoints = mySelectedEnemy.healthPoints;
        defendingPlayer.attackPower = mySelectedEnemy.attackPower;
        defendingPlayer.counterAttackPower= mySelectedEnemy.counterAttackPower;
    }

    function moveToCharacter(playerID){
        if(!playerSelected){
            console.log("inside movecharacter if");
            console.log(playerID);
            var mySelection =  $(playerID).removeClass("character-selection").addClass("character-selected");
            $("#charcater-selected").append(mySelection);
            playerSelected = true;
        }
    }

    function moveToEnemies(){
        $(".character-selection").removeClass("character-selection").addClass("enemy-character");
        $("#enemies-available").append($(".enemy-character"));
    }

    function moveToDefender(playerID){
        $(playerID).removeClass("enemy-character").addClass("defender-character");
        $("#defender-section").append($(".defender-character"));
        defenderSelected = true;
    }

    $("#restart").hide();

    $("#captain-america").on("click", function () {
        if(!playerSelected){
            moveToCharacter("#captain-america");
            moveToEnemies();
            initMyPlayer(captainAmerica);
        } else if(playerSelected == true && !defenderSelected) {
            if($("#captain-america").hasClass("enemy-character")) {
                console.log("Defender selcted");
                initMyCurrentEnemy(captainAmerica);
                moveToDefender("#captain-america");
            }
        }
    });
    
    $("#hulk").on("click", function () {
        if(!playerSelected){
            moveToCharacter("#hulk");
            moveToEnemies();
            initMyPlayer(hulk);
        } else if(playerSelected == true && !defenderSelected) {
            if($("#hulk").hasClass("enemy-character")) {
                console.log("Defender selcted");
                initMyCurrentEnemy(hulk);
                moveToDefender("#hulk");
            }
        }
    });
    
    $("#iron-man").on("click", function () {
        if(!playerSelected){
            moveToCharacter("#iron-man");
            moveToEnemies();
            initMyPlayer(ironMan);
        } else if(playerSelected == true && !defenderSelected) {
            if($("#iron-man").hasClass("enemy-character")) {
                console.log("Defender selcted");
                initMyCurrentEnemy(ironMan);
                moveToDefender("#iron-man");
            }
        }
    });

    $("#thor").on("click", function () {
        if(!playerSelected){
            moveToCharacter("#thor");
            moveToEnemies();
            initMyPlayer(thor);
        } else if(playerSelected == true && !defenderSelected) {
            if($("#thor").hasClass("enemy-character")) {
                console.log("Defender selcted");
                initMyCurrentEnemy(thor);
                moveToDefender("#thor");
            }
        }
    });

    $("#attack").on("click", function () {
        if(playerSelected == true && defenderSelected == true && !gamePlaying){

        } else if(playerSelected == true && defenderSelected == false && !gamePlaying) {

        } else if(playerSelected == false && !gamePlaying) {

        }
        $("#restart").show();
    });

    $("#restart").on("click", function () {
        initGame();
    });

});