class Plates {
    constructor() {
        this.cleanPlates = 0;
        this.dirtyPlates = 0;

    }

    intro() {
        if (this.cleanPlates + this.dirtyPlates <= 0) {
            console.log(`Hi, this restoran has 0 plates! Please, buy some.`);
        } else {
            console.log(`Hi, this restoran has ${this.cleanPlates + this.dirtyPlates} plates!`);
        }
    }

    buyPlates(plateCount) {
        this.cleanPlates += plateCount;
        console.log(`Restoran purchased ${plateCount} plates.`);
    }

    usePlates(usedPlates) {
        if (usedPlates <= this.cleanPlates) {
            this.cleanPlates -= usedPlates;
            this.dirtyPlates += usedPlates;
            console.log(`Restoran has made some dishes for ${usedPlates} plates.`);
        } else {
            console.log(`Restoran has ${this.cleanPlates} plates only, it's not enough. No action is taken.`);
        }
    }

    cleanPlatesCount() {
        if (this.cleanPlates === 0) {
            console.log(`Restoran is left with no clean plates.`);
        } else {
            console.log(`Restoran has ${this.cleanPlates} clean plates.`);
        }
    }

    cleanUp(plateCount) {
        if (plateCount > this.dirtyPlates) {
            console.log(`Restoran does not have so many dirty plates.`);
            return;
        }

        this.dirtyPlates -= plateCount;
        this.cleanPlates += plateCount;

        if (this.dirtyPlates === 0) {
            console.log(`All plates in the Restoran is clean!`);
        }
    }

}

module.exports = Plates;