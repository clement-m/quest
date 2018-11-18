class ClassSkeleton extends ClassUnit {
    constructor(id, canvasHeight, posX, directionRight, Images, Audios) {
        super(id, canvasHeight, posX, directionRight);
        this.directionRight = false;
        this.initAudios(Audios);
        this.initImages(Images);

        this.hp = 2;
        this.takingDmgMaxDuration = 30;

        this.speed = 4;
        this.movePattern ();


    }

    mainPattern () {
        super.mainPattern();
        if (!this.isTakingDmg) {
            this.movePattern();
            this.walk();
        }
    }

    movePattern () {
        this.speedX = (this.directionRight) ? this.speed : this.speed * -1;
    }

    display(context) {
        if(!this.isDead) {
            context.drawImage(this.currentImg, 0, 0, 339, 656, this.posX + this.posXMargin, this.posY - this.posYMargin, this.width, this.height);
        }
    }

    takeDamage() {
        this.walking
        this.isTakingDmg = true;
        this.takingDmgTic++;
        if(this.takingDmgTic + 1 > this.takingDmgMaxDuration) {
            this.skeletonHit.play();
            this.hp--;
            this.isTakingDmg = false;
            this.mainPattern();
            this.takingDmgTic = 0;
            if(this.directionRight) {
                if(this.currentImg === this.img) {
                    this.currentImg = this.imgHit;
                } else {
                    this.currentImg = this.img;
                }
            } else {
                if(this.currentImg === this.imgL) {
                    this.currentImg = this.imgHitL;
                } else {
                    this.currentImg = this.imgL;
                }
            }
        } else {
            if(this.directionRight) {
                this.currentImg = (this.takingDmgTic % 4 == 0) ? this.imgHit : this.img;
                this.skeletonHit.play();
            } else {
                this.currentImg = (this.takingDmgTic % 4 == 0) ? this.imgHitL : this.imgL;
                this.skeletonHit.play();
            }
        }
        this.checkDie();
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



    getRandom(max) {
        return Math.floor(Math.random() * max + 1);
    }


    checkDie() {
        super.checkDie();
        if(this.isDead) {
            this.airhorn.play();    
        }
    }

    initAudios(Audios) {
        this.skeletonHit = Audios.effects['japan'];
        this.airhorn = Audios.effects['airhorn'];
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


}