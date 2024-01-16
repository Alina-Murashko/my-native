import { CompaniesType, UserType, UserWithBooks, UserWithLapTop, WithCompaniesType, addNewBook, changebook, hairDresser, moveUser, removeBook, updateCompany, updateCompanyAssociative, upgradeUserLaptop, upgradeUserLaptopBook } from "./10";



test('reference type test', () => {

    let user: UserType = {
        name:'Dima',
        hair: 32,
        address: {
            city: 'Minsk',
            house: {number:12,apartment:77},
        }
    }

    const cutUser = hairDresser(user,2);
   
    expect(user.hair).toBe(32);
    expect(cutUser.hair).toBe(16);
    expect(cutUser.address).toBe(user.address)

    user.address.city = 'Kiev';
    expect(cutUser.address.city).toBe('Kiev');

})

test('change address', () => {

    let user: UserWithLapTop = {
        name:'Dima',
        hair: 32,
        address: {
            city: 'Minsk',
            house: {
                number:12,
                apartment:77},
        },
        laptop: {
            title: 'lala'
        }
    }

    const newUserMoveAddrese = moveUser(user,'Kiev',19);

    expect(user).not.toBe(newUserMoveAddrese);
    expect(user.address).not.toBe(newUserMoveAddrese.address)
    expect(user.address.city).not.toBe(newUserMoveAddrese.address.city)
    expect(user.laptop).toBe(newUserMoveAddrese.laptop);
    expect(user.address.house).not.toBe(newUserMoveAddrese.address.house);
    expect(user.address.house.number).not.toBe(newUserMoveAddrese.address.house.number);
    expect(newUserMoveAddrese.address.city).toBe('Kiev');
    expect(user.address.city).toBe('Minsk')
})

test('upgrade laptop to macbook', () => {

    let user: UserWithLapTop = {
        name:'Dima',
        hair: 32,
        address: {
            city: 'Minsk',
            house: {
                number:12,
                apartment:77},
        },
        laptop: {
            title: 'lala'
        }
    }

   const newUserLapTop = upgradeUserLaptop(user, "Macbook")

    expect(user).not.toBe(newUserLapTop);
    expect(newUserLapTop.laptop.title).toBe("Macbook");
    expect(user.laptop.title).toBe('lala');
    expect(newUserLapTop.laptop).not.toBe(user.laptop);
    expect(newUserLapTop.address).toBe(user.address);
});

//обновление массивов

test('upgrade laptop to macbook, arr_books', () => {

    let user: UserWithLapTop&UserWithBooks = {
        name:'Dima',
        hair: 32,
        address: {
            city: 'Minsk',
            house: {
                number:12,
                apartment:77},
        },
        laptop: {
            title: 'lala'
        },
        books: ['css','html','react','ts']
    }

   const newUser = upgradeUserLaptopBook(user, "Macbook");

    expect(user.books).toBe(newUser.books)
    expect(user).not.toBe(newUser);
    expect(newUser.laptop.title).toBe("Macbook");
    expect(user.laptop.title).toBe('lala');
    expect(newUser.laptop).not.toBe(user.laptop);
    expect(newUser.address).toBe(user.address);
});

test('add books', () => {

    let user: UserWithLapTop&UserWithBooks = {
        name:'Dima',
        hair: 32,
        address: {
            city: 'Minsk',
            house: {
                number:12,
                apartment:77},
        },
        laptop: {
            title: 'lala'
        },
        books: ['css','html','react','ts']
    }

   const newUser = addNewBook(user, ['rest api','redax']);

    expect(user.books).not.toBe(newUser);
    expect(user.books).not.toBe(newUser.books);
    expect(user.books).toEqual(['css','html','react','ts'])
    expect(user).not.toBe(newUser);
    expect(user.laptop.title).toBe('lala');
    expect(newUser.laptop).toBe(user.laptop);
    expect(newUser.address).toBe(user.address);
    expect(newUser.books[4]).toBe('rest api')
    expect(newUser.books[5]).toBe('redax')
});

test('change books', () => {

    let user: UserWithLapTop&UserWithBooks = {
        name:'Dima',
        hair: 32,
        address: {
            city: 'Minsk',
            house: {
                number:12,
                apartment:77},
        },
        laptop: {
            title: 'lala'
        },
        books: ['css','html','react','ts',]
    }

   const newUser = changebook(user, 'ts','rest api');

    expect(user.books).not.toBe(newUser.books);
    expect(user.books).toEqual(['css','html','react','ts'])
    expect(newUser.books).toEqual(['css','html','react','rest api'])
    expect(user).not.toBe(newUser);
    expect(user.laptop.title).toBe('lala');
    expect(newUser.laptop).toBe(user.laptop);
    expect(newUser.address).toBe(user.address);
    expect(newUser.books[3]).toBe('rest api');
});

test('remove books', () => {

    let user: UserWithLapTop&UserWithBooks = {
        name:'Dima',
        hair: 32,
        address: {
            city: 'Minsk',
            house: {
                number:12,
                apartment:77},
        },
        laptop: {
            title: 'lala'
        },
        books: ['css','html','react','ts',]
    }

   const newUser = removeBook(user, 'ts');

    expect(user.books).not.toBe(newUser.books);
    expect(user.books).toEqual(['css','html','react','ts'])
    expect(newUser.books).toEqual(['css','html','react'])
    expect(user).not.toBe(newUser);
    expect(user.laptop.title).toBe('lala');
    expect(newUser.laptop).toBe(user.laptop);
    expect(newUser.address).toBe(user.address);

    const newUser2 = removeBook(user,'html');

    expect(user.books).not.toBe(newUser.books);
    expect(user.books).toEqual(['css','html','react','ts'])
    expect(newUser2.books).toEqual(['css','react','ts'])
    expect(user).not.toBe(newUser);
    expect(user.laptop.title).toBe('lala');
    expect(newUser.laptop).toBe(user.laptop);
    expect(newUser.address).toBe(user.address);

});

test('companies update', () => {

    let user: UserWithLapTop&UserWithBooks&WithCompaniesType = {
        name:'Dima',
        hair: 32,
        address: {
            city: 'Minsk',
            house: {
                number:12,
                apartment:77},
        },
        laptop: {
            title: 'lala'
        },
        books: ['css','html','react','ts',],
        companies: [
            {id: 1,title: 'Google'},
            {id: 2,title: 'Yandex'},
            {id: 3,title: 'Safari'},
        ]
    }

   const newUser = updateCompany(user,1,'Yandex Super!');

    expect(newUser.companies).not.toBe(user.companies);
    expect(newUser.companies[0].title).toBe('Yandex Super!')
    expect(user).not.toBe(newUser);
    expect(user.laptop.title).toBe('lala');
    expect(newUser.laptop).toBe(user.laptop);
    expect(newUser.address).toBe(user.address);

});

test('associative array update',() => {
    let companies: CompaniesType  = {
        'Alina': [
            {id: 1,title: 'Google'},
            {id: 2,title: 'Yandex'},
            {id: 3,title: 'Safari'},
        ],
       ' Sasha': [
            {id: 2,title: 'Yandex'},
            {id: 3,title: 'Safari'},
        ]
    }

    let copyCompanies = updateCompanyAssociative(companies,'Alina',2,'Yandex Super!')

    expect(companies['Alina'][1].title).toBe('Yandex')
    expect(copyCompanies['Alina'][1].title).toBe('Yandex Super!')
    expect(companies).not.toBe(copyCompanies)
    expect(companies['Alina']).not.toBe(copyCompanies['Alina'])
        
    
})
