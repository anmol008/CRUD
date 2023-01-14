import React, { useState } from 'react'
import { AddSale } from './AddSale'
import { EditSale } from './EditSale'
import '../Components/View.css'
export const ViewSale = (props) => {
    const list = [
        {
            id: 'User01',
            name: "Bruce Wayne",
            price: "22000"
        },
        {
            id: 'User02',
            name: "Harvy Dent",
            price: "14000"
        },
    ]
    const [lists, setList] = useState(list)
    const [updateState, setUpdateState] = useState(-1)
    return (
        <div className='crud'>
            <div>
                <h1>Portal for Total Sales</h1>
                <AddSale setList={setList} />
                <form onSubmit={handleSubmit}>
                    <table>
                        <tr>
                            <th>Id</th>
                            <th>Buyers Name</th>
                            <th>Sale</th>
                            <th>Edit/Delete Buttons</th>
                        </tr>
                        {
                            lists.map((current) => (
                                updateState === current.id ? <EditSale current={current} lists={lists} setList={setList} /> :
                                    <tr>
                                        <td>{current.id}</td>
                                        <td>{current.name}</td>
                                        <td>{current.price} $</td>
                                        <td>
                                            <button className='edit' onClick={() => handleEdit(current.id)}>Edit</button>
                                            <button className='delete' type='button' onClick={() => handleDelete(current.id)}>Delete</button>
                                        </td>
                                    </tr>
                            ))
                        }
                    </table>
                </form>
            </div>
        </div>
    )
    function handleEdit(id) {
        setUpdateState(id)
    }
    function handleDelete(id) {
        const newlist = lists.filter((li) => li.id !== id)
        setList(newlist)
    }
    function handleSubmit(event) {
        event.preventDefault()
        const id = event.target.elements.id.value
        const name = event.target.elements.name.value
        const price = event.target.elements.price.value
        const newlist = lists.map((li) => (
            li.id === updateState ? { ...li, id: id, name: name, price: price } : li
        ))

        setList(newlist)
        setUpdateState(-1)
    }
}

