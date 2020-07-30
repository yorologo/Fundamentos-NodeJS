const os = require("os");

const SIZE = 1024;
function kb(bytes) {
  return bytes / SIZE;
}
function mb(bytes) {
  return kb(bytes) / SIZE;
}
function gb(bytes) {
  return mb(bytes) / SIZE;
}

console.log(os.arch());
console.log(os.platform());
console.group(`${os.cpus().length} Nucleos`);
// console.log(os.cpus());
console.groupEnd(`${os.cpus().length} Nucleos`);
// console.log(os.constants);
console.group("Memoria disponible");
console.log(`${kb(os.freemem()).toFixed(2)}KB`);
console.log(`${mb(os.freemem()).toFixed(2)}MB`);
console.log(`${gb(os.freemem()).toFixed(2)}GB`);
console.groupEnd("Memoria disponible");
console.log(os.homedir());
console.log(os.tmpdir());
console.log(os.hostname());
// console.log(os.networkInterfaces());
