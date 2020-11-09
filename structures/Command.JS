class Command {
    constructor(client, commandFolder, eventsFolder) {
        /* Registering Params */
        this.commandFolder = commandFolder
        this.eventsFolder = eventsFolder
        this.client = client;
        /* Dependencies */
        this.fs = require('fs');
        this.path = require('path');
    }

    registerCommands() {

    }
}