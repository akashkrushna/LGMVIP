import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
function AddTask({show,handleClose,save}) {
    const [taskName, setTaskName] = useState('');
    const[date,setDate]=useState();

    // ************************   handle Input *******************************///
    const handleChange = (e) => {
        
        const {name, value} = e.target

        if(name === "taskName"){
            setTaskName(value)
        }
        else{
            setDate(value)
            
        }
    }

    const handleSave = (e) => {
        e.preventDefault()
        let taskObj = {}
        taskObj["Name"] = taskName
        taskObj["Date"] = date
        save(taskObj);
        setTaskName(' ')
        setDate(' ')

    }
    return (
        <>
            
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Task</Modal.Title>
                    
                </Modal.Header>
                <Modal.Body>
                <div className="form-group">
                        <label>Date</label>
                        <input type="date" className = "form-control mt-2 mb-3" value = {date} onChange = {handleChange} name = "date"/>
                    </div>
                    <div className="form-group">
                        <label>Task Name</label>
                        <input type="text" className = "form-control mt-2 mb-3" value = {taskName} onChange = {handleChange} name = "taskName"/>
                    </div>
                   

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleSave}>
                      Add Task
                    </Button>{' '}
                    <Button variant="danger" onClick={handleClose}>
                        Close
                    </Button>

                </Modal.Footer>
            </Modal>
        </>
    )
}

export default AddTask