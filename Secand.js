// function logCurrentPath() {
//     const output = {
//         File: __filename,
//         Dir: __dirname
//     };
    
//     console.log(output);
// }
// logCurrentPath();
// console.log("=====================================================================================")
// const path = require('path');
// function getFileName(filePath) {
//     return path.basename(filePath);
// }
// const result = getFileName('/Assignments/Assignment2/secand.js');
// console.log(result); 
// console.log("==================================================");
// const path = require('path');
// function buildPath(pathObject) {
//     return path.format(pathObject);
// }
// const input = { dir: "/folder", name: "app", ext: ".js" };
// const result = buildPath(input);
// console.log(result); 
// console.log("=============================================================");
// const path = require('path');

// function getFileExtension(filePath) {
//     return path.extname(filePath);
// }
// const File = getFileExtension('/Assignments/Assignment2/secand.js');
// console.log(File);
// console.log("==============================================================");
// const path = require('path');
// function parsePath(filePath) {
//     const { name, ext } = path.parse(filePath);
//     return { name, ext };
// }
// const result = parsePath('/Assignments/Assignment2/secand.js');
// console.log(result); 
// console.log("=========================================================");
// const path = require('path');
// function checkAbsolute(filePath) {
//     return path.isAbsolute(filePath);
// }
// console.log(checkAbsolute('/Assignments/Assignment2/secand.js'));
// console.log(checkAbsolute('Assignment2/secand.js'));         
// console.log("===================================================================");     
// const path = require('path');
// function joinSegments(...segments) {
//     return path.join(...segments);
// }
// const result1 = joinSegments('user', 'files', 'projects', 'index.js');
// console.log(result1); 
// console.log("================================================");
// const path = require('path');
// function resolveToAbsolute(relativePath) {
//     return path.resolve(relativePath);
// }
// console.log(resolveToAbsolute('./secand.js')); 
// console.log("================================================");
// const path = require('path');

// function joinTwoPaths(path1, path2) {
//     return path.join(path1, path2);
// }
// console.log(joinTwoPaths('/folder1', 'folder2/file.txt'));
// console.log("================================================");
// const fs = require('fs');
// const path = require('path');
// filepath='C:/Route Courses/Assignments/Assignment2/secand.js';
// function deleteFileAsync(filepath) {
//     fs.unlink(filepath, (err) => {
//         if (err) {
//             console.error(`Error deleting file: ${err.message}`);
//             return;
//         }
//         console.log(`The file is deleted.`);
//     });
// }
// deleteFileAsync(filepath);
// console.log("================================================");
// const fs = require('fs');
// function createFolderSync(folderPath) {
//     try {
//         fs.mkdirSync(folderPath, { recursive: true }); 
//         return "Success";
//     } catch (err) {
//         return `Error: ${err.message}`;
//     }
// }
// console.log(createFolderSync('./new-folder'));
// console.log("=======================================================");
// const EventEmitter = require('events');
// const emitter = new EventEmitter();
// emitter.on('NEW', () => {
//     console.log('Welcome event triggered!');
// });

// emitter.emit('NEW');
// console.log("=======================================================");
// const EventEmitter = require('events');
// const emitter = new EventEmitter();
// emitter.on('login', (username) => {
//     console.log(`User logged in: ${username}`);
// });
// emitter.emit('login', 'Alzahraa');
// console.log("=======================================================");
// const fs = require('fs');
// function readFileSyncAndLog(filePath) {
//     try {
//         const content = fs.readFileSync(filePath, 'utf8');
//         console.log(`the file content => “${content}”`);
//     } catch (err) {
//         console.error(`Error reading file: ${err.message}`);
//     }
// }
// readFileSyncAndLog('./Readdd.txt');
// console.log("==================================================");
// const fs = require('fs');
// function writeFileAsync(filePath, content) {
//     fs.writeFile(filePath, content, 'utf8', (err) => {
//         if (err) {
//             console.error(`Error writing file: ${err.message}`);
//             return;
//         }
//         console.log('File saved successfully asynchronously.');
//     });
// }
// writeFileAsync("./Readdd.txt", "Readdd save");
// console.log("======================================");
// const fs = require('fs');
// function checkDirectoryExists(dirPath) {
//     return fs.existsSync(dirPath);
// }
// console.log(checkDirectoryExists("./Readdd.txt"));
// console.log("======================================");
// const os = require('os');
// function getOSDetails() {
//     return {
//         Platform: os.platform(),
//         Arch: os.arch()
//     };
// }
// // console.log(getOSDetails()); 
// # 1. Stage all changed and new files for commit
// git add .

// # 2. Save your changes locally with a descriptive message
// git commit -m "Your commit message here"

// # 3. Ensure your local branch is named 'main'
// git branch -M main

// # 4. Upload the files to the 'main' branch on the remote server
// git push -u origin main