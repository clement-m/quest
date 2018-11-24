class ClassSkeleton extends ClassUnit {
    constructor(id, player, canvasHeight, posX, directionRight, patternName, Images, Audios) {
        super(id, player, canvasHeight, posX, directionRight, patternName);
        this.name = "skeleton";
        this.directionRight = false;
        this.initAudios(Audios);
        this.initImages(Images);


        this.Stats.speedX = (this.directionRight) ? this.Stats.speedX : this.Stats.speedX * -1;
        this.Stats.hp = 2;
        this.Stats.speedX = -4;
        this.takingDmgMaxDuration = 30;  
    }
/*
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
*/
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