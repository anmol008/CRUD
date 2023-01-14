import React from 'react'
import '../Components/Edit.css'
export const EditSale = ({ lists, current, setList }) => {
    function handInputname(event) {
        const value = event.target.value;
        const newlist = lists.map((li) => (
            li.id === current.id ? { ...li, name: value } : li
        ))

        setList(newlist)
    }
    function handInputprice(event) {
        const value = event.target.value;
        const newlist = lists.map((li) => (
            li.id === current.id ? { ...li, price: value } : li
        ))

        setList(newlist)
    }
    function handInputId(event) {
        const value = event.target.value;
        const newlist = lists.map((li) => (
            li.id === current.id ? { ...li, id: value } : li
        ))

        setList(newlist)
    }
    return (
        <tr>
             <td>
                <input className='edit-input' type="text" onChange={handInputId} name='id' value={current.id}/>
            </td>
            <td>
                <input className='edit-input' type="text" onChange={handInputname} name='name' value={current.name} />
            </td>
            <td>
                <input className='edit-input' type="text" onChange={handInputprice} name='price' value={current.price}/>
            </td>
            <td>
                <button className='update' type='submit'>Update</button>
            </td>
        </tr>
    )
}
