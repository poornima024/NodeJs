import fs from "fs";

     console.log("fs module program is execution start");
        fs.writeFile("/data.text","  Examples of synchronous callbacks include the callbacks passed to data.",
          (err) => 
          {
                err ? console.log(err) : console.log("file create successfully");
                
                
          }
        );

        console.log("fs module program is execution finish");


     