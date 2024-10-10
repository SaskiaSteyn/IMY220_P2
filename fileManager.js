const fs = require('fs');

function fileRead(){
    try {
        const data = fs.readFileSync('events.json', 'utf8');
        console.log(data);
        return data;
      } catch (err) {
        console.error(err);
      }
}

function fileWrite(content){
    try {
    fs.writeFileSync('newEvents.json', content);
    } catch (err) {
    console.error(err);
    }
}

module.exports = {
    fileRead,
    fileWrite
};