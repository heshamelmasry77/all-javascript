'use strict'

const fs = require('fs');

const buf = Buffer.alloc(6);

fs.open('test.txt', 'r', (err, fd) => {
    if (err) {
        console.error(err);
        return;
    }

    // read 10-15 bytes inclusively
    fs.read(fd, buf, 0, buf.length, 10, function (err, bytes) {

        if (err) {
            console.error(err);
            return;
        }

        console.log(buf.slice(0, bytes).toString());

    });

    fs.close(fd, function (err) {
        if (err) {
            console.error(err);
            return;
        }
    })

});