ts
import { Messages } from "enmity/metro/common";

Patcher.before(Messages, "sendMessage", (_, [, msg]) => {
  msg.content += "\ntype shit"
});
