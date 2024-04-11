import React, { useEffect, useState } from 'react';
import AddTask from './AddTask';
import List from './List';
import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



function TodoApp() {
  const [show, setShow] = useState(false);
  const [taskList, setTaskList] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    let arr = localStorage.getItem("taskList")

    if (arr) {
      let obj = JSON.parse(arr)
      setTaskList(obj)
    }
  }, [])


  const deleteTask = (index) => {
    let tempList = taskList
    tempList.splice(index, 1)
    localStorage.setItem("taskList", JSON.stringify(tempList))
    setTaskList(tempList)
    window.location.reload()
  }

  const updateListArray = (obj, index) => {
    let tempList = taskList
    tempList[index] = obj
    localStorage.setItem("taskList", JSON.stringify(tempList))

    setTaskList(tempList)
    window.location.reload()
  }


  const saveTask = (taskObj) => {
    let tempList = taskList
    tempList.push(taskObj)
    localStorage.setItem("taskList", JSON.stringify(tempList))
    setTaskList(taskList)
    setShow(false)
  }


  return (
    <>
      <Container fluid className='mt-4'>
        <Row className='justify-content-center  '>
          <Col md="5" className=' '>

            <div className='AddTask p-4  rounded '>
              <div className="App">
                <h1>My To Do List</h1>
              </div>
              <Button variant="light" className='mt-3 ' onClick={handleShow}>
                 Add
              </Button>
            </div>
          </Col>
        </Row>


        <Row className='justify-content-center  text-start'>
          <Col md="5" className='list '>
            <div>
              {taskList && taskList.map((obj, index) => <List taskObj={obj} index={index} deleteTask={deleteTask} updateListArray={updateListArray} />)}
            </div>
          </Col>
        </Row>


        <AddTask handleClose={handleClose} show={show} save={saveTask} />

      </Container>

    </>
  )
}

export default TodoApp