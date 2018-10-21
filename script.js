//Use RegEx to validate form
function required()
{
var empt = document.form.name1.name2;
if (empt === "")
{
alert("Please input a Value");
return false;
}
else 
{
alert("Please input first and last name");
return true; 
}
}