### Command SDK for Blockware command line utility

Provides a simple wrapper around the commander module to ensure consistency
in the blockware CLI

#### Example use:
```javascript
const BlockwareCommand = require('@blockware/blockctl-command');
const packageData = require('./package');

// Create the subsection command object.
// This is made available through "blockctl mysubsection"
const command = new BlockwareCommand('mysubsection', packageData.version);

// Add handler for sub command - See commander docs for more
// $: blockctl subsection subcommand
command.program()
    .command('subcommand')  
    .action(() => doSomething());
                
//Tell the blockware command to parse arguments and run actions
command.start();
``` 
