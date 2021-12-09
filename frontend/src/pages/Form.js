import React, { useState } from 'react';
import { useNavigate } from 'react-router';

const Form = () => {
    const [name, setName] = useState("")
    const [age, setAge] = useState(0)
    const [error, setError] = useState(false)
    let navigate = useNavigate()
    

    const handleChangeName = e => {
        setName(e.target.value)
    }

    const handleChangeAge = e => {
        setAge(e.target.value)
    }



    const handleSubmit = e => {
        e.preventDefault()
        console.log(typeof age);
        if (name !== "" && Number(age) !== 0 ) {
            
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
            .then(data => {
                console.log(data);
                if (data.status === 'success') {
                    navigate('/')
                    setError(false)
                } 
            })
        } else {
                setError(true)
            
        }
          
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
                {error ? <p> Erreur !! Veuillez remplir tous les champs du formulaire </p> : "" }
                
            </form>
        </>
    );
};

export default Form;