class ClassPlayer extends ClassUnit {
	constructor(id, canvasHeight, posX, directionRight, Images, Audios) {
        super(id, canvasHeight, posX, directionRight);
        //this.initAudios(Audios);
        //this.initImages(Images);
        //this.Stats.hp = 100;    
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

    attack(Units) {
        this.attacking = true;
        this.speedX = 0;
        this.speedY = 0;
        this.attackTic++;
        if(this.attackTic <= this.attackMaxDuration / 2) {
            if(this.directionRight) {
                this.currentImg = this.imgAttack;
            } else {
                this.currentImg = this.imgAttackL;
            }
            
        } else {
            if(this.directionRight) {
                this.currentImg = this.imgAttack2;
            } else {
                this.currentImg = this.imgAttack2L;
            }
            
        }
        if(this.attackTic > this.attackMaxDuration) {
            this.attacking = false;
            this.attackTic = 0;
        }
        this.hit(Units);
    }

    hit(Units) {
        if(this.attacking) {
            Units.arrayUnits.forEach(function(Unit) {
                if(this.id !== Unit.id) {
                    if(this.directionRight) {
                        if(Unit.posX > this.posX && Unit.posX < this.posX + 100) {
                            console.log(Unit.hp);
                            Unit.isTakingDmg = true;
                        }
                    } else {
                        if(Unit.posX < this.posX && Unit.posX > this.posX - 100) {
                            console.log(Unit.hp);
                            Unit.isTakingDmg = true;
                        }
                    }
                }
            }, this);
        }
    }

    initAudios(Audios) {
        
    }

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
*/
}