function scuberGreetingForFeet() {
  let input = prompt("Enter distance:");
  if (input == null) {
    alert("Please enter a value");
    return;
  }
  input = parseFloat(input);
  if (isNaN(input)) {
    alert("Please enter a number");
  }

  if (input <= 400) {
    return "This one is on me!";
  } else if (input <= 2000) {
    return "That will be twenty bucks.";
  } else if (input >= 2000 || input <= 2500) {
    return "I will gladly take your thirty bucks.";
  } else if (input > 2500) {
    return "No can do.";
  }
}
scuberGreetingForFeet();

function ternaryCheckCity() {
  let inputCity = prompt("Enter a city:");
  if (inputCity == null) {
    alert("Please enter a city");
  }
  const myDestination = inputCity == "NYC" ? "Ok,sounds good." : "No go.";
  myDestination;
  console.log(myDestination);
}
ternaryCheckCity();

function switchOnCharmFromTip() {
  const tipAmount = prompt("Enter tip amount:");
  switch (tipAmount) {
    case "generous":
      console.log("Thankyou so much.");
      break;
    case "not as generous":
      console.log("Thank you.");
      break;
    case "thanks for everything":
      console.log("Bye.");
      break;
  }
}
switchOnCharmFromTip();
