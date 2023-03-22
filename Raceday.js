let raceNumber = Math.floor(Math.random() * 1000);
const registeredEarly = true;
const Age = 18;
if (registeredEarly && Age > 18) {
  raceNumber += 1000;
}
if (registeredEarly && Age > 18) {
  console.log('You race at 9:30am, Your race number is:' + raceNumber);
} else if (!registeredEarly && Age > 18) {
  console.log('You race at 11:00am,Your race number is:' + raceNumber);
} else if (Age < 18) {
  console.log('You race at 12:30 pm, Your race number is:' + raceNumber);
} else {
  console.log('See the registration desk.');
}
