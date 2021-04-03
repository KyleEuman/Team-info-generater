class Employee  {
    constructor (name, id, Email) {
        this.name = name;
        this.id = id;
        this.Email = Email;
    }

    GetName() {
        return this.name;
    }

    GetID() {
        return this.id;
    }

    GetEmail() {
        return this.Email;
    }

    GetRole() {
        return "Employee";
    }
}