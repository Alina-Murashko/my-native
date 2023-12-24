import { PeopleType, createMessage } from "./05"

export const func = () => {

}

let people : PeopleType[] = [
    {name: "Andrey Ivanov", age: 33},
    {name: "Alexander Petrov", age: 24},
    {name: "Dnitry Sidorov", age: 18},
]  

beforeEach(() => {
    people = [
        {name: "Andrey Ivanov", age: 33},
        {name: "Alexander Petrov", age: 24},
        {name: "Dnitry Sidorov", age: 18},
    ] 
})
test('should get array of greeting messages',() => {
    const messages = createMessage(people)

    expect(messages.length).toBe(3);
    expect(messages[0]).toBe('Hello Andrey.Welcom to IT- Incubator!');
})