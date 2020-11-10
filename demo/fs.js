//File system
const fs = require('fs')
const path = require('path')
// fs.mkdir(path.join(__dirname,'test'),(err)=>{
//     if (err){
//         throw err
//     }
//     console.log('Папка создана')
// })


// fs.writeFile(filePath,'hi',(err)=>{
//     if (err){
//         throw err
//     }
//     console.log('file create')
// })
// fs.appendFile(filePath,'hi appendFile',(err)=>{
//     if (err){
//         throw err
//     }
//     console.log('file create')
// })

const filePath = path.join(__dirname, 'test', "text.txt")
fs.readFile(filePath, 'utf-8',(err, content) => {
    if (err){
        throw err
    }
    // const data = Buffer.from(content)
    // console.log(content.toString())
    console.log(content)
})
