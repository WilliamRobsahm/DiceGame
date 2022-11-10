






class encounter1 extends dialogueChoice {
    constructor() {
        super();
        this.situations = [
            {
                dialogue:[
                    "'Hello there'",
                    "'This is a test encounter'"],
                options:[
                    {text:"Option 1",effect:"",nextDialogue:false},
                    {text:"Option 2",effect:"",nextDialogue:false},
                    {text:"Option 3",effect:"",nextDialogue:false},
                    {text:"Option 4",effect:"",nextDialogue:false}
                ],
                occured:false,
            },{
                dialogue:[
                    "'Woah!'",
                    "'This is another test encounter'"],
                options:[
                    {text:"Option 1",effect:"",nextDialogue:false},
                    {text:"Option 2",effect:"",nextDialogue:false},
                    {text:"Option 3",effect:"",nextDialogue:false},
                    {text:"Option 4",effect:"",nextDialogue:false}
                ],
                occured:false,
            }
        ];
        this.situationCount = this.situations.length;
    }
}

