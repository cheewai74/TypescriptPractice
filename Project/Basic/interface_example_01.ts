interface Contact extends Address{
    id: number;
    // name: string;
    name: ContactName;
    birthDate?: Date;
}

interface Address{
    line1: string;
    line2: string;
    province:string;
    region: string;
    postalCode: string;
}

let primaryContact: Contact= {
    // birthDate: new Date(Date.now()),
    id: 12345,
    name: "John",
    line1: "ABC",
    line2: "def",
    province:"california",
    region: "LA",
    postalCode: "12345"
}

type ContactName = string;

console.log(primaryContact.id, primaryContact.name, 
    primaryContact.line1, primaryContact.province, 
    primaryContact.region, primaryContact.postalCode);