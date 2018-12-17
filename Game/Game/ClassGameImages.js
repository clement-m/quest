class ClassGameImages {
    constructor() {
        this.images = [];
        this.imageFolder = 'src/img/';
        this.initImages();
    }

    setImage(name, src) {
        let img = new Image();
        img.src = 'src/img/' + src + '.png';
        this.images[name] = img;
    }

    initImages() {
        this.setImage('skeleton'        , 'skeleton');
        this.setImage('skeletonWalk'    , 'skeleton_walk');
        this.setImage('skeletonAttack'  , 'skeleton_attack');
        this.setImage('skeletonAttack2' , 'skeleton_attack_2');
        this.setImage('skeletonHit'     , 'skeletonHit');
        this.setImage('skeletonL'       , 'skeletonL');
        this.setImage('skeletonWalkL'   , 'skeleton_walkL');
        this.setImage('skeletonAttackL' , 'skeleton_attackL');
        this.setImage('skeletonAttack2L', 'skeleton_attack_2L');
        this.setImage('skeletonHitL'    , 'skeletonHitL');
    }
}