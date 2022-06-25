const Manager = require('../lib/Manager');
const manager = new Manager('alejandro', '10128', 'dontcallmyname@gmail.com', 'guggenheim');

test('creat an Manager object', () => {
    expect(manager.name).toBe('alejandro');
    expect(manager.id).toBe('10128');
    expect(manager.email).toBe('dontcallmyname@gmail.com');
    expect(manager.office).toBe('1071g');
});

test('creat a Name object', () => {
    expect(manager.getName()).toBe('alejandro');
});

test('creat an Id object', () => {
    expect(manager.getId()).toBe('10128');
});   

test('creat an Email object', () => {   
    expect(manager.getEmail()).toBe('dontcallmyname@gmail.com');
});

test('creat an Office object', () => {   
    expect(manager.getOfficeNumber()).toBe('1071g');
});

test('creat a Role object', () => {
    expect(manager.getRole()).toBe('Manager');
});


    