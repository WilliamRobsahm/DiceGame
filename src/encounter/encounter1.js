






class encounter1 extends dialogueChoice {
    constructor() {
        super();
        this.situations = [
            {
                dialogue:[
                    {character:"Guard",text:"'Care to explain why you got put in prison?'"},
                ],
                options:[
                    {
                        text:"It'd take a while to explain.",minimumSum:6,successPoints:1,
                        positiveResponse:"Happy :D",
                        negativeResponse:"Anrgy >:I"
                    },{
                        text:"There's no need to explain.",minimumSum:8,successPoints:2,
                        positiveResponse:"Happy :D",
                        negativeResponse:"Anrgy >:I"
                    },{
                        text:"Just shut up.",minimumSum:10,successPoints:3,
                        positiveResponse:"Happy :D",
                        negativeResponse:"Anrgy >:I"
                    },
                ],
                occured:false,
            },{
                dialogue:[
                    {character:"Guard",text:"'Are you escaping to help or protect the world or something?'"},
                ],
                options:[
                    {
                        text:"That's right.",minimumSum:6,successPoints:1,
                        positiveResponse:["Happy :D"],
                        negativeResponse:["Anrgy >:I"]
                    },{
                        text:"Does that really matter?",minimumSum:8,successPoints:2,
                        positiveResponse:["Happy :D"],
                        negativeResponse:["Anrgy >:I"]
                    },{
                        text:"It pays the bills.",minimumSum:10,successPoints:3,
                        positiveResponse:"Happy :D",
                        negativeResponse:"Anrgy >:I"
                    },
                ],
                occured:false,
            }
        ];
        this.situationCount = this.situations.length;
    }
}

