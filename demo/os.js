const os =require('os')

console.log('Операционная система',os.platform())
console.log('Архитектура процессора:',os.arch())
console.log('Инфа о по процессорам',os.cpus())
console.log('свободная патмять', os.freemem())
console.log('всего патмяти', os.totalmem())
console.log('домашняя директория:',os.homedir())
console.log('включен:',os.uptime())