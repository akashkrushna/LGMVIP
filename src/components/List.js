import React, { useState } from 'react';
import UpdateTask from './UpdateTask';
import {BsXCircleFill } from "react-icons/bs";
import { FaPen } from "react-icons/fa";
import { Button } from 'react-bootstrap';

const List = ({ taskObj, index, deleteTask, updateListArray }) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const updateTask = (obj) => {
        updateListArray(obj, index)
    }
    const handleDelete = () => {
        deleteTask(index)
    }
    return (
        <div className='shadow-sm border task_border rounded p-2 mt-3'>
                <div className='float-end shadow-sm me-2'>
                    <Button variant='me-3 'className ="button_icon" ><FaPen onClick={() => setShow(true)} /></Button>
                    <Button variant='me-3 'className ="button_icon"  > <BsXCircleFill onClick={handleDelete} />  </Button>  
                </div>
                <span className="card-head2 mt-2  rounded me-2" >{taskObj.Date} </span>

                <p className="mt-3  mb-3 h5 task_name">{taskObj.Name}</p> 
           
            <UpdateTask show={show} handleClose={handleClose} updateTask={updateTask} taskObj={taskObj} />
           
        </div>
    );
};

export default List;