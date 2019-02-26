var fs = require('fs');
var process_argv = process.argv;

var buf = fs.readFileSync(process_argv[2]);
var text = buf.toString();


var cont = 0;
for (let i = 0; i < text.length; i++) {

    if (text[i] == '\n') {
        cont++;
    }
    
    if (i == text.length - 1) console.log(cont);
    
}

