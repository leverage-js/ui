const fs = require('fs');

function bustBrowserCache(compiler) {
    return compiler.hooks.afterEmit.tap('Bust browser cache', generateIndexFile);
}

function generateIndexFile(compilation) {
    const indexTemplateFilename = __dirname + '/../web/index-template.html';
    const indexFilename = __dirname + '/../web/index.html';
    fs.writeFileSync(indexFilename, updateJsVersion(indexTemplateFilename));
    process.stdout.write("Browser cache busted\n");
}

function updateJsVersion(indexTemplateFilename) {
    const html = fs.readFileSync(indexTemplateFilename, {
        encoding: 'utf8',
        flag: 'r',
    });

    const oldVersion = html.match(/\?\d+/)[0];
    const newVersion = '?' + Date.now();

    return html.replace(oldVersion, newVersion);
}

module.exports = bustBrowserCache;
