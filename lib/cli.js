const path = require('path')
const fs = require('fs')
const commander = require('commander');
const program = new commander.Command();
program.version('0.0.0');

program
    .command('generate <dir>')
    .option("-p, --print", "Print to console only")
    .action(function (dir, cmd) {
        let configToStyle = require('../lib/config-to-style')
        let contents = require(path.join(process.cwd(), dir, 'rules.js'))
        let generated = configToStyle(contents)

        if (cmd.print) {
            return console.log(generated)
        }

        let writePath = path.join(__dirname, '..', 'assets', 'scss', 'preon-rules.scss')
        fs.writeFileSync(writePath, generated, { encoding: 'utf8' })
    })

program.parse(process.argv);

module.exports = program