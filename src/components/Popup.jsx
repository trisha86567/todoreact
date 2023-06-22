import React, { useContext, useRef } from 'react';
import TaskForm from './TaskForm';
import TodoContext from '../context/AuthContext';




function Popup(props) {
  const {type,data}= props;
  const {deleteTask}= useContext(TodoContext);

    const onDelete=()=>{
      deleteTask(data.id);
    }


  
  const btn=useRef(null);   
  console.log(btn.current);
    return (
        <div className="modal" tabIndex="-1" id='task-modal'>
        <div className="modal-dialog">
          <div className="modal-content bg-primary text-white">
            <div className="modal-header">
              <h5 className="modal-title">Modal title</h5>
              <button  ref={btn} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              {
                type==="view" ?
                <div className='p-3'>
                 <h5>{data?.title}</h5>
                 <p>{data?.description}</p>
                    <div className="d-flex">
                      <p>Created On:{dateFormat(data?.createdOn)}</p>
                      <p className='ms-auto'>Due On:{dateFormat(data?.dueDate)}</p>
              
                    </div>
                </div>:
                
                type==="edit"?
                <div>
                  <TaskForm isUpdate={true} data={data} isPopup={true} btn={btn}/>
            </div>:
            <div>
              <p>Are you sure ? you want to Delete this item.</p>
              <button className='btn btn-danger me-2 onclick={onDelete}'>Yes</button>
            
    
              <button data-bs-dismiss="modal" className='btn btn-warning'>No</button>
            </div>
}
</div>
</div>
</div>
</div>
    )
}

export default Popup;
