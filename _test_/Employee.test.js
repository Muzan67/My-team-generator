const Employee = require('../lib/Employee');
const employee = new Employee('alejandro', '10128', 'ac.tendo67@gmail.com');

test('creat an Employee object', () => {
    expect(employee.name).toBe('alejandro');
    expect(employee.id).toBe('10128');
    expect(employee.email).toBe('ac.tendo67@gmail.com');
});

test('creat an Name object', () => {
    expect(employee.getName()).toBe('alejandro');
});

test('creat an Id object', () => {
    expect(employee.getId()).toBe('10128');
});   

test('creat an Email object', () => {   
    expect(employee.getEmail()).toBe('ac.tendo67@gmail.com');
});

test('creat an Role object', () => {
    expect(employee.getRole()).toBe('Employee');
});

