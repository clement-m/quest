class ClassSkeleton {
    constructor(id, canvasHeight, posX, speedX) {
        super(id, canvasHeight, posX, speedX);     

        this.initImages();
    }

    getRandom(max) {
        return Math.floor(Math.random() * max + 1);
    }

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


}