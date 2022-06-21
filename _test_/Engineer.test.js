const Employee = require('../lib/Employee.js');
const { writeFile, copyFile} = require('../lib/Employee');

test('creat an Engineer object', () => {
    const employee = new employee('', '', '', '');

    expect(employee.name).toBe('');
    expect(employee.id).toBe('');
    expect(employee.email).toBe('');
    expect(employee.role).toBe('');
    expect(employee.github).toBe('');
});
