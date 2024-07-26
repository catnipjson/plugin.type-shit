import { Patcher } from "enmity";
import { Messages } from "enmity/metro/common";

// Define the plugin object
const myPlugin = {
  // Plugin name
  name: "MessageAppender",
  
  // Plugin initialization method
  onStart() {
    // Patching the sendMessage method to append text
    Patcher.before(Messages, "sendMessage", (_, [, msg]) => {
      msg.content += "\nEnd of Message";
    });
  },

  // Plugin cleanup method
  onStop() {
    // Unpatch all patches done by this plugin
    Patcher.unpatchAll();
  }
};

// Export the plugin for the modding framework to load
export default myPlugin;
