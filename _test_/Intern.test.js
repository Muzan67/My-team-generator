const Intern = require('../lib/Intern');
const intern = new Intern('alejandro', '10128', 'ac.tendo67@gmail.com', 'Guggenheim');

test('creat an Intern object', () => {
    expect(intern.name).toBe('alejandro');
    expect(intern.id).toBe('10128');
    expect(intern.email).toBe('ac.tendo67@gmail.com');
    expect(intern.school).toBe('Guggenheim');
});

test('creat a Name object', () => {
    expect(intern.getName()).toBe('alejandro');
});

test('creat an Id object', () => {
    expect(intern.getId()).toBe('10128');
});   

test('creat an Email object', () => {   
    expect(intern.getEmail()).toBe('ac.tendo67@gmail.com');
});

test('creat an School object', () => {   
    expect(interne.getSchool()).toBe('Guggenheim');
});

test('creat a Role object', () => {
    expect(intern.getRole()).toBe('Intern');
});


    