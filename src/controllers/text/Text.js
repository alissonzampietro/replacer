const {find, replace} = require('../../constants/characters')
const fs = require('fs')
class Text {
    constructor() {

    }

    replaceSpecialCharacters() {
        let flag = false
        fs.readFile('../../data/input/file.txt','utf8',(err,data) => {
            if(flag == false) {
                v1 = data;
                flag = true;
            }
            for (var i = 0; i < find.length; i++) {
                console.log(data.replace(new RegExp(find[i], 'gi'), replace[i].toUpperCase()))
                v1 = v1.replace(new RegExp(find[i], 'gi'), replace[i].toUpperCase());
            }

            fs.writeFile('../../data/output/output.txt', v1,'utf8',(err) => {
                console.log(err)
            })
        })
        res.end("IT'S done");
    }
}

module.exports = Text