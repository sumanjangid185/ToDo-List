import './App.css';
import MyFirstComponent from "./components/ReactClass";
import DateCompoent from "./components/itemDate";
// Check the filename and capitalization for the following import
import GetFormDetails from "./components/getFormDetails"; 
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


                                          

function App() {
  // const [title, setTitle] = useState('Hello World');
  // const [newVarible, setNewVarible] = useState('true');
  const [editingIndex, setEditingIndex] = useState(null);
  const [editName, setEditName] = useState('');
  const [editDate, setEditDate] = useState('');
  const data1 = [
    {
      name: 'Do leet code question',
      date: '01',
      month: 'Jan',
      year: '2020'
    },
    {
      name: 'do gfg question',
      date: '02',
      month: 'Feb',
      year: '2021' 
    },
    {
      name: 'do college work',
      date: '03',
      month: 'Mar',
      year: '2022'
    },
    {                                                                                                                                                                                                                                                                                                                        
      name: 'my third props wala component',
      date: '03',
      month: 'Mar',
      year: '2023'
    }
  ]
  const [data, setData] = useState(data1);

 

  const buttonClicked = (index) =>{
  // Create a new array by filtering out the element at the specified index
  const newData = data.filter((item, i) => i !== index);
  showToast('Task removed successfully!');
  // Update the state with the new array
  setData(newData);


  }

  const submitButtonClick = (event) =>{
    setData(prevData => [...prevData, event]);
    showToast('Task added successfully!');
    
  }

  
  const handleEdit = (index) => {
    setEditingIndex(index);
    setEditName(data[index].name);
    setEditDate(`${data[index].date}-${data[index].month}-${data[index].year}`);
    showToast('Task edited successfully!');
  };

  const handleSave = () => {
    if (editingIndex !== null) {
      // Update the data with the edited values
      const newData = [...data];
      newData[editingIndex] = {
        ...newData[editingIndex],
        name: editName,
        // Extracting date, month, and year from the edited date string
        date: editDate.split('-')[0],
        month: editDate.split('-')[1],
        year: editDate.split('-')[2],
      };

      setData(newData);
      setEditingIndex(null);
      setEditName('');
      setEditDate('');
    }
  };

  

  
  const showToast = (message) => {
    toast.success(message, {
      position: 'top-right',
      autoClose: 3000, // Close the toast after 3000 milliseconds (3 seconds)
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };


  return (
    <div>
      <div className="page-container">
        <div className="container">
          <h1 className='hhh1' style={{ color: '#ff4500', textAlign: "center" }}>To-do List</h1>
          <div className="outer">
            {data.map((item, index) => (
              <div className={`mynewclass ${editingIndex === index ? 'editing' : ''}`} key={index}>
                {/* Editable content when editing */}
                {editingIndex === index ? (
                  <>
                    <input
                      type="text"
                      value={editName}
                      onChange={(e) => setEditName(e.target.value)}
                      placeholder="Edit Name"
                    />
                    <input
                      type="date"
                      value={editDate}
                      onChange={(e) => setEditDate(e.target.value)}
                      placeholder="Edit Date (DD-MMM-YYYY)"
                    />
                    <div className="button-container">
                      <button className='btn save-btn' onClick={handleSave}>
                        Save
                      </button>
                    </div>
                  </>
                ) : (
                  // Displaying content when not editing
                  <>
                    <MyFirstComponent name={item.name} />
                    <div className="date-container">
                      <DateCompoent date={item.date} month={item.month} year={item.year} hello={item.name} />
                      <div className="button-container">
                        <button className='btn edit-btn' onClick={() => handleEdit(index)}>
                          <FontAwesomeIcon icon={faEdit} /> Edit
                        </button>
                        <button className='btn trash-btn' onClick={() => buttonClicked(index)}>
                          <FontAwesomeIcon icon={faTrash} /> 
                        </button>
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
          <GetFormDetails task={submitButtonClick}  />
          

        </div>
      </div>

      <ToastContainer />
    </div>
  );
}

export default App;


