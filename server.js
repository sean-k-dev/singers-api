const express = require("express")
const cors = require("cors")
const app = express()
const PORT = 8000

app.use(cors())

const artists = {
    "utada hikaru" : {
        "name": "Utada Hikaru",
        "type": "Solo Artist",
        "placeofbirth": "New York, NY, USA",
        "dob": "1983/01/19",
        "wiki-page": "https://en.wikipedia.org/wiki/Hikaru_Utada",
        "members": 
            ["Utada Hikaru"],
        "albums": 
            ["Precious (as Cubic U)","First Love","Distance","Deep River","Exodus (as Utada)","Ultra Blue","Heart Station","This Is the One (as Utada)","Fantôme","Hatsukoi","Bad Mode"],
        "singles":
            ["Time Will Tell","Automatic","Movin' On Without You","First Love","Addicted to You","Wait & See (Risk)","For You","Time Limit","Can You Keep a Secret?","Final Distance","Traveling","Hikari","Sakura Drops","Letters","Colors","Dareka no Negai ga Kanau Koro","Easy Breezy (as Utada)","Devil Inside (as Utada)","Exodus '04 (as Utada)","Be My Last","You Make Me Want to Be a Man (as Utada)","Passion / Sanctuary","Keep Tryin'","This Is Love","Boku wa Kuma","Flavor of Life","Kiss & Cry","Beautiful World","Stay Gold","Heart Station","Prisoner of Love","Come Back to Me (as Utada)","Dirty Desire (as Utada)","Hymne à l'amour (Ai no Anthem)","Goodbye Happiness","Sakura Nagashi","Hanataba o Kimi ni","Manatsu no Tōriame","Michi","Ōzora de Dakishimete","Forevermore","Anata","Play a Love Song","Hatsukoi","Chikai / Don't Think Twice","Face My Fears","Time","Dare ni mo Iwa Nai","One Last Kiss","Pink Blood","Kimi ni Muchū"]
    },
    "survive said the prophet": {
        "name": "Survive Said The Prophet",
        "type": "Band",
        "placeofbirth": "N/A",
        "dob": "N/A",
        "wiki-page": "https://jpop.fandom.com/wiki/Survive_Said_The_Prophet",
        "members": 
            ["Yosh Morita","Ivan Kwong","Tatusya Kato","Sho Okada"],
        "albums": 
            ["Course of Action","FIXED","WABI SABI"," s p a c e 【 s 】","Inside Your Head"],
        "singles":
            ["MeIaM","COCOON","NE:ONE / HI | LO","found & lost","RED","Common Sense","Things Unsaid","Closure","MUKANJYO","Paper Sky｜Win/Lose"]
    },
    "one ok rock": {
        "name": "ONE OK ROCK",
        "type": "Band",
        "placeofbirth": "N/A",
        "dob": "N/A",
        "wiki-page": "https://en.wikipedia.org/wiki/One_Ok_Rock",
        "members": 
            ["Takahiro \"Taka\" Moriuchi","Toru Yamashita","Ryota Kohama","Tomoya \"Tomo\" Kanki"],
        "albums": 
            ["Zeitakubyō","Beam of Light","Kanjō Effect","Niche Syndrome","Zankyo Reference","Jinsei×Boku=","35xxxv","Ambitions","Eye of the Storm"],
        "singles":
            ["Naihi Shinsho","Yume Yume","Et Cetera","Koi no Aibō Kokoro no Cupid","Kanzen Kankaku Dreamer","Jibun Rock","Answer is Near","Re:make/No Scared","The Beginning","the same as...","Deeper Deeper/Nothing Helps","Clock Strikes","Mighty Long Fall/Decision","Cry Out","Last Dance","The Way Back - Japanese Version","Always Coming Back","Taking Off","Bedroom Warfare","I was King","We Are","American Girls","Skyfall","Change","Stand Out Fit In","Wasted Nights","Renegades","Broken Heart of Gold","Wonder"]
    },
    "lisa" : {
        "name": "LiSA",
        "type": "Solo Artist",
        "placeofbirth": "Seki, Gifu Prefecture, Japan",
        "dob": "1987/06/24",
        "wiki-page": "https://en.wikipedia.org/wiki/LiSA_(Japanese_musician,_born_1987)",
        "members": 
            ["Risa Oribe"],
        "albums": 
            ["Letters To You","Lover\"s\"mile","Landspace","Launcher","Little Devil Parade","Leo-Nine","Ladybug"],
        "singles":
            ["Oath Sign","Crossing Field","Best Day, Best Way","Träumerei","Rising Hope","Bright Flight","L. Miranic","Shirushi","Rally Go Round","Empty Mermaid","Brave Freak Out","Catch the Moment","Datte Atashi no Hero","Ash","Akai Wana (Who Loves It?)","Adamas","Gurenge","Unlasting","Homura","Dawn","Hadashi no Step","Akeboshi","Shirogane"]
    },
    "yoasobi" : {
        "name": "YOASOBI",
        "type": "Duo",
        "placeofbirth": "N/A",
        "dob": "N/A",
        "wiki-page": "https://en.wikipedia.org/wiki/Yoasobi",
        "members": 
            ["Ayase", "Ikura"],
        "extended_plays": 
            ["The Book","E-Side","The Book 2"],
        "singles":
            ["Yoru ni Kakeru","Ano Yume o Nazotte","Halzion","Tabun","Gunjō","Haruka","Kaibutsu","Yasashii Suisei","Mō Sukoshi Dake","Sangenshoku","Loveletter","Taishō Roman","Tsubame (featuring Midories)","Mr.","Suki da"]
    },
    "alexandros" : {
        "name": "[Alexandros]",
        "type": "Band",
        "placeofbirth": "N/A",
        "dob": "N/A",
        "wiki-page": "https://en.wikipedia.org/wiki/Alexandros_(band)",
        "members": 
            ["Yoohei Kawakami", "Hiroyuki Isobe", "Masaki Shirai", "Ib Riad"],
        "albums": 
            ["Where's My Potato?","I Wanna Go to Hawaii","Schwarzenegger","Me No Do Karate.","ALXD","EXIST!","Sleepless in Brooklyn"],
        "singles":
            ["City","You're So Sweet & I Love You","Ie","Spy","Kill Me If You Can","starrrrrr","Namida ga Koboresou","Forever Young","Run Away","Oblivion","Adventure","Droshky!","Wataridori","Dracula La","Girl A","New Wall","I Want U to Love Me","Swan","Snow Sound","Ima made Kimi ga Naita Bun Torimodoso","Ashita, Mata"]
    },
    "unknown": {
        "name": "No existing entry found for this query.",
        "status": "unknown",
        "placeofbirth": "unknown",
        "dob": "unknown",
        "wiki-page": "unknown",
        "members": ["unknown"],
        "albums": ["unknown"],
        "singles": ["unknown"]
    }
}


app.get("/",  (req, res) => {
    res.sendFile(__dirname + "/index.html")
})

app.get("/api", (req, res) => {
    res.json(artists)
})

app.get("/api/:artistname", (req, res) => {
    const name = req.params.artistname.toLowerCase()
    if (artists[name]) {
        res.json(artists[name])
        console.log("successfully obtained artist information")
    }
    else res.json(artists["unknown"])
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`The server is now active on Port ${PORT}.`)
})