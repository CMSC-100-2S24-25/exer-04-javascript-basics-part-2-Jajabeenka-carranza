import { v4 as uuidv4 } from 'uuid';
import validator from 'validator';
import { appendFileSync } from 'node:fs';

function generateUniqueID(fname, lname) {
    //convert the first letter of fname and lname to lower case
    let fletter = fname.charAt(0).toLowerCase();
    lname = lname.toLowerCase();
    let randid = uuidv4().replaceAll("-", "").slice(0, 8);
    let uniqueid = fletter + lname + randid
    return uniqueid;
}

function addAccount(fname, lname, email, age) {
    //check if all are not null or empty
    if (fname && lname && email && age) {
        //check if email is valid format
        if (validator.isEmail(email)) {
            //check if age is at least 18
            if (age >= 18) {
                let uniqueid = generateUniqueID(fname, lname);
                try {
                    appendFileSync('users.txt', `${fname},${lname},${email},${uniqueid}\n`);
                    console.log("Account Added!")
                    return true
                  } catch (err) {
                    console.log("Account creation failed")
                    return false
                  }
            }
            else {
                return false
            }
        }
        else {
            return false
        }
    }
    else {
        return false
    }
}

export default {generateUniqueID, addAccount}