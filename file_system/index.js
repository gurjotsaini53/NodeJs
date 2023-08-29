const { error } = require("console");
const fs = require("fs");

/*
  console.log(__filename); // give path with the filename
  console.log(__dirname); // give path of directory in which we are working
  




  // create new file
  
  // if file is present it overright data , if file is not present it create and then insert data
  fs.writeFileSync("read.txt", "Hello my Name is Gurjot Singh");
  fs.writeFileSync(
    "read.txt",
    "Creating new file, Hello my Name is Gurjot Singh"
  );
  fs.writeFileSync("read.txt", "Creating new file");
  
  



  // append data in file
  
  fs.appendFileSync("read.txt","How are you I'm Gurjot")
  
  


// read data from file



console.log(fs.readFileSync("read.txt")); // in binary format
const buffer_data = fs.readFileSync("read.txt");
console.log(buffer_data);

// node js includes an additional data type called Buffer.
// (not available in js browser)
// Buffer is mainly used to store binary data
// while reading from a file or receiving packets over the network.

let original_data = buffer_data.toString();
console.log(original_data);

// rename a file

fs.renameSync("read.txt", "readwrite.txt");
const x = fs.existsSync("readwrite.txt"); // returns true if file exists
console.log(x);


*/

/*
// CRUD OPERATION




1: Create a folder named it Gurjot
2: Create a file in it name Bio.txt and data into file.
3: Add more data into the file at the end of the exixting data.
4: Read the data without getting buffer data at first.

// file encoding

5: Rename the file name to myBio.txt
6: Now delete both the file and the folder



fs.mkdirSync("Gurjot");
fs.writeFileSync("./Gurjot/bio.txt","My Name is Gurjot Singh") ;
fs.appendFileSync("./Gurjot/bio.txt", " ,I'm Learning Full stack Development");
const data = fs.readFileSync("./Gurjot/MyBio.txt", "utf8"); // utf8 encoding
console.log(data);



fs.renameSync("./Gurjot/bio.txt","./Gurjot/myBio.txt");

fs.unlinkSync('./Gurjot/myBio.txt'); // remove file


fs.rmdirSync("Gurjot");



*/

// working aysnc

// fs.writeFile("file.txt","This is Gurjot Singh", (err) => {
//   console.log(err);
//   console.log("File Created");
// });

// fs.appendFile("file.txt"," I'm Learning Node js" ,  (err,data)=>{
//     console.log(err);
//     console.log(data);
// })

// fs.readFile("file.txt","utf-8",(err,data)=>{
//     console.log(data);
// })

/// aynsc vs sync

/*
// sync 
// first task is performed then second
const data = fs.readFileSync("readwrite.txt").toString();
console.log(data);
console.log("After reading");
*/

// aync
/*
fs.readFile("readwrite.txt","utf-8",(err,data) => {
    console.log(data);
})
console.log("After reading");
*/


// CRUD OPERATION  using aysnc 

/*

1: Create a folder named it Gurjot
2: Create a file in it name Bio.txt and data into file.
3: Add more data into the file at the end of the exixting data.
4: Read the data without getting buffer data at first.

// file encoding

5: Rename the file name to myBio.txt
6: Now delete both the file and the folder

*/

/*

fs.mkdir("Gurjot", (err)=>{
    console.log(err);
});

fs.writeFile("./Gurjot/bio.txt" , "This is Gurjot Singh " , (err)=>{
    console.log(err);
})


fs.appendFile("./Gurjot/bio.txt"," , I'm Learning Node js ", (err)=>{
    console.log(err);
})


fs.readFile("./Gurjot/bio.txt","utf-8",(err,data)=>{
    console.log(data);
})

fs.rename("./Gurjot/bio.txt","./Gurjot/myBio.txt" , (err)=>{
    console.log(err);
})


fs.unlink("./Gurjot/myBio.txt",(err)=>{
    console.log(err);
})

fs.rmdir("./Gurjot",(err)=>{
console.log(err);
})


*/