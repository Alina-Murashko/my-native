import { mult, splitIntoWords, sum } from "./01";

export const x = 0;
//чтобы тест нес мог испортить глобальные переменные не задаем сразу а пишим функцию beforeEach

    let a : number
    let b : number
    let c : number

//тоесть каждый тест будут получать данные внутри before, даже если данные переопределены внутри функции
    beforeEach(() => {
        a = 1;
        b = 2;
        c = 3;
    })


// Тест состоит из трех частей, 


test.skip('sum should be coorect', () => {
    // подготовительные данные , data
    //теперь сверху
    // action, действия

    const result = sum(a,b);
    const result2 = sum(a,c);
    // expect resilt, наши ожидания от выполнения кода

    expect(result).toBe(3)
    expect(result2).toBe(4)


    // запускаем yarn test

})

test.skip('mult should be coorect', () => {
    // подготовительные данные , data
    //теперь сверху
    // action, действия

    const multResult = mult(a,b);
    const multResult2 = mult(a,c);
    // expect resilt, наши ожидания от выполнения кода

    expect(multResult).toBe(2)
    expect(multResult2).toBe(4)


    // запускаем yarn test

})

test.skip("splitting into words should be correct", () => {

    let string = "Hello user!";
    let string2 = "I am Alina!";

    let resultExpect = splitIntoWords(string)
    let resultExpect2 = splitIntoWords(string2)



    expect(resultExpect.length).toBe(2)
    expect(resultExpect[0]).toBe('hello')
    expect(resultExpect[1]).toBe('user!')

    expect(resultExpect2.length).toBe(2)


})