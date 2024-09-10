// 1- Create a function that accepts a User object but allows any property to be optional.
interface User {
    id: number;
    name: string;
    age: number;
    email: string;
}

const updateUser = <T extends Partial<User>>(user: T): T => {
    return user;
};

// 2- Create a function that returns only selected properties from a Product object.
interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
}

const getProductProperties = <T extends keyof Product>(
    product: Product,
    keys: T[]
): Pick<Product, T> => {
    const selectedProperties = {} as Pick<Product, T>;

    keys.forEach((property) => {
        selectedProperties[property] = product[property];
    });

    return selectedProperties;
};

// Test case:
const house: Product = {
    id: 123,
    name: "House in small village",
    description: "Includes 5 bedrooms, 2 bathrooms",
    price: 1234567890,
};

console.log("2. Product properties: ", getProductProperties(house, ["price"]));

// 3- Create a function that returns a Person object, excluding sensitive data like the socialSecurityNumber.
interface Person {
    name: string;
    age: number;
    socialSecurityNumber: string;
}

const getSecurePersonData = <T extends Person>(
    person: T
): Omit<T, "socialSecurityNumber"> => {
    const { socialSecurityNumber, ...securePersonData } = person;
    return securePersonData;
};

const person: Person = {
    name: "Natalia Solotva",
    age: 26,
    socialSecurityNumber: "very secret number",
};

const securePerson = getSecurePersonData(person);

console.log("3. securedPersonData: ", securePerson);

// 4- Make a Config object immutable.
interface Config {
    apiKey: string;
    baseUrl: string;
    timeout: number;
}

type ReadonlyConfig = Readonly<Config>;

//Test case:
const config: ReadonlyConfig = {
    apiKey: "apiKey",
    baseUrl: "https://my.website.com",
    timeout: 13000,
};

// Test case
// config.apiKey = 'newApiKey';

// 5- Create a type that represents a dictionary where the keys are strings, and the values are numbers.
type Usernames = "user1" | "user2";
type DefinedUsers = Record<Usernames, User>;

//Test case
const newUser: DefinedUsers = {
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

console.log(
    "5. New user with definedUsers type: ",
    newUser.user1.name,
    newUser.user2.email
);

// 6- Create a type that excludes specific values from a union of string literals./
type AvailableColors1 = "red" | "green" | "blue" | "yellow";
type UpdatedColors = Exclude<AvailableColors1, "blue">;

//Test case
// const color1: UpdatedColors = 'red';
// const color2: UpdatedColors = 'blue';

// 7- Create a type that extracts only certain values from a union of string literals.
type AvailableColors2 = "red" | "green" | "blue" | "yellow";
type ExtractedColors = Extract<AvailableColors2, "red" | "green">;

//Test case
// const color1: ExtractedColors = 'red';
// const color2: ExtractedColors = 'green';
// const color3: ExtractedColors = 'blue';

// 8- Create a type that removes null and undefined from a union type
type Address = string | null | undefined;
type filledAddresses = NonNullable<Address>;

// Test case
// const address1: filledAddresses = "New York";
// const address2: filledAddresses = null;
// const address3: filledAddresses = undefined;
// const address4: filledAddresses = 1;
