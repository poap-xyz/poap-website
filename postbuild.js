const fs = require('fs');
const fse = require('fs-extra');

const srcDir = `public/events`;
const destDir = `dist/events`;
// To copy a folder or file  
fse.copy(srcDir, destDir, function (err) {
  if (err) {
    console.error(err);
  } else {
    console.log(`Copied ${srcDir} to ${destDir}`);
  }
});

const srcFile = `public/_redirects`;
const destFile = `dist/_redirects`;
fs.copyFile(srcFile, destFile, function (err) {
  if (err) {
    console.error(err);
  } else {
    console.log(`Copied ${srcDir} to ${destDir}`);
  }
});
