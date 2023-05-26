### Command SDK for Kapeta command line utility

Provides a simple wrapper around the commander module to ensure consistency
in the kapeta CLI

#### Example use:
```javascript
const KapetaCommand = require('@kapeta/kap-command');
const packageData = require('./package');

// Create the subsection command object.
// This is made available through "kap mysubsection"
const command = new KapetaCommand('mysubsection', packageData.version);

// Add handler for sub command - See commander docs for more
// $: kap subsection subcommand
command.program()
    .command('subcommand')  
    .action(() => doSomething());
                
//Tell the kapeta command to parse arguments and run actions
command.start();
``` 
