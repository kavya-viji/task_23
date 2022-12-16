var n = parseInt(prompt("enter number"));
var on = n;
var rn = 0;
while(n!=0)
{
	d=n%10
	rn= (rn*10)+d;
	n = parseInt(n/10);
}
if (rn===on)
{
	document.write("The given number is a Palindrome number");
}
else
{
	document.write("The given number is not a Palindrome number");
}