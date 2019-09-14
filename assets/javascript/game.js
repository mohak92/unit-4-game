$( document ).ready(function() {
    console.log( "ready!" );

    var Character = function(healthPoints, attackPower, counterAttackPower){
        this.healthPoints = healthPoints;
        this.attackPower = attackPower;
        this.counterAttackPower = counterAttackPower;
    }

    //console.log(player1);

    function incrementAttack(attackPower){
        return attackPower += attackPower;
    }

    //console.log(incrementAttack(6));
});