import React, { useRef } from 'react'
export const AddSale = ({setList}) => {
    const idRef = useRef()
    const nameRef = useRef()
    const priceRef = useRef()

    function handleSubmit(event) {
        event.preventDefault();
        const name = event.target.elements.name.value;
        const price = event.target.elements.price.value;
        const newlist = {
            id: 3,
            name,
            price
        }
        setList((prevList)=> {
            return prevList.concat(newlist)
        })
        idRef.current.value = ""
        nameRef.current.value = ""
        priceRef.current.value = ""
    }
    return(
       <>
        <form className='addForm' onSubmit={handleSubmit}>
            <label htmlFor="id">ID :</label>
            <input className='add-input' type="text" name="id" placeholder="Enter Id" ref={idRef}/> 
            <label htmlFor="name">NAME :</label>
            <input className='add-input' type="text" name="name" placeholder="Enter Name" ref={nameRef}/> 
            <label htmlFor="price">PRICE :</label>
            <input className='add-input' type="text" name="price" placeholder="Enter Price" ref={priceRef}/>
            <button className='add-btn' type="submit">Add Data</button>
        </form>
       </>
        
    )
}