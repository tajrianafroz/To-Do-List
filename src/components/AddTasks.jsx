import React from 'react';

const AddTasks = () => {
    return (
        <div className='col-5 mx-auto my-5'>
            <div className="card">
                <div className="card-header bg-dark text-white">Add Task</div>
                <div className="card-body">
                    <form className='d-flex'>
                        <input className='form-control' type="text" placeholder='Add Task'/>
                        <button className='btn btn-sm btn-dark col-2'>+ Task</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddTasks;