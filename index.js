const express = require('express')
const app = express()
const fs = require('fs')


app.get('/', (req, res) => {
    var find = ["ã","à","á","ä","â","è","é","ë","ê","ì","í","ï","î","ò","ó","ö","ô","ù","ú","ü","û","ñ","ç"];
    var replace = ["a","a","a","a","a","e","e","e","e","i","i","i","i","o","o","o","o","u","u","u","u","n","c"];

    fs.readFile('./input/file.txt','utf8',(err,data) => {
        for (var i = 0; i < find.length; i++) {
            console.log(data.replace(new RegExp(find[i], 'gi'), replace[i].toUpperCase()))
            v1 = data || v1
            v1 = data.replace(new RegExp(find[i], 'gi'), replace[i].toUpperCase());
        }

        fs.writeFile('./output/output.txt', v1,'utf8',(err) => {
            console.log(err)
        })


    })
    res.end("IT'S done");
})

app.listen(8083, () => {
    console.log('Funcionando na porta 8083')
});