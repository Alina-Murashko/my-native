import { PropsType } from "./desrtucturing";

let props: PropsType;

beforeEach(() => {
    props = {
        name: 'Dimych',
        age: 32,
        lessons: [{title: '1'},{title: '2'}, {title: '3', name: 'lala'}],
        adress: {
            street: {
               title:'lala'
            }
        }
    }
})

test('',() => {

    //const lessons = props.lessons
   //const age = props.age

   //const{age, lessons} = props;

    const{age: a, lessons: l} = props;

    const {title} = props.adress.street


    expect(a).toBe(32);
    expect(l.length).toBe(3);
    expect(title).toBe('lala');
});

test('destructuring arr', () => {
    const l1 = props.lessons[0];
    const l2 = props.lessons[1];

    //const[ls1,ls2] = props.lessons// такая деструктуризация актуальна в useState
   
    const[ls1] = props.lessons;
    const[,ls2] = props.lessons;

    const[,,ls3] = props.lessons;
    
    expect(ls3).toStrictEqual({title: '3', name: 'lala'})
    expect(ls1.title).toBe('1')
    expect(ls2.title).toBe('2')
})

