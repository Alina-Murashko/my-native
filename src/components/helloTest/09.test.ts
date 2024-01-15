import { increaseAge } from "./09"


export type UsersType = {
    name: string
    age: number
    address: {title: string}
}
type UserType = {
    name: string
    age: number
}

test('big test', () => {

    let user : UserType = {
        name: 'Dimych',
        age : 32,
    }
    increaseAge(user);
    expect(user.age).toBe(33);

    const superman = user;

    superman.age = 1000;

    expect(user.age).toBe(1000);
})

test('reference type test', () => {

    let users : UserType[] = [
        {
        name: 'Dimych',
        age : 32,
    }, {
        name: 'Sasha',
        age : 32,
    }]
   ;

    let admins = users;

    admins.push({name:'', age: 0})

    expect(users.length).toBe(3);
    expect(users[2]).toEqual({name:'', age: 0});

})

test('value type test', () => {
    let usersCount = 100;
    let adminsCount = usersCount;

    adminsCount = 200;

    expect(usersCount).toBe(100)
})

test('reference type test objects', () => {

    let user : UsersType = {
        name: 'Dimych',
        age: 32,
        address: {
            title: 'Minsk'
        }
    }

    let addAdress = user.address;

    let user2: UsersType = {
        name: 'Dimych',
        age: 32,
        address: addAdress,
    }

    user2.address.title = "KANARY";
    expect(user.address.title).toBe('KANARY');

    const users =[user,user2,{ name: "lalala", age: 76, adress: addAdress }]
    expect(users[0].name).toBe('Dimych');
    

    const admins = [user,user2];

    admins[0].name = "Dmitry";
    expect(user.name).toBe("Dmitry");

})

test('sort array test',() => {
    const lettersConst = ['c', 'd', 'a','z', 'e']
    const letters =['c', 'd', 'a','z', 'e']
    pasportist(letters);
    const result = ['a','c','d','e','z']
    expect(letters).toEqual(result);
});

function pasportist(letters: string[]) {
    letters.sort();
}

