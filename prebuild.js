const fs = require('fs');

// directory path
const dir = 'dist';

// delete directory recursively
fs.rmdir(dir, { recursive: true }, (err) => {
    if (err) {
        throw err;
    }
    console.log(`${dir} is deleted`);
});