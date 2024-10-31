const fs = require('fs')

fs.readFile('sampletext.txt', 'utf8', (err, data) =>{
    if (err) {
        console.log(err);
        return;
    }
    console.log(data);
})