const Intern = require('../lib/Intern');
const intern = new Intern('kakashi', '10128', 'HatakeKakashi@gmail.com', 'Ninja Academy');

jest.mock('../lib/Employee.js');

test('creat an Intern object', () => {
    expect(intern.name).toBe('kakashi');
    expect(intern.id).toBe('10128');
    expect(intern.email).toBe('HatakeKakashi@gmail.com');
    expect(intern.school).toBe('Ninja Academy');
});

test('creat a Name object', () => {
    expect(intern.getName()).toBe('kakashi');
});

test('creat an Id object', () => {
    expect(intern.getId()).toBe('10128');
});   

test('creat an Email object', () => {   
    expect(intern.getEmail()).toBe('HatakeKakashi@gmail.com');
});

test('creat an School object', () => {   
    expect(intern.getSchool()).toBe('Ninja Academy');
});

test('creat a Intern object', () => {
    expect(intern.getRole()).toBe('Intern');
});


    