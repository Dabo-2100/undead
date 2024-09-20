// regex
// Text Pattern
// Email Pattern
// anyThing@anyThing.anyThing
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// Egypt Phone No Pattern
// +20103232254
// +201 anyThing(8Nos)
const egyptianPhoneNumberRegex = /^\+201[0-9]{8}$/;
// Password
// minLength char 6
// contain capital case at least one
// contain Numbers at least one
// contain specail Cahrt at least one
// maxLenth 20 char
const passwordRegex =
  /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>?,./])(?=.{6,20}$).+$/;
// name
const nameRegex = /^(.{2,20})$/;

// Page Redirection
