import React, { useCallback, useMemo, useState } from "react"

export default {
    title: 'useCalback demo'

   
}

type BookSecretType = {
    books:Array<any>
    setBooks: () => void
}

const BookSecret = (props:BookSecretType) => {
   console.log('Book secreet rerender')



    return (<div>
        <button onClick={props.setBooks}>+ books</button>
        <div> {props.books.map((u,i) => <div key={i}>{u}</div>)}</div>
        </div>
    )
}

const Books = React.memo(BookSecret)

export const HelpsForUseCallback = () => {
//     console.log('HelpsForuseCallback');

        const [counter,setCounter] = useState(0);
        const [books,setBooks] = useState(['JS','React','Redux','Reduce'])

  
    const result: Array<string> = useMemo(() => {
        const resultBook = books.filter(el => el !== 'Vue');
        return resultBook
    },[books])
    //const onClickHandler = useMemo(() => () => setBooks([...books,'Angular']),[])
    const onClickHandler = useCallback(() => {
        console.log(books)
        setBooks([...books,'Angular'])
    },[])
    
   
    return <div>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        {counter}
        <Books books={result} setBooks={onClickHandler}/>
       
    </div>
}