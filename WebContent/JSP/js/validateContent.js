//to trim an input String
function trim(s)
{
	return s.replace(/^\s+|\s+$/, '');
} 
//load view Advertisement JSP without submit
function loadJSP()
{
	document.getElementById('viewProfileform').submit();
} 

//autofill the the new quantity after validation
function autoFill(id,i){

	var field=document.getElementById(id).value;
	//if user is leaving the new qty blank then box will be filled with "0"
	if(field==null||trim(field)==""){
		document.getElementById(id).value ="1";
	}else{
		var availQty=document.getElementById("availqty"+i).innerText;
		var newQty=document.getElementById(id).value;
		//if user is entering the new qty which is greater than available qty then box will be filled with available qty
		if(parseInt(availQty) <parseInt(newQty)){
			alert("Sorry!! Currently we have only"+availQty+" in stocks.");
			document.getElementById(id).value=availQty;
		}
	}
}

//validate input fields
function validateFields(id){
	
	var field=document.getElementById(id).value;
	
	var error="err"+id;
	if(field==null||trim(field)==""){
		document.getElementById(id).className ="ErrorControl";
		document.getElementById(error).innerText="You can't leave this empty.";

	}else{
		document.getElementById(id).className ="SimpleControl";
		document.getElementById(error).innerText="";
	}

	if(id=='email'){
		if(trim(field)!=""){
			var validemail =/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/;
			if(!(validemail.test(field))) 
			{
				document.getElementById(id).className ="ErrorControl";
				document.getElementById(error).innerText="Not a valid e-mail address.";

			}
		}
	}
	if(id=='ccard'){
		if(trim(field)!=""){
			if(field.substring(0,1)==0) 
			{
				document.getElementById(id).className ="ErrorControl";
				document.getElementById(error).innerText="Credit Card Number cannot start with 0";
			}if(field.length!=16) 
			{
				document.getElementById(id).className ="ErrorControl";
				document.getElementById(error).innerText="Credit Card Number should be of 16 digits";

			}
			
		}
	}
	if(id=='confirmPasswd'){
		var pwd=document.getElementById('passwd').value;
		var confirmPwd=document.getElementById(id).value;
		if(pwd!=confirmPwd){
			document.getElementById(id).className ="ErrorControl";
			document.getElementById(error).innerText="These passwords don't match. Try again.";
		}
	}
	if((id=='quty')||(id=='price')||(id=='qty')){
		if(trim(field)!=""){
			if(isNaN(trim(field))){
				document.getElementById(id).className ="ErrorControl";
				document.getElementById(error).innerText="Not a valid decimal value.";
			}
		}
	}

}
// validate PostAdd JSP
function validatepostform(){
	validateFields('itemName');
	validateFields('desc');
	validateFields('sellerInfo');
	validateFields('price');
	validateFields('quty');
	if(document.getElementById('erritemName').innerText!=""||document.getElementById('errdesc').innerText!=""||document.getElementById('errsellerInfo').innerText!=""||document.getElementById('errprice').innerText!=""||document.getElementById('errquty').innerText!=""){
		return false;
	}else{
		return true;
	}
}
//validate Signup JSP
function validatefrmSignup(){
	alert("validatefrmSignup");
	validateFields('firstname');
	validateFields('lastname');
	validateFields('userid');
	validateFields('passwd');
	validateFields('confirmPasswd');
	validateFields('email');
		if(document.getElementById('errfirstname').innerText!=""||document.getElementById('errlastname').innerText!=""||document.getElementById('erruserid').innerText!=""||document.getElementById('errpasswd').innerText!=""||document.getElementById('errconfirmPasswd').innerText!=""||document.getElementById('erremail').innerText!=""){
		return false;
	}else{
		return true;
	}
}	
//validate Signin JSP
function validateFormSignin(){

	validateFields('username');
	validateFields('passwd1');
	if(document.getElementById('errpasswd1').innerText!=""||document.getElementById('errusername').innerText!=""){
		return false;
	}else{
		return true;
	}
}	
//validate Payment JSP
function validatepayment(){
	validateFields('fname');
	validateFields('ccard');
	if(document.getElementById('errfname').innerText!=""||document.getElementById('errccard').innerText!=""){
		return false;
	}else{
		return true;
	}
	
}

//to allow only Numeric and Decimal Values in Input box
function checkNumericDecimal(eventObj, obj)
{
	var keyCode
	if (document.all){
		keyCode=eventObj.keyCode
	}
	else{
		keyCode=eventObj.which
	}
	if(keyCode==8||keyCode==0){
		return true;
	}
	if(keyCode >=48 && keyCode <= 57){
		return true;
	}
	if(keyCode==46){return true;}
	else
		return false;
}
//to allow only Numeric Values in Input box
function checkNumeric(eventObj, obj)
{
	var keyCode
	if (document.all){
		keyCode=eventObj.keyCode
	}
	else{
		keyCode=eventObj.which
	}
	if(keyCode==8||keyCode==0){
		return true;
	}
	if(keyCode >=48 && keyCode <= 57){
		return true;
	}
	else
		return false;
}
//to limit user to enter space in Input box
function chkSpace(eventObj, obj)
{
	var keyCode
	if (document.all){
		keyCode=eventObj.keyCode
	}
	else{
		keyCode=eventObj.which
	}
	
	if(keyCode == 32 )
	{
		var val = document.getElementById(obj.name).value;
		if(val != "" && val != " ")
		{
			return true;
		}
		else
			return false;
	}
	else
	{
		return true;
	}
}

// to allow user enter alphanumeric values and no special characters
function checkAlphaNumeric(eventObj, obj){
	var keyCode
	if (document.all){
		keyCode=eventObj.keyCode
	}
	else{
		keyCode=eventObj.which
	}
	if(keyCode==8||keyCode==0)
		return true;

	var str=obj.value

	if(keyCode >=48 && keyCode <= 57){
		return true;
	}else if(keyCode >=65 && keyCode <= 90){
		return true;
	}else if(keyCode >=97 && keyCode <= 122){
		return true;
	}
	else if(keyCode == 32 || keyCode == 35 || (keyCode >= 40 && keyCode <= 47))
	{
		if(keyCode == 32)
		{
			var val = document.getElementById(obj.name).value;
			if(val != "" && val != " ")
			{
				return true;
			}
			else
				return false;
		}
		else
		{
			return true;
		}
	}
	else{
		return false;
	}
}

