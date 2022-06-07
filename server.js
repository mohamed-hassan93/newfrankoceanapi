const express = require('express');
const app = express();
const port = 5700

const albums = {
    'nostalgia': {
        'song1': [1, 'Strawberry Swing', '3:55'],
        'song2': [2, 'We All Try', '2:51'],
        'song3': [3, 'Lovecrimes', '4:00'],
        'song4': [4, 'Swim Good', '4:16'],
        'song5': [5, 'American Wedding', '7:00'],
        'song6': [6, 'Novacane', '5:02'],
        'song7': [7, 'Songs 4 Women', '4:13'],
        'song8': [8, 'There Will Be Tears', '3:14'],
        'song9': [9, 'Dust', '2:33'],
        'song10': [10, 'Nature Feels', '3:43']
    },

    'channel orange': {
        'song1': [1, 'Start', '0:45'],
        'song2': [2, 'Thinking Bout You', '3:21'],
        'song3': [3, 'Fertilizer', '0:39'],
        'song4': [4, 'Sierra Leone', '2:28'],
        'song5': [5, 'Sweet Life', '4:22'],
        'song6': [6, 'Not Just Monday', '1:00'],
        'song7': [7, 'Super Rich Kids', '5:04'],
        'song8': [8, 'Pilot Jones', '3:04'],
        'song9': [9, 'Crack Rock', '3:44'],
        'song10': [10, 'Pyramids', '9:53'],
        'song11': [11, 'Lost', '3:54'],
        'song12': [12, 'White', '1:16'],
        'song13': [13, 'Monks', '3:20'],
        'song14': [14, 'Bad Religion', '2:55'],
        'song15': [15, 'Pink Matter', '4:28'],
        'song16': [16, 'Forrest Gump', '3:15'],
        'song17': [17, 'End', '2:14'],
        'song18': [18, 'Golden Girl', '4:59']
    },

    'blond': {
        'song1': [1, 'Nikes', '3:55'],
        'song2': [2, 'Ivy', '2:51'],
        'song3': [3, 'Pink + White', '4:00'],
        'song4': [4, 'Be Yourself', '4:16'],
        'song5': [5, 'Solo', '7:00'],
        'song6': [6, 'Skyline To', '5:02'],
        'song7': [7, 'Self Control', '4:13'],
        'song8': [8, 'Good Guy', '3:14'],
        'song9': [9, 'Nights', '2:33'],
        'song10': [10, 'Solo (Reprise)', '3:43'],
        'song11': [11, 'Pretty Sweet', '3:54'],
        'song12': [12, 'Facebook Story', '1:16'],
        'song13': [13, 'Close To You', '3:20'],
        'song14': [14, 'White Ferrari', '2:55'],
        'song15': [15, 'Seigfried', '4:28'],
        'song16': [16, 'Godspeed', '3:15'],
        'song17': [17, 'Futura Free', '2:14']
    },

    'unknown': {
        'song1': ['unknown', 'unknown', 'unknown']
    }

    
    
}


app.get('/', (req,res)=>{
    res.sendFile(__dirname+'/index.html')
    console.log('we here boyyyyy')
})


app.get('/api/:album', (req,res)=>{
    const albumTitle = req.params.album.toLowerCase();
    console.log(albums[albumTitle])
    if(albums[albumTitle]){
        res.json(albums[albumTitle])
    }else{
        res.json(albums['unknown'])
    }
})

app.listen(port,() => {
    console.log(`we here boyyyyy port: ${port}, let goooooooo`)
})
