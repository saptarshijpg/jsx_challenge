import React, { useState } from 'react'
import './todo.css'
import ToDo from './ToDo'

function ToDoList()
{
    const [inList, setInList] = useState( "" )
    const [items, setItems] = useState( [] )
    const itemEvent = ( event ) =>
    {
        setInList( event.target.value )
    }
    const add = () =>
    {
        inList.length !== 0 && (
            setItems( olditems => [...olditems, inList] )
        )
        setInList( '' )
    }
    const deleteItems = ( id ) =>
    {
        setItems( ( olditem ) =>
        {
            return olditem.filter( ( arrEl, index ) =>
            {
                return index !== id
            } )
        } )
    }
    return (
        <>
            <div className="main_div">
                <div className="center_div container w-25">
                    <br />
                    <h1 id="h1">ToDo List</h1>
                    <br />
                    <input type="text" placeholder="Add a Item" onChange={itemEvent}
                        value={inList} id="input" />
                    <button onClick={add} id="button"><i className="fa fa-plus" aria-hidden="true" /></button>
                    <ol id="ol">
                        {items.map( ( itemval, index ) =>
                        {
                            return <ToDo key={index}
                                id={index}
                                text={itemval}
                                onSelect={deleteItems}
                            />
                        } )}
                    </ol>
                </div>
            </div>
        </>
    )
}
export default ToDoList
