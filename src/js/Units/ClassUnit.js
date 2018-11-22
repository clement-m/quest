
    class ClassUnit {
    	constructor(id, player, canvasHeight, posX, directionRight, Images, patternName) {
            this.id = id;
            this.isPlayer = player;
            this.directionRight = directionRight;
            
            this.Stats = new ClassUnitStat();
            //this.Position = new ClassUnitPosition(posX, canvasHeight, this.height);
            this.Malus = new ClassMalus();
            //this.Bonus = new ClassBonus();
            //this.Action = new ClassAction();
            //this.Pattern = new ClassPattern("moveOnly", directionRight);
    	}
/*
        display(context) {
            if(!this.Malus.isDebuff) {
                this.Pattern.currentPattern();
                draw(context);
            }
                
        }
            

        draw(context) {
            context.drawImage(this.currentImg, 0, 0, 339, 656, this.posX + this.posXMargin, this.posY - this.posYMargin, this.width, this.height);
        }

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

        checkMaxSpeed() {
            if(this.speedX > this.maxSpeed) this.speedX = this.maxSpeed;
            if(this.speedY > this.maxSpeed) this.speedY = this.maxSpeed;
            if(this.speedX < this.minSpeed) this.speedX = this.minSpeed;
            if(this.speedY < this.minSpeed) this.speedY = this.minSpeed;
        }

        updatePosition() {
            this.mainPattern();
            
        }

        checkDie() {
            if(this.hp < 0) {
                this.isDead = true;
            }
        }
*/
    }