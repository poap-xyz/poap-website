const fs = require('fs');

// directory path
const dir = 'dist';

const dirExists = fs.existsSync(dir);
if (dirExists) {
  // delete directory recursively
  fs.rm(dir, { recursive: true }, (err) => {
    if (err) {
      throw err;
    }
    console.log(`${dir} is deleted`);
  });
}
