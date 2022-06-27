const Manager = require('../lib/Manager');
const manager = new Manager('alejandro', '10128', 'ac.tendo67@gmail.com', '1071g');

jest.mock('../lib/Employee.js');

test('creat an Manager object', () => {
    expect(manager.name).toBe('alejandro');
    expect(manager.id).toBe('10128');
    expect(manager.email).toBe('ac.tendo67@gmail.com');
    expect(manager.officeNumber).toBe('1071g');
});
debugger
test('creat a Name object', () => {
    expect(manager.getName()).toBe('alejandro');
});

test('creat an Id object', () => {
    expect(manager.getId()).toBe('10128');
});   

test('creat an Email object', () => {   
    expect(manager.getEmail()).toBe('ac.tendo67@gmail.com');
});

test('creat an Office Number object', () => {   
    expect(manager.getOfficeNumber()).toBe('1071g');
});

test('creat a Role object', () => {
    expect(manager.getRole()).toBe('Manager');
});


    