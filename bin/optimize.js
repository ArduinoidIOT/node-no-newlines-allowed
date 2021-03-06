
const csso = require('csso')

/* ------------------------------------------- General ------------------------------------------ */

const fs = require('fs')

/* ---------------------------------------------------------------------------------------------- */
/*                                        READ DIRECTORIES                                        */
/* ---------------------------------------------------------------------------------------------- */

var myArgs = process.argv.slice(2).map(optimizeFile);

/* ---------------------------------------------------------------------------------------------- */
/*                                             METHODS                                            */
/* ---------------------------------------------------------------------------------------------- */

async function optimizeFile(file) {
    if (file.endsWith(".css")) {
        fs.readFile(file, 'utf-8', (err, data) => {
            var optimized = csso.minify(data).css
            fs.writeFile(file, optimized, err => {})
        })
    }
}