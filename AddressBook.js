const prompt=require("prompt-sync")({sigint:true});
class AddressBook {

    newAddressBookDataEnter(){
        
try{
    var firstName=prompt("Enter FirstName  ");
this.regexPatternForName(firstName);
var lastName=prompt("Enter LastName  "); 
this.regexPatternForName(lastName);
var phoneNumber =prompt("Enter Number  ");
this.regexPatternMobile(phoneNumber);
var address=prompt("Enter Address  ");
this.regexPatternForAddress_State(address);
var pincode =prompt("Enter pincode  ");
this.regexPatternPinCode(pincode);
var email=prompt("Enter Email  ");
this.regexPatternForEmail(email);
return(firstName+"  "+lastName+"  "+phoneNumber+"  "+address+"  "+pincode+"  "+email);
}
catch(err){
    console.log(err);

}       
}

    regexPatternForName(pattern){
        let nameRegex = /^[A-Z]{1}[a-zA-Z]{2,}$/;
        if(nameRegex.test(pattern))
         {
            console.log("true");
         }else
         {
            console.log("false");
            throw "Enter Valid Name";
          }
        }
        regexPatternForAddress_State(pattern){
            let addresRegex = /^[A-Z]{1}[a-zA-Z]{3,}$/;
            if(addresRegex.test(pattern))
             {
                console.log("true");
             }else
             {
                console.log("false");
                throw "Enter Valid Address";
              }
            }
    

         regexPatternMobile(pattern){
            let pinCodeRegex = /^[0-9]{10}$/;
            if(pinCodeRegex.test(pattern))
             {
                console.log("true");
             }else
             {
                 console.log("false");
                throw "Enter Valid Number";
              }
            }
            regexPatternPinCode(pattern){
                let pinCodeRegex = /^[0-9]{6}$/;
                if(pinCodeRegex.test(pattern))
                 {
                    console.log("true");
                 }else
                 {
                    console.log("false");
                    throw "Enter Valid Pincode";
                  }
                }
    regexPatternForEmail(pattern){
           let pinCodeRegex = /^[a-zA-Z]+[.+-]?[A-Za-z0-9]*[@][A-Za-z0-9]+[.+-][A-Za-z0-9]{2,}[.]*[A-Za-z]*$/;
           if(pinCodeRegex.test(pattern))
           {
              console.log("true");
            }else
           {
            console.log("false");
            throw "Enter Valid Email";
           }
    }
}

function multipleAddressBook(){  
    storeData.push(obj.newAddressBookDataEnter());
    console.log("1- Add Another Person     2-Close Book")
    var num=parseInt(prompt("Enter Number  "));
    switch(num){
        case(1): multipleAddressBook();
        break;
        case(2): console.log(storeData);
        break;
        default:console.log("Enter Incorrect Option");
    }
}
var storeData=new Array();
var obj=new AddressBook();
multipleAddressBook();
