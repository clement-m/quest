class ClassPlayer extends ClassUnit {
	constructor(id, player, canvasHeight, posX, directionRight, patternName, Images, Audios) {
        super(id, player, canvasHeight, posX, directionRight, patternName);
        this.name = "Player";
        //this.initAudios(Audios);
        this.initImages(Images);
        this.Stats.hp = 100;
        this.Stats.attackRange = 100;
    }

    stopMove() {
        this.Stats.stopMove();
    }

    goLeft() {
        this.Stats.goLeft(this);
    }

    goRight() {
        this.Stats.goRight(this);
    }

    goTop() {
        this.Stats.goTop();
    }

    goBottom() {
        this.Stats.goBottom();
    }

    attack(Units) {
        this.Pattern.setAttack();
        this.stopMove();
        this.hit(Units);
    }

   hit(Units) {
        let resultLog = "no hit success";
        Units.arrayUnits.forEach(function(Unit) {
            if(Game.Colision.checkColision(this, Unit)) {
                resultLog = this.name + " has hit " + Unit.name + ", hp left : " + Unit.Stats.hp;
            }
        }, this);
        console.log(resultLog);
    }

    initAudios(Audios) {
        
    }
/*
    mainPattern () {
        super.mainPattern();
        if (!this.isTakingDmg) {
            this.walk();
        }
    }    
    
    display(context) {
        if(!this.isDead) {
            context.drawImage(this.currentImg, 0, 0, 339, 656, this.posX + this.posXMargin, this.posY - this.posYMargin, this.width, this.height);
        }
    }

    walk() {
        this.move();
        if(this.speedX != 0) {
            if(this.speedX > 0) {
                this.directionRight = true;
            } else {
                this.directionRight = false;
            }
        }
        if(this.speedX != 0 || this.speedY != 0) {
            this.walking++;
            if(this.walking + 1 > this.walkingMaxCount) {
                this.walking = 0;
                if(this.directionRight) {
                    if(this.currentImg === this.img) {
                        this.currentImg = this.imgWalk;
                    } else {
                        this.currentImg = this.img;
                    }
                } else {
                    if(this.currentImg === this.imgL) {
                        this.currentImg = this.imgWalkL;
                    } else {
                        this.currentImg = this.imgL;
                    }
                }
                
            }
        } else {
            if(this.directionRight) {
                this.currentImg = this.img;
            } else {
                this.currentImg = this.imgL;
            }
        }
    }



 
*/

    initImages(Images) {
        this.img = Images.images["skeleton"];
        this.imgL = Images.images["skeletonL"];

        this.imgWalk = Images.images["skeletonWalk"];
        this.imgWalkL = Images.images["skeletonWalkL"];

        this.imgAttack = Images.images["skeletonAttack"];
        this.imgAttackL = Images.images["skeletonAttackL"];

        this.imgAttack2 = Images.images["skeletonAttack2"];
        this.imgAttack2L = Images.images["skeletonAttack2L"];

        this.imgHit = Images.images["skeletonHit"];
        this.imgHitL = Images.images["skeletonHitL"];

        this.currentImg = this.img;
    }
}