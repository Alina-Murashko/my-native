import { CourseType } from "./04";

test("should take old men older then 90",() => {
    const age = [18,20,22,1,100,90,14];
    

    const predicate = (age: number) => age > 91;
    
    const oldAges = age.filter(predicate);

    expect(oldAges.length).toBe(1);
    expect(oldAges[0]).toBe(100)
});

test("should take courses chipper",() => {
    const courses = [
        {title: 'CSS', price: 100},
        {title: 'JS', price: 200},
        {title: 'REACT', price: 150},
    ] 
    
    const chipCourses = courses.filter((courses: CourseType) => courses.price < 160);

    expect(chipCourses.length).toBe(2);
    expect(chipCourses[0].title).toBe('CSS');
    expect(chipCourses[1].title).toBe('REACT');
});

test("get only completed tasks", () => {
    const tasks = [
        {id: 1, title:'Bread', isDone: false},
        {id: 2, title:'Milk', isDone: true},
        {id: 3, title:'Meat', isDone: false},
        {id: 4, title:'Fish', isDone: false},
    ]

    const completedTasks = tasks.filter(el => el.isDone)

    expect(completedTasks.length).toBe(1);
    expect(completedTasks[0].title).toBe('Milk');
})

test("get only active tasks", () => {
    const tasks = [
        {id: 1, title:'Bread', isDone: false},
        {id: 2, title:'Milk', isDone: true},
        {id: 3, title:'Meat', isDone: false},
        {id: 4, title:'Fish', isDone: false},
    ]

    const completedTasks = tasks.filter(el => !el.isDone)

    expect(completedTasks.length).toBe(3);
    expect(completedTasks[0].title).toBe('Bread');
    expect(completedTasks[1].title).toBe('Meat');;
    expect(completedTasks[2].title).toBe('Fish');

});


