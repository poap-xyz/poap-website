const fs = require('fs');
const fse = require('fs-extra');

// Add any folder from the `public` folder to be copied
const publicFolders = ['events', '.well-known',];
for (let i = 0; i < publicFolders.length; i++) {
  const srcDir = `public/${publicFolders[i]}`;
  const destDir = `dist/${publicFolders[i]}`;
  // To copy a folder or file
  fse.copy(srcDir, destDir, function (err) {
    if (err) {
      console.error(err);
    } else {
      console.log(`Copied ${srcDir} to ${destDir}`);
    }
  });
}

// Add any file from the `public` folder to be copied
const publicFiles = ['_redirects',];
for (let i = 0; i < publicFiles.length; i++) {
  const srcFile = `public/${publicFiles[i]}`;
  const destFile = `dist/${publicFiles[i]}`;
  fs.copyFile(srcFile, destFile, function (err) {
    if (err) {
      console.error(err);
    } else {
      console.log(`Copied ${srcFile} to ${destFile}`);
    }
  });
}

