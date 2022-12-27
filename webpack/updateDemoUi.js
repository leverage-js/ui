const {exec} = require('child_process');

function updateDemoUi(compiler) {
    return compiler.hooks.afterEmit.tap('Update demo ui', copyDistFilesToDemo);
}

function copyDistFilesToDemo(compilation) {
    exec('cp dist/* demo/node_modules/@leverage-js/ui/dist');
    process.stdout.write("Demo ui updated\n");
}

module.exports = updateDemoUi;
