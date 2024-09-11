var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var updateUser = function (user) {
    return user;
};
var getProductProperties = function (product, keys) {
    var selectedProperties = {};
    keys.forEach(function (property) {
        selectedProperties[property] = product[property];
    });
    return selectedProperties;
};
// Test case:
var house = {
    id: 123,
    name: "House in small village",
    description: "Includes 5 bedrooms, 2 bathrooms",
    price: 1234567890,
};
console.log("2. Product properties: ", getProductProperties(house, ["price"]));
var getSecurePersonData = function (person) {
    var socialSecurityNumber = person.socialSecurityNumber, securePersonData = __rest(person, ["socialSecurityNumber"]);
    return securePersonData;
};
var person = {
    name: "Natalia Solotva",
    age: 26,
    socialSecurityNumber: "very secret number",
};
var securePerson = getSecurePersonData(person);
console.log("3. securedPersonData: ", securePerson);
//Test case:
var config = {
    apiKey: "apiKey",
    baseUrl: "https://my.website.com",
    timeout: 13000,
};
//Test case
var newUser = {
    user1: {
        id: 12345,
        name: "User1 Name",
        age: 45,
        email: "user1name@test.qa",
    },
    user2: {
        id: 12345,
        name: "User2 Name",
        age: 44,
        email: "user2name@test.qa",
    },
};
console.log("5. New user with definedUsers type: ", newUser.user1.name, newUser.user2.email);
// Test case
// const address1: filledAddresses = "New York";
// const address2: filledAddresses = null;
// const address3: filledAddresses = undefined;
// const address4: filledAddresses = 1;
