let passportWithAddress = {
  name: "Petr",
  surname: "Petrov",
  address: {
      country: "USA",
      city: "LA"
  }
};

let passportWithNewAddress = structuredClone(passportWithAddress);
passportWithNewAddress.address.city = 'Bobryisk';

console.log(passportWithAddress.address.city)
console.log(passportWithNewAddress.address.city)