import { v4 as uuidv4 } from 'uuid';

function chillHop() {
    return [
        {
            id: uuidv4(),
            name: "Cabriolet",
            artist: "Plusma, Ben Bada Boom",
            cover: "https://cms.chillhop.com/media/55271/squarelfc12929e0fc98502a9ae1f1970bd79006ab343c7.jpg",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=49369",
            active: false,
            color: ['#C4B54E','#DEDFB7']
        },
        {
            id: uuidv4(),
            name: "Passing Time",
            artist: "Knowmadic",
            cover: "https://cms.chillhop.com/media/17948/squarel8d579581ccd8018204d5bf225385055c912cc261.jpg",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=41652",
            active: true,
            color: ['#CA4C62', '#E87989']
        },
        {
            id: uuidv4(),
            name: "After Hours",
            artist: "Poldoore",
            cover: "https://cms.chillhop.com/media/69886/squarel7ac48389287059be545bd9afb8afff550bb3fc63.jpg",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=36942",
            active: false,
            color: ['#C3141A','#BC1C22']
        },
        {
            id: uuidv4(),
            name: "A Reminder",
            artist: "Sleepy Fish, coa",
            cover: "https://cms.chillhop.com/media/13037/squarel70a56749b8b89815fa75446030c6ba57d2c34de7.jpg",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=36925",
            active: false,
            color: ['#004143','#02251F']
        },
        {
            id: uuidv4(),
            name: "New Places",
            artist: "J.Folk",
            cover: "https://cms.chillhop.com/media/4796/squarel8404541e3b694d16fd79433b142ed910f36764dd.jpg",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=43905",
            active: false,
            color: ['#53BD9F','#449886']
        }
    ]
}

export default chillHop;