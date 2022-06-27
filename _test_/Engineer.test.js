const Engineer = require('../lib/Engineer');
const Enginerr = new Engineer('alejandro', '10128', 'ac.tendo67@gmail.com', 'Muzan67');

jest.mock('../lib/Employee');

test('creat an Engineer object', () => {
    expect(engineer.name).toBe('alejandro');
    expect(engineer.id).toBe('10128');
    expect(engineer.email).toBe('ac.tendo67@gmail.com');
    expect(engineer.githubUsername).toBe('Muzan67');
});

test('creat an Name object', () => {
    expect(engineer.getName()).toBe('alejandro');
});

test('creat an Id object', () => {
    expect(engineer.getId()).toBe('10128');
});   

test('creat an Email object', () => {   
    expect(engineer.getEmail()).toBe('ac.tendo67@gmail.com');
});

test('creat an Github Username object', () => {   
    expect(engineer.getGithubUsername()).toBe('Muzan67');
});

test('creat an Role object', () => {
    expect(engineer.getRole()).toBe('Engineer');
});


    