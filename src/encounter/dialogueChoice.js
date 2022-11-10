


class dialogueChoice {
    constructor() {
        this.situations = [];
        this.situationCount = this.situations.length;
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
            let s = this.situations[rng(0,this.situationCount-1)];
            console.log(s);
            if(!s.occured) {
                s.occured = true;
                return s;
            }
        }   
    }
}