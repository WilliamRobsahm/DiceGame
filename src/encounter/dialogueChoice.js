


class dialogueChoice {
    constructor() {
        this.situations = [];
        this.situationCount;
        this.count = 0;
    }

    chooseSituation(n) {
        this.situations[n].occured = true;
        return this.situations[n].occured;
    }

    randomSituation() {
        if(this.count >= this.situationCount) {
            return false;
        }

        while(true) {
            console.log(this.count);
            console.log(this.situationCount);
            let s = this.situations[rng(0,this.situationCount-1)];
            if(!s.occured) {
                s.occured = true;
                this.count += 1;
                return s;
            }
        }   
    }
}