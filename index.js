const {Command} = require('commander');
const PARENT_NAME = process.env.BLOCKWARE_PARENT_CLI || 'blockctl';

class BlockwareCommand {
    constructor(name, version) {
        this._program = new Command();
        this._program
            .name(PARENT_NAME + ' ' + name)
            .version(version);
    }

    parentName() {
        return PARENT_NAME;
    }

    program() {
        return this._program;
    }

    start() {

        if (process.argv.length < 3) {
            console.error('No command specified\n');
            this._program.help();
            process.exit(1);
        }

        this._program.on('command:*', () => {
            console.error('Invalid command: %s\n', this._program.args.join(' '));
            this._program.help();
            process.exit(1);
        });

        this._program.parse(process.argv);
    }
}

module.exports = BlockwareCommand;