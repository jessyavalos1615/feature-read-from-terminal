# Read-from-terminal using Yargs module
NodeJs project where you need give it two integer arguments from the terminal when running the file and it should return 
an array the first argument as the lenght and the second as the default value.

You need to install the yargs module and require it. This is necessary to read values 
by console.

There're two ways to run the code. 
The first is write in console '$ npm start' and the code will use a default 
lenght = 4 and value = 3 giving as output [3,3,3,3].
The  second way is write in console '$ node index.js --lenght ? --value ?' 
where the character "?" it may be the value you want.
