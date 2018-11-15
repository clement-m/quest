class ClassUnit {
	constructor(id, canvasHeight, posX, speedX) {
		this.id = id
        this.posX = posX;

        this.minSpeed = -8;
        this.maxSpeed = 8;
        this.speedX = speedX;
        this.speedY = 0;


        this.posY = canvasHeight - this.height;
        this.posY = canvasHeight - this.height;


		//this.initImages();

        
        this.walking = 0;
        this.walkingMaxCount = 5;

        this.width = 75;
        this.height = 200;



        this.posXMargin = 15;
        this.posYMargin = 15;


        this.directionRight = true;
        this.attacking = false;
        this.attackTic = 0;        
        this.dead = false;
		
	}

	mainPattern() {

    }

	display(context) {
        if(!this.dead) {
        	this.mainPattern();
            context.drawImage(this.currentImg, 0, 0, 339, 656, this.posX + this.posXMargin, this.posY - this.posYMargin, this.width, this.height);
        }
    }

    checkMaxSpeed() {
        if(this.speedX > this.maxSpeed) this.speedX = this.maxSpeed;
        if(this.speedY > this.maxSpeed) this.speedY = this.maxSpeed;
        if(this.speedX < this.minSpeed) this.speedX = this.minSpeed;
        if(this.speedY < this.minSpeed) this.speedY = this.minSpeed;
    }

    skullWalk() {
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

    updatePosition() {
        this.checkMaxSpeed();
        this.skullWalk();
        this.posX += this.speedX;
        this.posY += this.speedY;
    }

    attack() {
        var attackDuration = 15;
        this.attacking = true;
        this.speedX = 0;
        this.speedY = 0;
        this.attackTic++;
        if(this.attackTic <= attackDuration / 2) {
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
        if(this.attackTic > attackDuration) {
            this.attacking = false;
            this.attackTic = 0;
        }
    }

    checkDie() {

    }
/*
    initImages() {
        this.img = new Image();
        this.imgWalk = new Image();
        this.imgAttack = new Image();
        this.imgAttack2 = new Image();
        this.imgL = new Image();
        this.imgWalkL = new Image();
        this.imgAttackL = new Image();
        this.imgAttack2L = new Image();

        this.img.src = 'src/img/skeleton.png';
        this.imgWalk.src = "src/img/skeleton_walk.png";
        this.imgAttack.src = "src/img/skeleton_attack.png";
        this.imgAttack2.src = "src/img/skeleton_attack_2.png";
        this.imgL.src = 'src/img/skeletonL.png';
        this.imgWalkL.src = "src/img/skeleton_walkL.png";
        this.imgAttackL.src = "src/img/skeleton_attackL.png";
        this.imgAttack2L.src = "src/img/skeleton_attack_2L.png";

        this.currentImg = this.img;
    }
*/
};