interface Contacts{
    id: number;
    name: ContactNames;
    birthDate?: Date;
    status: ContactStatus
}

type ContactNames = string;

enum ContactStatus{
    // Active,
    // InActive,
    // new

    Active= "active",
    InActive = "inactive",
    new = "new"
}

let primaryContacts: Contacts= {
    birthDate: new Date(Date.now()),
    id: 12345,
    name: "John",
    status: ContactStatus.Active
}
