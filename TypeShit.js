import { Plugin, registerPlugin } from "enmity/managers/plugins";
import { Patcher } from "enmity/patcher";
import { Messages } from "enmity/metro/common";

// Define the plugin object
const MessageAppender: Plugin = {
  // Plugin name
  name: "MessageAppender",
  
  // Plugin initialization method
  onStart() {
    // Patching the sendMessage method to append text
    Patcher.before(Messages, "sendMessage", (_, [, msg]) => {
      msg.content += "\nType Shit";
    });
  },

  // Plugin cleanup method
  onStop() {
    // Unpatch all patches done by this plugin
    Patcher.unpatchAll();
  }
};

// Register and export the plugin for the modding framework to load
registerPlugin(MessageAppender);
export default MessageAppender;
