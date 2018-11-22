
    class ClassUnit {
    	constructor(id, player, canvasHeight, posX, directionRight, patternName) {
            this.id = id;
            this.isPlayer = player;
            if(this.isPlayer) {
                patternName = "player";
            }
            this.directionRight = directionRight;
            
            this.Stats = new ClassStats();
            this.Position = new ClassPosition(posX, canvasHeight, this.Stats.height);
            this.Malus = new ClassMalus();
            this.Bonus = new ClassBonus();
            this.Action = new ClassAction();
            this.Pattern = new ClassPattern(patternName, directionRight);
    	}

        display(context) {
            if(!this.Malus.isDebuff) {
                if(this.Bonus.isBuff) {
                    // apply buff
                } else {
                    this.Pattern.applyPattern(this);
                }
            } else {
                // appliquer le debuff
                
            }
            this.draw(context);
        }
          

        draw(context) {
            context.drawImage(this.currentImg, 0, 0, 339, 656, this.Position.posX + this.Position.posXMargin, this.Position.posY - this.Position.posYMargin, this.Stats.width, this.Stats.height);
        }
/*  
        mainPattern() {
            if(!this.player) {

                if(this.isTakingDmg) {
                    this.speedX = 0;
                    this.speedY = 0;
                    this.takeDamage();
                }
            } else {
                // player pattern (malus effect etc)
            }
        }

        move() {
            this.checkMaxSpeed();
            this.posX += this.speedX;
            this.posY += this.speedY;
        }
*/

/*
*/
        updatePosition() {
            this.Stats.checkMaxSpeed();
            this.Position.updatePosition(this.Stats);
        }
/*
        checkDie() {
            if(this.hp < 0) {
                this.isDead = true;
            }
        }
*/
    }