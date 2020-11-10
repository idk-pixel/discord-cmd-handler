class Command {
  constructor(client, commandFolder, eventsFolder) {
    /* Registering Params */
    this.commandFolder = commandFolder;
    this.eventsFolder = eventsFolder;
    this.client = client;
    /* Dependencies */
    this.fs = require("fs");
    this.path = require("path");
  }

  registerCommands() {}

  registerEvents() {
    if (this.eventsFolder !== typeof String) {
      return new TypeError(
        "Discord CMD HANDLER > Events Folder Path is not a string."
      );
    }
    if (this.eventsFolder.endsWith("/"))
      return new Error(
        "Your events folder directory should not end with a slash."
      );
    if (this.eventsFolder)
      if (!this.eventsFolder) {
        return new TypeError(
          "Discord CMD HANDLER > eventsFolder is undefined or null."
        );
      }

    if (!this.fs.existsSync(this.eventsFolder)) {
      return new Error(
        `DISCORD-CMD-HANDLER EVENTS > Not a directory: ${this.eventsFolder} (perhaps not the full directory?)`
      );
    }

    this.fs.readdirSync(this.eventsFolder).map((data) => {
      const File = require(`${this.eventsFolder}/${data}`);
      if (!File.run) {
        return new Error(
          `Discord CMD HANDLER > Event ${file} does not have a run function.`
        );
      }
      if (!File.name || !File.name === String) {
        return new Error(
          `DISCORD CMD HANDLER > Event ${file}s name is not a string or does not exist.`
        );
      }

      if (!this.client.events) {
        return new Error(
          "Client Object does not have an events Map or Collection."
        );
      }

      this.client.events.set(file.name, file);

      this.client.on(file.name, file.run.bind(null, this.client));
    });
  }
}
