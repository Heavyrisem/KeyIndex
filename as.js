let test = {
};
var Timer = Date.now();
for (i = 0; i <= 1000000; i++) {
    eval(`test["${i}"] = ${i}`);
    // console.log(test[i]);
}

Timer = Date.now();
console.log(test["100"]);
console.log(`${Date.now() - Timer}ms`);

Timer = Date.now();
console.log(test["1000"]);
console.log(`${Date.now() - Timer}ms`);

Timer = Date.now();
console.log(test["10000"]);
console.log(`${Date.now() - Timer}ms`);

Timer = Date.now();
console.log(test["100000"]);
console.log(`${Date.now() - Timer}ms`);

Timer = Date.now();
console.log(test["1000000"]);
console.log(`${Date.now() - Timer}ms`);
