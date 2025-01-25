After extensive investigation, I discovered that the issue was caused by a corrupted `.expo` directory within the problematic project.  Deleting the `.expo` directory and restarting the development server solved the problem. 

```javascript
// This file is not directly related to the bug, but shows a solution
// To reproduce the bug, create a project with expo init and then try to delete .expo folder, start the server and see the error
// In the solution, we remove the .expo folder and then restart the server
const fs = require('node:fs');
const path = require('node:path');

const projectDir = '.';
const expoDir = path.join(projectDir, '.expo');

if (fs.existsSync(expoDir)) {
  fs.rmSync(expoDir, { recursive: true, force: true });
  console.log('.expo directory removed successfully.');
} else {
  console.log('.expo directory not found.');
}

console.log('Restart your expo development server.');
```
The solution involves deleting the `.expo` folder, which contains cached information and temporary files. By removing this folder, Expo CLI will regenerate necessary information, resolving the issue. It is important to note that this will not affect your source code.