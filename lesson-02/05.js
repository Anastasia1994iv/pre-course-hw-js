let passport = {
  name: "Petr",
  surname: "Petrov",
};

let passportDetails = { ... passport};

passportDetails.name = 'Ivan';

console.log(passport.name)
console.log(passportDetails.name)