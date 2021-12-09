import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const Home = () => {
    const [students, setStudents] = useState([])
    

    useEffect(() => {
        fetch("http://localhost:5000/students")
        .then(response => response.json())
        .then(data => setStudents(data))
      },[])

      if (students == null) {
          return null
      } else {
        return (
            <div className="container">
                <div> 
                    {students.map(student => 
                        <div className="border"> 
                            <h4> {student.name} </h4>
                            <p> {student.age} </p>
                        </div>  )}
                </div>
                <button className="btn btn-outline-primary">
                    <Link to="/form"> Add students  </Link>
                </button>
                
            </div>
        );
      }
    
};

export default Home;