class encounter1 extends dialogueChoice {
    constructor(character) {
        super();
        this.character = character;
        this.pos = {character:"",text:"(The "+this.character+" liked that)"};
        this.neg = {character:"",text:"(The "+this.character+" disliked that)"};
        this.situations = [
            {
                dialogue:[{character:this.character,text:"Do you live a boring life?'"}],
                options:[
                    {
                        text:"Yes, I'm bored.",minimumSum:12,successPoints:2,
                        positiveResponse:[this.pos,{character:this.character,text:"'...'"}],
                        negativeResponse:[this.neg,{character:this.character,text:"'...'"}]
                    },{
                        text:"I'm actually pretty busy.",minimumSum:15,successPoints:3,
                        positiveResponse:[this.pos,{character:this.character,text:"'...'"}],
                        negativeResponse:[this.neg,{character:this.character,text:"'...'"}]
                    },{
                        text:"I never thought about it.",minimumSum:17,successPoints:5,
                        positiveResponse:[this.pos,{character:this.character,text:"'...'"}],
                        negativeResponse:[this.neg,{character:this.character,text:"'...'"}]
                    },
                ],
                occured:false,
            },
            
            {
                dialogue:[{character:this.character,text:"'Are you escaping to help or protect the world or something?'"}],
                options:[
                    {
                        text:"That's right.",minimumSum:13,successPoints:2,
                        positiveResponse:[this.pos,{character:this.character,text:"'...'"}],
                        negativeResponse:[this.neg,{character:this.character,text:"'...'"}]
                    },{
                        text:"None of your business.",minimumSum:16,successPoints:4,
                        positiveResponse:[this.pos,{character:this.character,text:"'...'"}],
                        negativeResponse:[this.neg,{character:this.character,text:"'...'"}]
                    },{
                        text:"It pays the bills.",minimumSum:18,successPoints:6,
                        positiveResponse:[this.pos,{character:this.character,text:"'...'"}],
                        negativeResponse:[this.neg,{character:this.character,text:"'...'"}]
                    },
                ],
                occured:false,
            },

            {
                dialogue:[{character:this.character,text:"'Just based on my appearance, what kind of person am I to you?'"},],
                options:[
                    {
                        text:"It doesn't matter.",minimumSum:14,successPoints:3,
                        positiveResponse:[this.pos,{character:this.character,text:"'...'"}],
                        negativeResponse:[this.neg,{character:this.character,text:"'...'"}]
                    },{
                        text:"Nobody, really.",minimumSum:17,successPoints:5,
                        positiveResponse:[this.pos,{character:this.character,text:"'...'"}],
                        negativeResponse:[this.neg,{character:this.character,text:"'...'"}]
                    },{
                        text:"My rival.",minimumSum:19,successPoints:7,
                        positiveResponse:[this.pos,{character:this.character,text:"'...'"}],
                        negativeResponse:[this.neg,{character:this.character,text:"'...'"}]
                    },
                ],
                occured:false,
            },

            {
                dialogue:[{character:this.character,text:"'Why don't we enjoy a chat after all this escaping business is done?'"},],
                options:[
                    {
                        text:"All right, I suppose. ",minimumSum:15,successPoints:3,
                        positiveResponse:[this.pos,{character:this.character,text:"'...'"}],
                        negativeResponse:[this.neg,{character:this.character,text:"'...'"}]
                    },{
                        text:"There's no need for that.",minimumSum:18,successPoints:6,
                        positiveResponse:[this.pos,{character:this.character,text:"'...'"}],
                        negativeResponse:[this.neg,{character:this.character,text:"'...'"}]
                    },{
                        text:"(...)",minimumSum:20,successPoints:24,
                        positiveResponse:[this.pos,{character:this.character,text:"'...'"}],
                        negativeResponse:[this.neg,{character:this.character,text:"'...'"}]
                    },
                ],
                occured:false,
            },

            {
                dialogue:[{character:this.character,text:"'If I made you bleed in battle, what color of blood would you pour out?'"},],
                options:[
                    {
                        text:"Red.",minimumSum:11,successPoints:1,
                        positiveResponse:[this.pos,{character:this.character,text:"'...'"}],
                        negativeResponse:[this.neg,{character:this.character,text:"'...'"}]
                    },{
                        text:"Black.",minimumSum:14,successPoints:3,
                        positiveResponse:[this.pos,{character:this.character,text:"'...'"}],
                        negativeResponse:[this.neg,{character:this.character,text:"'...'"}]
                    },{
                        text:"I never bleed or cry.",minimumSum:16,successPoints:4,
                        positiveResponse:[this.pos,{character:this.character,text:"'...'"}],
                        negativeResponse:[this.neg,{character:this.character,text:"'...'"}]
                    },
                ],
                occured:false,
            },

            {
                dialogue:[{character:this.character,text:"'Care to explain why you got put in prison?'"},],
                options:[
                    {
                        text:"It'd take a while to explain.",minimumSum:12,successPoints:2,
                        positiveResponse:[this.pos,{character:this.character,text:"'...'"}],
                        negativeResponse:[this.neg,{character:this.character,text:"'...'"}]
                    },{
                        text:"There's no need to explain.",minimumSum:15,successPoints:3,
                        positiveResponse:[this.pos,{character:this.character,text:"'...'"}],
                        negativeResponse:[this.neg,{character:this.character,text:"'...'"}]
                    },{
                        text:"Just shut up.",minimumSum:17,successPoints:5,
                        positiveResponse:[this.pos,{character:this.character,text:"'...'"}],
                        negativeResponse:[this.neg,{character:this.character,text:"'...'"}]
                    },
                ],
                occured:false,
            },

            {
                dialogue:[{character:this.character,text:"'Confess your sins to me.'"},],
                options:[
                    {
                        text:"I apologize.",minimumSum:13,successPoints:2,
                        positiveResponse:[this.pos,{character:this.character,text:"'...'"}],
                        negativeResponse:[this.neg,{character:this.character,text:"'...'"}]
                    },{
                        text:"I think... I was wrong.",minimumSum:16,successPoints:4,
                        positiveResponse:[this.pos,{character:this.character,text:"'...'"}],
                        negativeResponse:[this.neg,{character:this.character,text:"'...'"}]
                    },{
                        text:"No chance.",minimumSum:18,successPoints:6,
                        positiveResponse:[this.pos,{character:this.character,text:"'...'"}],
                        negativeResponse:[this.neg,{character:this.character,text:"'...'"}]
                    },
                ],
                occured:false,
            },

            {
                dialogue:[{character:this.character,text:"'Do you have a dish you're good at?'"},],
                options:[
                    {
                        text:"My mother's stew.",minimumSum:14,successPoints:3,
                        positiveResponse:[this.pos,{character:this.character,text:"'...'"}],
                        negativeResponse:[this.neg,{character:this.character,text:"'...'"}]
                    },{
                        text:"A fancy steak.",minimumSum:17,successPoints:5,
                        positiveResponse:[this.pos,{character:this.character,text:"'...'"}],
                        negativeResponse:[this.neg,{character:this.character,text:"'...'"}]
                    },{
                        text:"What are you saying?",minimumSum:19,successPoints:7,
                        positiveResponse:[this.pos,{character:this.character,text:"'...'"}],
                        negativeResponse:[this.neg,{character:this.character,text:"'...'"}]
                    },
                ],
                occured:false,
            },

            {
                dialogue:[{character:this.character,text:"'You seem to be shaking, are you okay?'"},],
                options:[
                    {
                        text:"I'm a bit chilly, but...",minimumSum:15,successPoints:3,
                        positiveResponse:[this.pos,{character:this.character,text:"'...'"}],
                        negativeResponse:[this.neg,{character:this.character,text:"'...'"}]
                    },{
                        text:"I'm a little scared...",minimumSum:18,successPoints:6,
                        positiveResponse:[this.pos,{character:this.character,text:"'...'"}],
                        negativeResponse:[this.neg,{character:this.character,text:"'...'"}]
                    },{
                        text:"Shut up!",minimumSum:20,successPoints:8,
                        positiveResponse:[this.pos,{character:this.character,text:"'...'"}],
                        negativeResponse:[this.neg,{character:this.character,text:"'...'"}]
                    },
                ],
                occured:false,
            },

            {
                dialogue:[{character:this.character,text:"'Only bad people get put in prison. Don't you understand the severity of your action?'"},],
                options:[
                    {
                        text:"Sin...?",minimumSum:11,successPoints:1,
                        positiveResponse:[this.pos,{character:this.character,text:"'...'"}],
                        negativeResponse:[this.neg,{character:this.character,text:"'...'"}]
                    },{
                        text:"Cut to the chase.",minimumSum:14,successPoints:3,
                        positiveResponse:[this.pos,{character:this.character,text:"'...'"}],
                        negativeResponse:[this.neg,{character:this.character,text:"'...'"}]
                    },{
                        text:"I've done nothing wrong.",minimumSum:16,successPoints:4,
                        positiveResponse:[this.pos,{character:this.character,text:"'...'"}],
                        negativeResponse:[this.neg,{character:this.character,text:"'...'"}]
                    },
                ],
                occured:false,
            },
            {
                dialogue:[{character:this.character,text:"'Do you... think me a charlatan?'"},],
                options:[
                    {
                        text:"No.",minimumSum:12,successPoints:2,
                        positiveResponse:[this.pos,{character:this.character,text:"'...'"}],
                        negativeResponse:[this.neg,{character:this.character,text:"'...'"}]
                    },{
                        text:"You're my enemy.",minimumSum:15,successPoints:3,
                        positiveResponse:[this.pos,{character:this.character,text:"'...'"}],
                        negativeResponse:[this.neg,{character:this.character,text:"'...'"}]
                    },{
                        text:"You're not?",minimumSum:17,successPoints:5,
                        positiveResponse:[this.pos,{character:this.character,text:"'...'"}],
                        negativeResponse:[this.neg,{character:this.character,text:"'...'"}]
                    },
                ],
                occured:false,
            },
            {
                dialogue:[{character:this.character,text:"'Escaping prison is like escaping responsibility, doesn't it bother your conscience?'"},],
                options:[
                    {
                        text:"Now that you mentioned it...",minimumSum:13,successPoints:2,
                        positiveResponse:[this.pos,{character:this.character,text:"'...'"}],
                        negativeResponse:[this.neg,{character:this.character,text:"'...'"}]
                    },{
                        text:"...Nope",minimumSum:16,successPoints:4,
                        positiveResponse:[this.pos,{character:this.character,text:"'...'"}],
                        negativeResponse:[this.neg,{character:this.character,text:"'...'"}]
                    },{
                        text:"I'm past such things.",minimumSum:18,successPoints:6,
                        positiveResponse:[this.pos,{character:this.character,text:"'...'"}],
                        negativeResponse:[this.neg,{character:this.character,text:"'...'"}]
                    },
                ],
                occured:false,
            },
            {
                dialogue:[{character:this.character,text:"'Prisoners always want something. Which is it?'"},],
                options:[
                    {
                        text:"The only thing I need is hope.",minimumSum:14,successPoints:3,
                        positiveResponse:[this.pos,{character:this.character,text:"'...'"}],
                        negativeResponse:[this.neg,{character:this.character,text:"'...'"}]
                    },{
                        text:"Give me some food, I'm starving.",minimumSum:17,successPoints:5,
                        positiveResponse:[this.pos,{character:this.character,text:"'...'"}],
                        negativeResponse:[this.neg,{character:this.character,text:"'...'"}]
                    },{
                        text:"Money.",minimumSum:19,successPoints:7,
                        positiveResponse:[this.pos,{character:this.character,text:"'...'"}],
                        negativeResponse:[this.neg,{character:this.character,text:"'...'"}]
                    },
                ],
                occured:false,
            },
            {
                dialogue:[{character:this.character,text:"'Hm... Let's play a game! Guess what I wanna eat!'"},],
                options:[
                    {
                        text:"A nice hot meal.",minimumSum:15,successPoints:3,
                        positiveResponse:[this.pos,{character:this.character,text:"'...'"}],
                        negativeResponse:[this.neg,{character:this.character,text:"'...'"}]
                    },{
                        text:"Something cold.",minimumSum:18,successPoints:6,
                        positiveResponse:[this.pos,{character:this.character,text:"'...'"}],
                        negativeResponse:[this.neg,{character:this.character,text:"'...'"}]
                    },{
                        text:"Shut up.",minimumSum:20,successPoints:8,
                        positiveResponse:[this.pos,{character:this.character,text:"'...'"}],
                        negativeResponse:[this.neg,{character:this.character,text:"'...'"}]
                    },
                ],
                occured:false,
            },
            {
                dialogue:[{character:this.character,text:"'I do not fear death, neither do I fear you.'"},],
                options:[
                    {
                        text:"Why are you telling me this?",minimumSum:11,successPoints:1,
                        positiveResponse:[this.pos,{character:this.character,text:"'...'"}],
                        negativeResponse:[this.neg,{character:this.character,text:"'...'"}]
                    },{
                        text:"That's a lie.",minimumSum:14,successPoints:3,
                        positiveResponse:[this.pos,{character:this.character,text:"'...'"}],
                        negativeResponse:[this.neg,{character:this.character,text:"'...'"}]
                    },{
                        text:"Quit acting though.",minimumSum:16,successPoints:4,
                        positiveResponse:[this.pos,{character:this.character,text:"'...'"}],
                        negativeResponse:[this.neg,{character:this.character,text:"'...'"}]
                    },
                ],
                occured:false,
            },
            {
                dialogue:[{character:this.character,text:"'I suggest you surrender yourself to the authorities.'"},],
                options:[
                    {
                        text:"This is a misunderstanding.",minimumSum:12,successPoints:2,
                        positiveResponse:[this.pos,{character:this.character,text:"'...'"}],
                        negativeResponse:[this.neg,{character:this.character,text:"'...'"}]
                    },{
                        text:"I don't have the time.",minimumSum:15,successPoints:3,
                        positiveResponse:[this.pos,{character:this.character,text:"'...'"}],
                        negativeResponse:[this.neg,{character:this.character,text:"'...'"}]
                    },{
                        text:"You've got the wrong idea.",minimumSum:17,successPoints:5,
                        positiveResponse:[this.pos,{character:this.character,text:"'...'"}],
                        negativeResponse:[this.neg,{character:this.character,text:"'...'"}]
                    },
                ],
                occured:false,
            },
            {
                dialogue:[{character:this.character,text:"'I like to occasionally reward myself for working hard. How would you do that?'"},],
                options:[
                    {
                        text:"Relax at home.",minimumSum:13,successPoints:2,
                        positiveResponse:[this.pos,{character:this.character,text:"'...'"}],
                        negativeResponse:[this.neg,{character:this.character,text:"'...'"}]
                    },{
                        text:"Go shopping in the nearby village.",minimumSum:16,successPoints:4,
                        positiveResponse:[this.pos,{character:this.character,text:"'...'"}],
                        negativeResponse:[this.neg,{character:this.character,text:"'...'"}]
                    },{
                        text:"Stop being selfish.",minimumSum:18,successPoints:6,
                        positiveResponse:[this.pos,{character:this.character,text:"'...'"}],
                        negativeResponse:[this.neg,{character:this.character,text:"'...'"}]
                    },
                ],
                occured:false,
            },
            {
                dialogue:[{character:this.character,text:"'If your parents could see you now, I'm sure it would break their hearts...'"},],
                options:[
                    {
                        text:"You might be right...",minimumSum:14,successPoints:3,
                        positiveResponse:[this.pos,{character:this.character,text:"'...'"}],
                        negativeResponse:[this.neg,{character:this.character,text:"'...'"}]
                    },{
                        text:"This doesn't involve them.",minimumSum:17,successPoints:5,
                        positiveResponse:[this.pos,{character:this.character,text:"'...'"}],
                        negativeResponse:[this.neg,{character:this.character,text:"'...'"}]
                    },{
                        text:"Actually, they'd rejoice.",minimumSum:19,successPoints:7,
                        positiveResponse:[this.pos,{character:this.character,text:"'...'"}],
                        negativeResponse:[this.neg,{character:this.character,text:"'...'"}]
                    },
                ],
                occured:false,
            },
            {
                dialogue:[{character:this.character,text:"'Look, at the end of the day, what are you trying to tell me?'"},],
                options:[
                    {
                        text:"I'm telling you to get out of my way.",minimumSum:15,successPoints:3,
                        positiveResponse:[this.pos,{character:this.character,text:"'...'"}],
                        negativeResponse:[this.neg,{character:this.character,text:"'...'"}]
                    },{
                        text:"Why are we here? Just to suffer?",minimumSum:18,successPoints:6,
                        positiveResponse:[this.pos,{character:this.character,text:"'...'"}],
                        negativeResponse:[this.neg,{character:this.character,text:"'...'"}]
                    },{
                        text:"I don't really know...",minimumSum:20,successPoints:8,
                        positiveResponse:[this.pos,{character:this.character,text:"'...'"}],
                        negativeResponse:[this.neg,{character:this.character,text:"'...'"}]
                    },
                ],
                occured:false,
            },
            {
                dialogue:[{character:this.character,text:"'Is it OK if I get mad right now?'"},],
                options:[
                    {
                        text:"Sure, go for it.",minimumSum:11,successPoints:1,
                        positiveResponse:[this.pos,{character:this.character,text:"'...'"}],
                        negativeResponse:[this.neg,{character:this.character,text:"'...'"}]
                    },{
                        text:"Please don't.",minimumSum:14,successPoints:3,
                        positiveResponse:[this.pos,{character:this.character,text:"'...'"}],
                        negativeResponse:[this.neg,{character:this.character,text:"'...'"}]
                    },{
                        text:"I'm not scared at all.",minimumSum:16,successPoints:4,
                        positiveResponse:[this.pos,{character:this.character,text:"'...'"}],
                        negativeResponse:[this.neg,{character:this.character,text:"'...'"}]
                    },
                ],
                occured:false,
            },
            {
                dialogue:[{character:this.character,text:"'Hey it's my birthday today! What do you have to say to that?'"},],
                options:[
                    {
                        text:"Happy birthday.",minimumSum:12,successPoints:2,
                        positiveResponse:[this.pos,{character:this.character,text:"'...'"}],
                        negativeResponse:[this.neg,{character:this.character,text:"'...'"}]
                    },{
                        text:"I had no idea.",minimumSum:15,successPoints:3,
                        positiveResponse:[this.pos,{character:this.character,text:"'...'"}],
                        negativeResponse:[this.neg,{character:this.character,text:"'...'"}]
                    },{
                        text:"GET OUT OF THE WAY!",minimumSum:17,successPoints:5,
                        positiveResponse:[this.pos,{character:this.character,text:"'...'"}],
                        negativeResponse:[this.neg,{character:this.character,text:"'...'"}]
                    },
                ],
                occured:false,
            },
            {
                dialogue:[{character:this.character,text:"'Hm... maybe I should notify the other guards.'"},],
                options:[
                    {
                        text:"Please don't.",minimumSum:13,successPoints:2,
                        positiveResponse:[this.pos,{character:this.character,text:"'...'"}],
                        negativeResponse:[this.neg,{character:this.character,text:"'...'"}]
                    },{
                        text:"It was self-defense.",minimumSum:16,successPoints:4,
                        positiveResponse:[this.pos,{character:this.character,text:"'...'"}],
                        negativeResponse:[this.neg,{character:this.character,text:"'...'"}]
                    },{
                        text:"Call them. I dare you.",minimumSum:18,successPoints:6,
                        positiveResponse:[this.pos,{character:this.character,text:"'...'"}],
                        negativeResponse:[this.neg,{character:this.character,text:"'...'"}]
                    },
                ],
                occured:false,
            },
            {
                dialogue:[{character:this.character,text:"'My chest is beating so fast. What is this feeling?'"},],
                options:[
                    {
                        text:"Are you alright?",minimumSum:14,successPoints:3,
                        positiveResponse:[this.pos,{character:this.character,text:"'...'"}],
                        negativeResponse:[this.neg,{character:this.character,text:"'...'"}]
                    },{
                        text:"You're making it up.",minimumSum:17,successPoints:5,
                        positiveResponse:[this.pos,{character:this.character,text:"'...'"}],
                        negativeResponse:[this.neg,{character:this.character,text:"'...'"}]
                    },{
                        text:"It's love.",minimumSum:19,successPoints:7,
                        positiveResponse:[this.pos,{character:this.character,text:"'...'"}],
                        negativeResponse:[this.neg,{character:this.character,text:"'...'"}]
                    },
                ],
                occured:false,
            },
            {
                dialogue:[{character:this.character,text:"'My horoscope said I was going to have relationship troubles today.'"},],
                options:[
                    {
                        text:"It's just a horoscope.",minimumSum:15,successPoints:3,
                        positiveResponse:[this.pos,{character:this.character,text:"'...'"}],
                        negativeResponse:[this.neg,{character:this.character,text:"'...'"}]
                    },{
                        text:"How is your luck in romance?",minimumSum:18,successPoints:6,
                        positiveResponse:[this.pos,{character:this.character,text:"'...'"}],
                        negativeResponse:[this.neg,{character:this.character,text:"'...'"}]
                    },{
                        text:"Looks like it came true.",minimumSum:20,successPoints:8,
                        positiveResponse:[this.pos,{character:this.character,text:"'...'"}],
                        negativeResponse:[this.neg,{character:this.character,text:"'...'"}]
                    },
                ],
                occured:false,
            },
            {
                dialogue:[{character:this.character,text:"'Prisoners these days are so self-assured that they will be successful in their future if they escape. Are you like that?'"},],
                options:[
                    {
                        text:"That's right.",minimumSum:11,successPoints:1,
                        positiveResponse:[this.pos,{character:this.character,text:"'...'"}],
                        negativeResponse:[this.neg,{character:this.character,text:"'...'"}]
                    },{
                        text:"That's not true.",minimumSum:14,successPoints:3,
                        positiveResponse:[this.pos,{character:this.character,text:"'...'"}],
                        negativeResponse:[this.neg,{character:this.character,text:"'...'"}]
                    },{
                        text:"What's wrong with that?",minimumSum:16,successPoints:4,
                        positiveResponse:[this.pos,{character:this.character,text:"'...'"}],
                        negativeResponse:[this.neg,{character:this.character,text:"'...'"}]
                    },
                ],
                occured:false,
            },
            {
                dialogue:[{character:this.character,text:"'I'm thinking... You're a good person, aren't you?'"},],
                options:[
                    {
                        text:"I get that a lot.",minimumSum:12,successPoints:2,
                        positiveResponse:[this.pos,{character:this.character,text:"'...'"}],
                        negativeResponse:[this.neg,{character:this.character,text:"'...'"}]
                    },{
                        text:"Actually... I'm bad.",minimumSum:15,successPoints:3,
                        positiveResponse:[this.pos,{character:this.character,text:"'...'"}],
                        negativeResponse:[this.neg,{character:this.character,text:"'...'"}]
                    },{
                        text:"Are you mocking me?",minimumSum:17,successPoints:5,
                        positiveResponse:[this.pos,{character:this.character,text:"'...'"}],
                        negativeResponse:[this.neg,{character:this.character,text:"'...'"}]
                    },
                ],
                occured:false,
            },
        ];
        this.situationCount = this.situations.length;
    }
}

