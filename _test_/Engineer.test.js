const Engineer = require('../lib/Engineer');
const Enginerr = new Engineer('alejandro', '10128', 'dontcallmyname@gmail.com', 'guggenheim');

test('creat an Engineer object', () => {
    expect(engineer.name).toBe('alejandro');
    expect(engineer.id).toBe('10128');
    expect(engineer.email).toBe('dontcallmyname@gmail.com');
    expect(engineer.githubUsername).toBe('Guggenheim');
});

test('creat an Name object', () => {
    expect(engineer.getName()).toBe('alejandro');
});

test('creat an Id object', () => {
    expect(engineer.getId()).toBe('10128');
});   

test('creat an Email object', () => {   
    expect(engineer.getEmail()).toBe('dontcallmyname@gmail.com');
});

test('creat an Github Username object', () => {   
    expect(engineer.getGithubUsername()).toBe('1071g');
});

test('creat an Role object', () => {
    expect(engineer.getRole()).toBe('Engineer');
});


    