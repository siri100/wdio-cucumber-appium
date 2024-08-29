const argv = require('minimist')(process.argv.slice(2));

let platform = argv['platform'];
export class Shared {


    static platform=platform;


}