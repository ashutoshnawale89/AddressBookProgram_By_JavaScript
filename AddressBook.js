class AddressBook {

	Constructor ( firstName,  lastName, phoneNumber,  address
			, pincode,  email) {

		this.firstName=firstName;
		this.lastName=lastName;
		this.phoneNumber=phoneNumber;
		this.address=address;
		this.pincode=pincode;
		this.email=email;
	}
    newAddressBookDataEnter(){
        console.log(firstName+"  "+lastName+"  "+phoneNumber+"  "+address+"  "+pincode+"  "+email);
    }
}
const prompt=require("prompt-sync")({sigint:true});
var firstName=prompt("Enter FirstName  ");
var lastName=prompt("Enter LastName  "); 
var phoneNumber =prompt("Enter Number  ");
var address=prompt("Enter Address  ");
var pincode =prompt("Enter pincode  ");
var email=prompt("Enter Email  ");
var obj=new AddressBook(firstName,  lastName, phoneNumber,  address
    , pincode,  email);
    obj.newAddressBookDataEnter();