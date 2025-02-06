const fs = require ('fs');

//create folder
const createFolder = (foldername) =>{
 // check if folder exists
 if(!fs.existsSync(foldername)){
    //create the folder
    fs.mkdirSync(foldername);
 }
};


const defaultPosts= '[{"id":"2025", "title":"html", "url":"someurl.com", "description":"The Best"}]';

// craete file

const createFile = (file) =>{

    //check if file exists
    if(!fs.existsSync(file)){
        fs.writeFileSync(file, defaultPosts);
    }

};

module.exports = {
    createFolder,
    createFile,
}