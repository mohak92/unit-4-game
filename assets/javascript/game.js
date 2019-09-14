$( document ).ready(function() {
    console.log( "ready!" );

    class Character {
        constructor(name, healthPoints, attackPower, counterAttackPower) {
            this.name = name;
            this.healthPoints = healthPoints;
            this.attackPower = attackPower;
            this.counterAttackPower = counterAttackPower;
        }
    }

    player1 = new Character(120, incrementAttack(6), 20);

    player2 = new Character(120, incrementAttack(6), 20);

    player3 = new Character(120, incrementAttack(6), 20);

    player4 = new Character(120, incrementAttack(6), 20);

    function incrementAttack(attackPower){
        return attackPower += attackPower;
    }

    //console.log(incrementAttack(6));
});