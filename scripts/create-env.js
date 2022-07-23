const fs = require('fs');

fs.writeFileSync('./.env', `API=${process.env.API ? process.env.API : "https://randomuser.me/api/"}\n`)