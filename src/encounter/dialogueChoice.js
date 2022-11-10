


class dialogueChoice {
    constructor() {
        this.situations = [];
        this.situationCount = this.situations.length;
        this.count = 0;
    }

    chooseSituation() {
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