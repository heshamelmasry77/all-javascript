'use strict'

const buf = Buffer.alloc(100); 

for (var i = 0; i < 100; i++) {
    buf[i] = i;
}

console.log(buf);
console.log('Buffer converted to string: ' + buf.toString());
