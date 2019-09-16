$( document ).ready(function() {

    var playerSelected;
    var defenderSelected;
    var gamePlaying = false;
    var currentPlayer;
    var defendingPlayer;
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

    function initMyPlayer(mySelectedPlayer){

    }

    function imitMyCurrentEnemy(mySelectedEnemy){

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

    $("#restart").hide();

    $("#captain-america").on("click", function () {
        moveToCharacter("#captain-america");
        moveToEnemies();
        initMyPlayer(captainAmerica);
    });

    $("#hulk").on("click", function () {
        moveToCharacter("#hulk");
        moveToEnemies();
        initMyPlayer(hulk);
    });

    $("#iron-man").on("click", function () {
        moveToCharacter("#iron-man");
        moveToEnemies();
        initMyPlayer(ironMan);
    });

    $("#thor").on("click", function () {
        moveToCharacter("#thor");
        moveToEnemies();
        initMyPlayer(thor);
    });

});