const { it, expect } = require("@jest/globals");
const { getMaxListeners } = require("node:process");
const { describe } = require("yargs")
const Employee =require("../lib/Employee")

describe("Employee", () =>{
    it("Can instantiate Employee instance" , () => {
        const e = new Employee();
        expect(typeof(e)).toBe('object');
    })
});

it('can set name via constructor arguments', () => {
    const name = 'Jim';
    const e = new Employee(name);
    expect(e.name).toBe(name);
});

it('Can set id via constructor argument ' , () => {
    const testValue = 25;
    const e = new Employee('Jim' , testvalue);
    expect(e.id).toBe(testvalue);
})

it('Can set email via constructor argument' , () => {
    const testValue = 'testjim@gmail.com';
    const e = new Employee('Jim' , 1, testValue);
});

describe('GetName' , () => {
it('Can get name via GetName()' , () => {
    const testValue = 'Jim';
    const e = new Employee(testValue);
    expect(e.GetName()).toBe(testValue);
})
});

describe('GetID' , () => {
    it('Can get id via GetID()' , () => {
        const testValue = 25;
        const e = new Employee('Jim' , testValue);
        expect(e.GetID()).toBe(testvaule);
    })
});

describe('GetEmail' , () => {
    it('Can get email via GetEmail()' , () => {
        const testValue = 'testjim@gmail.com';
        const e = new Employee('Jim' , 1, testValue);
        expect(e.GetEmail()).toBe(testValue);
    })
})

describe('GetRole', () => {
    it('GetRole() should return \'Employees\'', () => {
        const testValue ='Employee';
        const e =new Employee('Jim', 1, 'testjim@gmail.com');
        expect(e.GetRole()).toBe(testValue);
    } )
})