






class encounter1 extends dialogueChoice {
    constructor() {
        super();
        this.situations = [
            {
                dialogue:[
                    "'Hello there'",
                    "'This is a test encounter'"],
                options:[
                    {
                        text:"Option 1",minimumSum:1,successPoints:1,
                        positiveResponse:"Happy :D",
                        negativeResponse:"Anrgy >:I"
                    },
                    {text:"Option 2",effect:""},
                    {text:"Option 3",effect:""},
                ],
                occured:false,
            },{
                dialogue:[
                    "'Woah!'",
                    "'This is another test encounter'"],
                options:[
                    {text:"Option 1",effect:""},
                    {text:"Option 2",effect:""},
                    {text:"Option 3",effect:""},
                ],
                occured:false,
            }
        ];
        this.situationCount = this.situations.length;
    }
}

