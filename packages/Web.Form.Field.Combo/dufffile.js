const { Module } = require("@atomicburst/build");
const path = require("path");
module.exports = new Module({
    "id": "@atomicburst/web.form.field.combo",
    "path": path.resolve(__dirname),
    "watcher": {
        "include": [

            "./atemdimento.tsx",
            "./src/**/*.tsx",
            "./index.ts",
            "./src/**/*.ts",
            "./sass/**/*.sass",
            "./scss/**/*.sass",
            "./sass/**/*.scss",
            "./scss/**/*.scss"
        ]
    }
})
