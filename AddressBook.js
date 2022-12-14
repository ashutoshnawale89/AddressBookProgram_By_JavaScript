
const prompt=require("prompt-sync")({sigint:true});

// Class 
class AddressBook {
// Method To Create Map Key For Uniqueness Fname & Lname
    newAddressBookNameEnter(){
        try{
            var firstName=prompt("Enter FirstName  ");
        this.regexPatternForName(firstName);
        var lastName=prompt("Enter LastName  "); 
        this.regexPatternForName(lastName);
        }
        catch(err){
            console.log(err);
        
        }  
        return(firstName+" "+lastName);     
        }

// Method To Create Mao Value 
    newAddressBookDataEnter(){
        
try{
var phoneNumber =prompt("Enter Number  ");
this.regexPatternMobile(phoneNumber);
var address=prompt("Enter Address  ");
this.regexPatternForAddress_State(address);
var pincode =prompt("Enter pincode  ");
this.regexPatternPinCode(pincode);
var email=prompt("Enter Email  ");
this.regexPatternForEmail(email);
return(phoneNumber+" "+address+" "+pincode+" "+email);
}
catch(err){
    console.log(err);

}       
}
//Regex Method 
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

//Regex Method
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
    
//Regex Method
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

            //Regex Method
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

                //Regex Method
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

    //Method To Search By City And Print
    serachByCity(){
        var state=prompt("Enter The City Name");
        var count=0;
        for(key of storeData.keys()){
            var value=storeData.get(key);
            var data = value.split(" ");
        if(state==data[0]){
        console.log(key+"  "+storeData.get(key));
        count++;
        }
        }
        console.log("The Number Of Person Available In City Is : "+count);
    }

    //  Sort By Name 
    sortByName(){
        var arr=new Array();
        for(key of storeData.keys()){
        var num1=key;
        var num2=storeData.get(key);
        arr.push(num1+" "+num2);
        }
       arr.sort();
       console.log(arr);
    }

     //  Sort By Address 
     sortByCity(){
        var arr=new Array();
        for(key of storeData.keys()){
        var num1=key;
        var num2=storeData.get(key);
        arr.push(num2+" "+num1);
        }
       arr.sort();
       console.log(arr);
    }
}


// Function To Operate Class & Method 
function multipleAddressBook(){ 
    storeData.set(obj.newAddressBookNameEnter(),obj.newAddressBookDataEnter());
    console.log("1- Add And Edit  Data In AddressBook By Person Name     2-Close Book    3-To Delete The Data   4-Serach By City  5-Sort By Name  6-Sort By City")
    var num=parseInt(prompt("Enter Number  "));
    switch(num){
        case(1): multipleAddressBook();
        break;
        case(2): console.log(storeData);
        break;
        case(3):
        var firstNam=prompt("Enter FirstName  ");
        var lastNam=prompt("Enter LastName  "); 
        var delt=(firstNam+" "+lastNam);  
        storeData.delete(delt);
        console.log(storeData);
        break;
        case(4):    
        obj.serachByCity();
        break;
        case(5):
        obj.sortByName();
        break;
        case(6):
        obj.sortByCity();
        break;
        default:console.log("Enter Incorrect Option");
    }
}
// Creating Object of Class and Create Map To Store The data
var storeData=new Map();
var obj=new AddressBook();
multipleAddressBook();


