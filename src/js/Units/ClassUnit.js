class ClassUnit {
	constructor(id, canvasHeight, posX, directionRight, Images) {
        this.width = 75;
        this.height = 200;
        this.minSpeed = -8;
        this.maxSpeed = 8;
        this.speedY = 0;
        this.isWalking = false;
        this.walking = 0;
        this.walkingMaxCount = 5;
        this.directionRight = directionRight;
        
        this.isAttacking = false;
        this.attackTic = 0; 
        this.attackMaxDuration = 15; 

        this.isTakingDmg = false;
        this.takingDmgTic = 0;
        this.takingDmgMaxDuration = 15;


        this.isDead = false;
        this.posXMargin = 15;
        this.posYMargin = 15;

        this.id = id
        this.posX = posX;
        this.posY = canvasHeight - this.height;
        this.speedX = 0;
        this.hp = 0;
	}

    mainPattern() {
        if(this.isTakingDmg) {
            this.speedX = 0;
            this.speedY = 0;
            this.takeDamage();
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
};