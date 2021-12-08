import React, { useState } from 'react';

const Form = () => {
    const [name, setName] = useState(null)
    const [age, setAge] = useState(null)

    const handleChangeName = e => {
        setName(e.target.value)
    }

    const handleChangeAge = e => {
        setAge(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault()
    
        const student = {
          name: name,
          age: Number(age)
        }
    
        fetch('http://localhost:5000/students', {
          method: "post",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(student)
        })
          .then(response => response.json())
          .then(data => console.log(data))
      }
    

    return (
        <>
            <form className="container m-5" onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Add student</label>
                    <input onChange={handleChangeName} type="text" className="form-control my-3" placeholder="Name" />
                </div>
                <div className="mb-3">
                    <input onChange={handleChangeAge} type="number" className="form-control my-3" placeholder="Age" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </>
    );
};

export default Form;