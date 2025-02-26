import { v4 as uuidv4 } from 'uuid';

function generateUniqueID(fname, lname) {
    //convert the first letter of fname and lname to lower case
    let fletter = fname.charAt(0).toLowerCase();
    lname = lname.toLowerCase();
    let randid = uuidv4().replaceAll("-", "").slice(0, 8);
    let uniqueid = fletter + lname + randid
    return uniqueid;
}

console.log(generateUniqueID("Alan", "Turing"));