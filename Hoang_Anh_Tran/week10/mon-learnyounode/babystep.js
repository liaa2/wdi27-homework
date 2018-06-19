var myfile = process.argv[2];
var num = 0;
for (var i = 2; i < process.argv.length; i++) {
  num += Number(process.argv[i])
}
console.log(num);
