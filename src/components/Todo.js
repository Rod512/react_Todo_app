import React from 'react';
import { Fragment,useState } from 'react';
import todo_pic from '../img/todo.png'


const Todo = () => {
    const [Inputdata,setInputdata] = useState('')
    const [items,setitems] = useState([])

    const additem = ()=>{
        if(!Inputdata){

        }else{
            setitems([...items,Inputdata])
            setInputdata('')
        }
        
    }

    const deleteItem = (id)=>{
        const updateItem = items.filter((elem, ind)=>{
            return ind !== id

        })
        setitems(updateItem)
    }

    const removeAll = ()=>{
        setitems([])

    }


    return (
        <Fragment>
            <div>
                <div>
                    <figure className='flex justify-center mt-20 '>
                        <img src={todo_pic} alt="" />
                    </figure>
                    <p className='text-center text-2xl'>
                        Add Your List Here
                    </p>
                        {/* add item */}
                        <div className='flex justify-center mt-10'>
                            <input className='border border-2 outline-none' type="text" placeholder='add items' 
                                value={Inputdata}
                                onChange={(e)=> setInputdata(e.target.value)}
                            />
                            <button className='ml-5 border py-1 px-8 bg-emerald-600 text-white' onClick={additem}>add</button>
                        </div>

                        {/* show item */}
                        <div>
                            {
                                items.map((elem,ind)=>{
                                    return(
                                        <div className='flex justify-center mt-10' key={ind}>
                                            <h3 className='border py-2 px-16 rounded bg-indigo-600 font-bold text-white'>{elem}</h3>
                                            <button className='ml-10 border py-1 px-8 bg-red-600 text-white' onClick={()=> deleteItem(ind)}>Delete</button>
                                        </div>

                                    )
                                })
                            }
                            
                        </div>

                        {/* check item amd delete item */}
                        <div className='flex justify-center mt-10'>
                            <button className='border ml-5 py-1 px-8 bg-amber-600 text-white hover:bg-amber-500' onClick={removeAll}>Delete all</button>
                        </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Todo;