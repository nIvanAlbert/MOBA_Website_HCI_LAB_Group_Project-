function validateForm() {
      //  var x =document.forms["regForm"]["username"].value;
    if( document.regForm.username.value.length <=4 ) {
       alert( "Please provide username with more than 4 words!" );
       return false;
    }
    if( document.regForm.email.value == "" || !document.regForm.email.value.includes("@")) {
       alert( "Please provide valid Email!" );
      //  document.myForm.EMail.focus() ;
       return false;
    }
   if( document.regForm.password.value == "" || document.regForm.password.value.length <=5) {
      alert( "Please password must be more than 5 words!" );
      return false;
   }
   if( document.regForm.region.value ==0 ) {
      alert( "Please select your region!" );
      return false;
   }
   if( document.regForm.dob.value=="") {
      alert( "Please provide you date of birth!" );
      return false;
   }
    return( true );
 }