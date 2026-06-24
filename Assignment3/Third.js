// const fs = require('fs');
// const path = require('path');
// const filePath = path.join(__dirname, ' File3.txt');
// const readStream = fs.createReadStream(filePath, { 
//     encoding: 'utf8',
//     highWaterMark: 16 * 1024,
// });
// readStream.on('open', () => {
//     console.log("File is OPened");
// });
// readStream.on('data', (chunk) => {
//     console.log('Chunk is Done');
//     console.log(chunk);
// });

// readStream.on('end', () => {
//     console.log('Finish Reading');
// });
// readStream.on('error', (err) => {
//     console.error('An error occurred:', err.message);
// });
// //C:\Route Courses\Assignments\Assignment3\Third.js
// //Assignments/Assignment3/Third.js
// console.log("========================================");
// const fs = require('fs');
// const path = require('path');
// const sourcePath = path.join(__dirname, 'source.txt');
// const destPath = path.join(__dirname, 'destination.txt');
// const readStream = fs.createReadStream(sourcePath);
// const writeStream = fs.createWriteStream(destPath);

// readStream.pipe(writeStream);
// writeStream.on('finish', () => {
//     console.log('File copied Seccessfully');
// });
// readStream.on('error', (err) => {
//     console.error('Read stream error:', err.message);
// });
// writeStream.on('error', (err) => {
//     console.error('Write stream error:', err.message);
// });
// console.log("==========================================");
const express = require('express');
const fs = require('fs').promises; // For reading/writing files using async/await
const { existsSync, writeFileSync } = require('fs'); // For initial file checking
const path = require('path');
const app = express();
app.use(express.json());
const FILE_PATH = path.join(__dirname, 'users.json');
if (!existsSync(FILE_PATH)) {
    writeFileSync(FILE_PATH, '[]', 'utf8');
}
app.get('/user/:id', async (req, res) => {
    const userId = req.params.id; // Extract the ID from the URL path
    try {
        const data = await fs.readFile(FILE_PATH, 'utf8');
        const users = JSON.parse(data);
        const user = users.find(u => u.id.toString() === userId);

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        return res.status(200).json(user);
    } catch (error) {
        console.error("Server Error:", error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.post('/user', async (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({ error: 'Name, email, and password are required' });
    }

    try {
        const data = await fs.readFile(FILE_PATH, 'utf8');
        const users = JSON.parse(data);

        const emailExists = users.some(user => user.email === email);
        if (emailExists) {
            return res.status(400).json({ error: 'A user with this email already exists' });
        }

        const newUser = { id: Date.now(), name, email, password };
        users.push(newUser);
        
        await fs.writeFile(FILE_PATH, JSON.stringify(users, null, 2), 'utf8');
        return res.status(201).json({ message: 'User created successfully', user: newUser });

    } catch (error) {
        console.error("Server Error:", error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
});
app.patch('/user/:id', async (req, res) => {
    const userId = req.params.id;
    const { name, email, password } = req.body;

    if (!name && !email && !password) {
        return res.status(400).json({ error: 'Please provide at least one field to update (name, email, or password)' });
    }

    try {
        const data = await fs.readFile(FILE_PATH, 'utf8');
        const users = JSON.parse(data);

        const userIndex = users.findIndex(user => user.id.toString() === userId);

        if (userIndex === -1) {
            return res.status(404).json({ error: 'User not found' });
        }

        if (email) {
            const emailExists = users.some((user, index) => user.email === email && index !== userIndex);
            if (emailExists) {
                return res.status(400).json({ error: 'This email is already taken by another user' });
            }
        }

        if (name) users[userIndex].name = name;
        if (email) users[userIndex].email = email;
        if (password) users[userIndex].password = password;

        await fs.writeFile(FILE_PATH, JSON.stringify(users, null, 2), 'utf8');

        return res.status(200).json({ 
            message: 'User updated successfully', 
            user: users[userIndex] 
        });

    } catch (error) {
        console.error("Server Error:", error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
});
app.delete('/user/:id', async (req, res) => {
    const userId = req.params.id;

    try {
        const data = await fs.readFile(FILE_PATH, 'utf8');
        const users = JSON.parse(data);

        const userExists = users.some(user => user.id.toString() === userId);
        if (!userExists) {
            return res.status(404).json({ error: 'User not found' });
        }

        const filteredUsers = users.filter(user => user.id.toString() !== userId);
        await fs.writeFile(FILE_PATH, JSON.stringify(filteredUsers, null, 2), 'utf8');

        return res.status(200).json({ message: 'User deleted successfully from file' });

    } catch (error) {
        console.error("Server Error:", error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
});
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running smoothly on port ${PORT}`);
});
// # 1. Stage all changed and new files for commit
// git add .

// # 2. Save your changes locally with a descriptive message
// git commit -m "Your commit message here"

// # 3. Ensure your local branch is named 'main'
// git branch -M main

// # 4. Upload the files to the 'main' branch on the remote server
// git push -u origin main