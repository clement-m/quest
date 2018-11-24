class ClassColision {
	constructor(SHOW_COLISION_ON) {
        this.SHOW_COLISION_ON = SHOW_COLISION_ON;

        this.colisions = [];
    }

    checkColision(Player, Unit) {
        let colid = false;
        if(Player.id !== Unit.id) {
            this.display(Player, Unit);
            if(Player.directionRight) {
                if(Unit.Position.posX > Player.Position.posX && Unit.Position.posX < Player.Position.posX + Player.Stats.width +  Player.Stats.attackRange) {
                    colid = true;
                }
            } else {
                if(Unit.Position.posX < Player.Position.posX && Unit.Position.posX > Player.Position.posX - Player.Stats.width - Player.Stats.attackRange) {
                    colid = true;
                }
            }
        }
        return colid;
    }

    display(Player, Unit) {
        if(this.SHOW_COLISION_ON) {
            console.log("show colision");
            let posX;
            if(Player.directionRight) {
                posX = Player.Position.posX + Player.Stats.attackRange;
            } else {
                posX = Player.Position.posX -  Player.Stats.attackRange;
            }
            
            Game.context.beginPath();
            Game.context.lineWidth="4";
            Game.context.strokeStyle="red";
            Game.context.rect(
                posX, 
                Player.Position.posY, 
                Player.Stats.attackRange, 
                Player.Position.posY
            );
            Game.context.stroke();
        }

    }
}