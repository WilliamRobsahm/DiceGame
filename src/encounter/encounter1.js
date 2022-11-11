
 
let pos = {character:"",text:"(The guard liked that)"};
let neg = {character:"",text:"(The guard disliked that)"};


class encounter1 extends dialogueChoice {
    constructor() {
        super();
        this.situations = [
            {
                dialogue:[{character:"Guard",text:"Do you live a boring life?'"}],
                options:[
                    {
                        text:"Yes, I'm bored.",minimumSum:12,successPoints:2,
                        positiveResponse:[pos,{character:"Guard",text:"'...'"}],
                        negativeResponse:[neg,{character:"Guard",text:"'...'"}]
                    },{
                        text:"I'm actually pretty busy.",minimumSum:15,successPoints:3,
                        positiveResponse:[pos,{character:"Guard",text:"'...'"}],
                        negativeResponse:[neg,{character:"Guard",text:"'...'"}]
                    },{
                        text:"I never thought about it.",minimumSum:17,successPoints:5,
                        positiveResponse:[pos,{character:"Guard",text:"'...'"}],
                        negativeResponse:[neg,{character:"Guard",text:"'...'"}]
                    },
                ],
                occured:false,
            },
            
            {
                dialogue:[{character:"Guard",text:"'Are you escaping to help or protect the world or something?'"}],
                options:[
                    {
                        text:"That's right.",minimumSum:13,successPoints:2,
                        positiveResponse:[pos,{character:"Guard",text:"'...'"}],
                        negativeResponse:[neg,{character:"Guard",text:"'...'"}]
                    },{
                        text:"None of your business.",minimumSum:16,successPoints:4,
                        positiveResponse:[pos,{character:"Guard",text:"'...'"}],
                        negativeResponse:[neg,{character:"Guard",text:"'...'"}]
                    },{
                        text:"It pays the bills.",minimumSum:18,successPoints:6,
                        positiveResponse:[pos,{character:"Guard",text:"'...'"}],
                        negativeResponse:[neg,{character:"Guard",text:"'...'"}]
                    },
                ],
                occured:false,
            },

            {
                dialogue:[{character:"Guard",text:"'Just based on my appearance, what kind of person am I to you?'"},],
                options:[
                    {
                        text:"It doesn't matter.",minimumSum:14,successPoints:3,
                        positiveResponse:[pos,{character:"Guard",text:"'...'"}],
                        negativeResponse:[neg,{character:"Guard",text:"'...'"}]
                    },{
                        text:"Nobody, really.",minimumSum:17,successPoints:5,
                        positiveResponse:[pos,{character:"Guard",text:"'...'"}],
                        negativeResponse:[neg,{character:"Guard",text:"'...'"}]
                    },{
                        text:"My rival.",minimumSum:19,successPoints:7,
                        positiveResponse:[pos,{character:"Guard",text:"'...'"}],
                        negativeResponse:[neg,{character:"Guard",text:"'...'"}]
                    },
                ],
                occured:false,
            },

            {
                dialogue:[{character:"Guard",text:"'Why don't we enjoy a chat after all this escaping business is done?'"},],
                options:[
                    {
                        text:"All right, I suppose. ",minimumSum:15,successPoints:3,
                        positiveResponse:[pos,{character:"Guard",text:"'...'"}],
                        negativeResponse:[neg,{character:"Guard",text:"'...'"}]
                    },{
                        text:"There's no need for that.",minimumSum:18,successPoints:6,
                        positiveResponse:[pos,{character:"Guard",text:"'...'"}],
                        negativeResponse:[neg,{character:"Guard",text:"'...'"}]
                    },{
                        text:"(...)",minimumSum:20,successPoints:24,
                        positiveResponse:[pos,{character:"Guard",text:"'...'"}],
                        negativeResponse:[neg,{character:"Guard",text:"'...'"}]
                    },
                ],
                occured:false,
            },

            {
                dialogue:[{character:"Guard",text:"'If I made you bleed in battle, what color of blood would you pour out?'"},],
                options:[
                    {
                        text:"Red.",minimumSum:11,successPoints:1,
                        positiveResponse:[pos,{character:"Guard",text:"'...'"}],
                        negativeResponse:[neg,{character:"Guard",text:"'...'"}]
                    },{
                        text:"Black.",minimumSum:14,successPoints:3,
                        positiveResponse:[pos,{character:"Guard",text:"'...'"}],
                        negativeResponse:[neg,{character:"Guard",text:"'...'"}]
                    },{
                        text:"I never bleed or cry.",minimumSum:16,successPoints:4,
                        positiveResponse:[pos,{character:"Guard",text:"'...'"}],
                        negativeResponse:[neg,{character:"Guard",text:"'...'"}]
                    },
                ],
                occured:false,
            },

            {
                dialogue:[{character:"Guard",text:"'Care to explain why you got put in prison?'"},],
                options:[
                    {
                        text:"It'd take a while to explain.",minimumSum:12,successPoints:2,
                        positiveResponse:[pos,{character:"Guard",text:"'...'"}],
                        negativeResponse:[neg,{character:"Guard",text:"'...'"}]
                    },{
                        text:"There's no need to explain.",minimumSum:15,successPoints:3,
                        positiveResponse:[pos,{character:"Guard",text:"'...'"}],
                        negativeResponse:[neg,{character:"Guard",text:"'...'"}]
                    },{
                        text:"Just shut up.",minimumSum:17,successPoints:5,
                        positiveResponse:[pos,{character:"Guard",text:"'...'"}],
                        negativeResponse:[neg,{character:"Guard",text:"'...'"}]
                    },
                ],
                occured:false,
            },

            {
                dialogue:[{character:"Guard",text:"'Confess your sins to me.'"},],
                options:[
                    {
                        text:"I apologize.",minimumSum:13,successPoints:2,
                        positiveResponse:[pos,{character:"Guard",text:"'...'"}],
                        negativeResponse:[neg,{character:"Guard",text:"'...'"}]
                    },{
                        text:"I think... I was wrong.",minimumSum:16,successPoints:4,
                        positiveResponse:[pos,{character:"Guard",text:"'...'"}],
                        negativeResponse:[neg,{character:"Guard",text:"'...'"}]
                    },{
                        text:"No chance.",minimumSum:18,successPoints:6,
                        positiveResponse:[pos,{character:"Guard",text:"'...'"}],
                        negativeResponse:[neg,{character:"Guard",text:"'...'"}]
                    },
                ],
                occured:false,
            },

            {
                dialogue:[{character:"Guard",text:"'Do you have a dish you're good at?'"},],
                options:[
                    {
                        text:"My mother's stew.",minimumSum:14,successPoints:3,
                        positiveResponse:[pos,{character:"Guard",text:"'...'"}],
                        negativeResponse:[neg,{character:"Guard",text:"'...'"}]
                    },{
                        text:"A fancy steak.",minimumSum:17,successPoints:5,
                        positiveResponse:[pos,{character:"Guard",text:"'...'"}],
                        negativeResponse:[neg,{character:"Guard",text:"'...'"}]
                    },{
                        text:"What are you saying?",minimumSum:19,successPoints:7,
                        positiveResponse:[pos,{character:"Guard",text:"'...'"}],
                        negativeResponse:[neg,{character:"Guard",text:"'...'"}]
                    },
                ],
                occured:false,
            },

            {
                dialogue:[{character:"Guard",text:"'You seem to be shaking, are you okay?'"},],
                options:[
                    {
                        text:"I'm a bit chilly, but...",minimumSum:15,successPoints:3,
                        positiveResponse:[pos,{character:"Guard",text:"'...'"}],
                        negativeResponse:[neg,{character:"Guard",text:"'...'"}]
                    },{
                        text:"I'm a little scared...",minimumSum:18,successPoints:6,
                        positiveResponse:[pos,{character:"Guard",text:"'...'"}],
                        negativeResponse:[neg,{character:"Guard",text:"'...'"}]
                    },{
                        text:"Shut up!",minimumSum:20,successPoints:8,
                        positiveResponse:[pos,{character:"Guard",text:"'...'"}],
                        negativeResponse:[neg,{character:"Guard",text:"'...'"}]
                    },
                ],
                occured:false,
            },

            {
                dialogue:[{character:"Guard",text:"'Only bad people get put in prison. Don't you understand the severity of your action?'"},],
                options:[
                    {
                        text:"Sin...?",minimumSum:11,successPoints:1,
                        positiveResponse:[pos,{character:"Guard",text:"'...'"}],
                        negativeResponse:[neg,{character:"Guard",text:"'...'"}]
                    },{
                        text:"Cut to the chase.",minimumSum:14,successPoints:3,
                        positiveResponse:[pos,{character:"Guard",text:"'...'"}],
                        negativeResponse:[neg,{character:"Guard",text:"'...'"}]
                    },{
                        text:"I've done nothing wrong.",minimumSum:16,successPoints:4,
                        positiveResponse:[pos,{character:"Guard",text:"'...'"}],
                        negativeResponse:[neg,{character:"Guard",text:"'...'"}]
                    },
                ],
                occured:false,
            },
        ];
        this.situationCount = this.situations.length;
    }
}

