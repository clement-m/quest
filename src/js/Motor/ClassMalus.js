class ClassMalus {
    constructor() {
        this.isDebuff = false;
        this.isStunned = false;
        this.isRoot = false;
        this.isTakingDmg = false;
        this.isDead = false;
    }

    stun(Unit) {
        Unit.isStunned = true;
    }
}