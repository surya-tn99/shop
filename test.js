const fs =  require("fs");

data = [
    {1:1},
    {2:2},
    {3:3}
]


fs.writeFileSync("test.json" , JSON.stringify(data , null , 2));

console.log("completed");