
$(function() {

    // Populate using an object literal

     WTF.init({

         heading: [
             "It's a fucking",
             "Check this shit out, a fucking",
             "Chill the fuck out, it's just a gorram",
             "Roll me a fuckin"
         ],
         response: [
             "Already fucking seen one",
             "Give me a-fucking-nother one",
             "Don't really give a fuck",
             "Giving no fucks about this shit",
             "Dammit all to hell"
         ],
         template: [
             "@trait @race @class from @place",
             "@theme @race who @background",
             "@theme @class who @background",
             "@trait @theme @class from @place"
         ],
         trait: [
             "compassionate",
             "foul-mouthed",
             "argumentative",
             "diplomatic",
             "contemplative",
             "sassy",
             "short-tempered",
             "infinitely patient",
             "parental",
             "loving",
             "gentle",
             "tender",
             "sensitive-souled",
             "bleeding-heart",
             "judgemental",
             "fashionable",
             "overthinking",
             "brainless",
             "bombastic",
             "tempermental",
             "delusional",
             "wannabe-therapist",
             "hippy",
             "grungy",
             "always lost",
             "confused",
             "accursed",
             "bouncy",
             "energetic",
             "spirited",
             "defiant",
             "smelly",
             "sanctimonious",
             "pompous",
             "ass-faced",
             "falling-down drunk",
             "bestial",
             "kinky",
             "lecherous",
             "looming",
             "ecstatic",
             "gnarly",
             "innocent",
             "head-in-the-clouds",
             "loopy",
             "reality-challenged",
             "short as fuck",
             "tall as fuck",
             "burly",
             "diseased",
             "pox-ridden",
             "mute",
             "blind",
             "deaf",
             "hard-of-hearing",
             "whiny",
             "cursed",
             "blessed",
             "insensitive",
             "obtuse",
             "obnoxious",
             "oblivious",
             "fratboy",
             "collegiate",
             "studious",
             "en-fucking-lightened",
             "sneezy",
             "dopey",
             "grinning",
             "grumpy",
             "sleepy",
             "narcoleptic",
             "curmudgeonly",
             "old as balls",
             "balding",
             "shy",
             "hesitant",
             "anxious",
             "desperate",
             "know-it-all",
             "tightfisted",
             "ham-fisted",
             "hammy",
             "awkward",
             "hella superstitious"
        ],
        race: [
            "android",
            "human",
            "kasatha",
            "lashunta",
            "shirren",
            "vesk",
            "ysoki",
            "elf",
            "dwarf",
            "gnome",
            "half-orc",
            "half-elf",
            "halfling",
            "contemplative",
            "space goblin",
            "skittermander",
            "maraquoi",
            "ikeshti",
            "nuar",
            "necrovite",
            "ryphorian",
            "wrikreechee",
            "gray",
            "drow",
            "space orc"
        ],
         theme: [
            "ace pilot",
            "bounty hunter",
            "icon",
            "mercenary",
            "outlaw",
            "priest",
            "scholar",
            "spacefarer",
            "xenoseeker"
        ],
        class: [
            "envoy",
            "mechanic",
            "mystic",
            "operative",
            "solarian",
            "soldier",
            "technomancer"
        ],
        background: [
            "was birthed on a starship and will die on a fucking starship",
            "ran away from home to join the spacefaring circus and look where that fucking got us",
            "joined the gorram military and wound up on the wrong side of a corporate fucking war",
            "always seems to have extra fucking food",
            "can usually be found at a fucking space gym because every day is smite day yo",
            "discovered YOLO three thousand years too late to be hip but won't let it go",
            "wants to be the first to fuck that new alien species for bragging rights",
            "never hedges a fucking bet because GO BIG OR GO HOME LOSER",
            "watches too much Mean Girls and constantly makes references to it that fuckin nobody gets",
            "got kicked out of the gorram military and just wants to live in peace kthanx",
            "has finally finished fucking university and is driven to change the fucking world",
            "wants TO UNITE THE WORLD IN DEVASTATION",
            "is driven to create the perfect fuckin utopia but in a winter aesthetic because fuck the sun",
            "just wants to be fuckin useful for a change",
            "grew up an orphan on the shittiest streets imaginable",
            "secretly has a couple of fuckin households to support",
            "has a serious baking fetish",
            "fuckin loves cats and goes to pieces over anything that's cute n furry",
            "is a huge fuckin furry", 
            "is having a mid-life crisis", 
            "is going to enjoy the fuck out of retirement from the corporate sector",
            "has always wanted to travel offworld and has no fucking idea what they're in for",
            "used to be a major fuckin celebrity and is looking for a comeback",
            "has never met a fuckin pun they don't like",
            "ran away from fuckin foster parents who were rad but didn't understand them",
            "never met a battle they didn't want to fight",
            "is cursed to always speak in iambic pentameter and is a real ass about it",
            "spends way too fuckin long in the bathroom in the morning",
            "is working to overcome an addiction to illict fuckin drugs with the power of memes",
            "sings all the gorram time but at least it's in the right key",
            "can't carry a fuckin tune in a bucket but sings all the gorram time anyway",
            "watches trashy reality television competitions in between missions and keeps fuckin quoting them",
            "is just in it for the money to pay off these fuckin student loans",
            "would rather be solar surfing and won't fuckin shut up about their sweet board",
            "used to be a big fuckin name in extreme sportsball and hasn't moved on",
            "doesn't approve of uncouth language or mannerisms and will never let you forget it",
            "embraces whatever evo-psych bullshit appeals most and uses it to be a total fuckin animal",
            "is a HUGE FUCKIN NERD about at least three things that are never relevant to the gorram situation",
            "is a snot-nosed teenager with bad acne and an even worse attitude",
            "escaped being smuggled as live cargo offplanet and has a fuckin axe to grind",
            "takes family honor way fuckin seriously",
            "cooked for the gorram military and isn't taking your shit about haute cuisine",
            "thinks that if you've gotta be a fuckin mall cop better be the best gorram mall cop out there",
            "worked private security once and found it too fuckin chill",
            "has an epic fuckin rivalry with a fellow academic for whom no insult is too gorram petty",
            "was abducted by fuckin aliens they swear to all the gods",
            "is a gorram conspiracy theorist",
            "got fuckin stranded once on a tourist visa and has vowed vengeance against the travel agency",
            "can't be taken fuckin anywhere",
            "is outcast from the high society of their fuckin birth and gorram proud of it",
            "joined a local fuckin gang of their own volition and will cut a bitch",
            "was raised in a gorram cult and barely escaped with their life",
            "actually was raised on a fuckin farm, thank you very fucking much",
            "was created in a fuckin laboratory and just has a few fuckin issues okay",
            "is on the run from a corrupt corporate government and would a little fuckin discretion be too much to ask for",
            "defied the fuckin government and was forced to claim asylum offworld",
            "got tired of cleaning fucking houses but'll still clean your gorram clock you bastard",
            "escaped bond-slavery to a fuckin children's entertainment network and is out for fuckin blood",
            "will be performing your fuckin anal probe today so smile and relax",
            "has a quota to meet so why don't you fuckin join this cult already",
            "races professionally and refuses to ride fuckin shotgun ever",
            "is an actual fuckin rocket scientist", 
            "writes fuckin backmatter for scores of role-playing games in their gorram precious spare time",
            "got separated from their fuckin space circus troupe and has nowhere to put this gorram trapeze",
            "despite all their rage is still just a fuckin rat in a cage",
            "has a severe phobia of bugs",
            "writes the best gorram TPS reports you ever fuckin saw",
            "could have taken a fuckin plum position as CEO of daddy's company but gave it all up for love and has no regrets",
            "makes side credit as a fuckin corporate ambassador and eats sleeps and breathes the brand",
            "has won Witch Weekly's Most Amazing Smile Award five years running",
            "is a prime fuckin example of the reason why the rogue and the bard should never go off on their own",
            "began life as a fuckin clone but is living large now that the original has gone mysteriously missing",
            "secretly writes some of the filthiest fuckin smut and has made millions at it",
            "is addicted to the thrill of clinical test patient roulette ",
            "thought that a flight attendant would be less fuckin stressful than this gorram hot mess",
            "decided to get some Drift mileage out of being a travel writer and seriously fuckin regrets it",
            "is still lookin for the fuckin gold at the end of the space rainbow",
            "used to work as a stunt double but got put out of work by disposable clones and is gorram salty about it",
            "used to work in government and is disillusioned as fuck",
            "once got locked into a literal fuckin war zone on a journalism assignment and regrets fuckin EVERYTHING",
            "is a hopeless fuckin romantic and a total sap",
            "was a former winning contestant on an epically brutal survival reality television series and has no fucks left",
            "used to be a fuckin debt collector and is rumoured to be out for one last bounty",
            "majored in fuckin political science AND underwater basket-weaving of the 21st century",
            "is a fuckin librarian dedicated to freedom of information DON'T FUCKIN CROSS THEM",
            "always seems to be the fuckin center of attention and claims it's a curse",
            "just wants to pilot a big fuckin robot and save the gorram Pact Worlds already",
            "once looked into the fuckin void and will go existential on your ass",
            "suffers from Jekyll-Hyde Syndrome and doesn't fuckin realize it",
            "has friends in some real fuckin low places",
            "is a real fuckin snob about space coffee",
            "has always wanted to be a fuckin mad scientist",
            "is so fuckin vain about their appearance that even their friends wanna smash their face in sometimes",
            "can be real fuckin cultured when duty calls but otherwise is a total mess",
            "cleans up real fuckin nice and you'd never recognize them",
            "once got hit in the face by a fuckin' pop star and still gets heart-eyes just thinking about it",
            "is real handy with pipes and conductors and shit but never fuckin flosses",
            "always attracts an entourage of fuckin local wildlife",
            "wasn't even supposed to fuckin be here today",
            "proudly uses their fuckin wanted-for-arrest photo as their social media avatar",
            "once got stuck in a giant fuckin tree and won't offer any more deets",
            "keeps a fuckin skycycle-riding alligator as a gorram pet",
            "can't resist an opportunity to pull a fuckin prank",
            "once ate their weight in chili dogs on a dare",
            "once got so fuckin skunked they went streaking, broke into a neighbor's house, and bit their pet",
            "is undoubtedly the kind of person who'd have a giant metal dong for a mailbox",
            "once chased off a stalker at a bagel shop by throwing a fuckin live squid at them",
            "could crush your fuckin skull like sparrow's eggs between their thighs",
            "earned a place in the fuckin Pact World Records by being part of the galaxy's largest bikini photoshoot",
            "claims to have broken the Pact World record for longest kiss",
            "fuckin stutters under duress",
            "carries a personal squeeze tube of hot sauce at all fuckin times",
            "is a total fuckin wuss about heights",
            "deliberately encourages others to underestimate them because it's all part of the fuckin plan",
            "gets real fuckin excited about existential horrors",
            "always carries two or three fuckin knitting projects",
            "kinda sounds like their voicebox got run over by a fuckin starship",
            "has been planet-hopping for ten fuckin years looking for their lost fuckin memories",
            "has a real fuckin aversion to wearing shoes",
            "sells fuckin handmade candles and shit on space etsy",
            "constantly overestimates their own fuckin abilities",
            "won't hesitate to interrupt a mission to satisfy that fuckin sweet tooth of theirs",
            "was cursed by a fuckin dark fairy because their gorram parents didn't think it was important to invite her to their christening",
            "claims their birth was fuckin prophesied or some shit",
            "claims to be a fuckin reincarnation of a recently-deceased but hella popular holovid star",
            "studied at a real fuckin fancy academy in their youth",
            "has already had to be resurrected once and hasn't fuckin walked properly since",
            "is always tinkering with shit on the starship",
            "doesn't fuckin know the meaning of impossible",
            "once ran afoul of a fuckin intergalactic crime boss",
            "really does have an evil fuckin twin",
            "IS the fuckin evil twin",
            "survived not one, not two, but THREE fuckin starship wrecks that killed everyone else on board",
            "fuckin loves their regular space gym, space tan, space laundry days",
            "is part of a fuckin relationship polycule that's threatening to envelop an entire space station",
            "has too many fuckin siblings to count",
            "never fuckin remembers to send a gorram card",
            "believes in the heart of the fuckin cards",
            "takes first seat in violin with the Strings of Old Golarion Symphony",
            "loves the kind of person who can kick their ass, and is a huge fuckin flirt in combat",
            "is rumoured to have been the fuckin enforcer for a crime syndicate",
            "claims to fuckin hate kids and animals, but has a less-than-secret soft spot for kids and animals",
            "believes life's a fuckin dream from which everyone eventually wakes up when they die",
            "has a fuckin cyborg arm after a brutal barroom brawl",
            "is a real fuckin Renaissance figure",
            "always wears a pair of goggles",
            "was accidentally orphaned by their fuckin mad genius father for a couple years",
            "used to tour in a spacepunk garage band and can still strum a few fuckin chords"
        ],
        place: [
            "a sunken city",
            "your mom's hairy armpit",
            "a pastoral farm",
            "a fancy-fuckin-schmancy university",
            "Space New York City",
            "the marshes",
            "the mountains",
            "the other mountains",
            "the lowlands",
            "the highlands",
            "an abandoned wasteland",
            "the city by the bay",
            "a tenement in a canyon wall",
            "a big happy fuckin family",
            "a ragtag crew of misfits",
            "an island",
            "an archipelago",
            "the Burning Archipelago",
            "offworld",
            "a generation ship",
            "who-even-knows",
            "a vibrant city",
            "a run-down suburb",
            "a struggling rural village",
            "a corporate farm",
            "a pristine marine ecosystem",
            "the Spike",
            "the Spire",
            "a lawless vagabond camp",
            "Space Tortuga",
            "the wrong side of the tracks",
            "the dark side of the moon",
            "Aballon",
            "Absalom Station",
            "Akiton",
            "Apostae",
            "Arkanen",
            "Arquand",
            "Aucturn",
            "Azlanti Star Empire",
            "Bretheda",
            "Castrovel",
            "Cynosure",
            "Daegox 4", 
            "Daimalko",
            "Embroi",
            "Eox",
            "Golarion",
            "Hallas",
            "Idari",
            "Ironstar",
            "Jedarat",
            "Kalo-Mahoi",
            "Kasath",
            "Lausill",
            "Liavara",
            "Lothun",
            "Marata",
            "Melos",
            "Nchak",
            "Orikolai",
            "Orry",
            "Osoro",
            "Preluria",
            "Riven Shroud",
            "Shadari",
            "Tabori Cluster",
            "Taru Seco",
            "The Diaspora",
            "The Veskarium",
            "Thyst",
            "Triaxus",
            "Varos",
            "Verces",
            "Xio",
            "Chamari",
            "a bathhouse",
            "the spirit world"
        ]
    });

    // Populate using a JSON file
    // WTF.init( 'sample.json' );

    // Populate using a Google spreadsheet ID (you must publish it first!)
    // @see https://support.google.com/drive/answer/37579?hl=en
    // WTF.init( '0AvG1Hx204EyydF9ub1M2cVJ3Z1VGdDhTSWg0ZV9LNGc' );

});
