
//Завдання 1

let age = +prompt("Enter your age");
if (age <= 17) {
  alert("do you stady at school");
} else if (age > 17 && age < 25) {
  alert("Do you study at university ?");
} else if (age >= 25 && age < 60) {
  alert("Do you have a job ?");
} else {
  alert("what are you doing ?");
}


//Завдання 2

let display = prompt("Enter display value");
switch (display) {
  case "flex":
    alert("Set'display flex");
    break;
  case "block":
    alert("Set'display block");
    break;
  case "grid":
    alert("Set'display grid");
    break;
  case "inline":
    alert("Set'display inline");
    break;
  case "none":
    alert("Set'display none");
    break;  
  default:
    alert("Set'display inline-block");
}




//Завдання 3

let num = prompt ("Please enter the number:");

while (isNaN(num) ){
    num = prompt('Your number is incorect, please enter corect number')
}
 alert(`${num} by 12 equals ${num*12}`);
 


 //Завдання 4
for (i=2; i<=50; i++)
{
    if (i%2==0)
    console.log(i)
}