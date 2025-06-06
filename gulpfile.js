import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
function defaultTask(cb) {
  // place code for your default task here
  cb();
  console.log(cb.toString());
}
console.log(import.meta.url, "__filename");
export default defaultTask;
