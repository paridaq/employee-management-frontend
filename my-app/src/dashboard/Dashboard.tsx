import { useEffect, useState } from "react";




type Employee = {
     id: number;
     name: string;
     email:string;
     phone:string;
     department:string;
     

     // add other properties as needed, e.g. name: string;
};

function Dashboard(){
     const[employees,setEmployees] = useState<Employee[]>([]);


useEffect(()=>{
     const fetchemployees  = async()=>{
          try {
               const res = await fetch("http://localhost:8080/api/employees");
               const result = await res.json()
               setEmployees(result)

          } catch (error) {
               if (error instanceof Error) {
                    console.error(error.message);
               } else {
                    console.error(error);
               }
          }
     }
     fetchemployees()
},[])

     return(

    <>
    <div>
     {employees.map((employee)=>(
          <ul key={employee.id}>
               <li>{employee.name}</li>
               <li>{employee.email}</li>
               <li>{employee.phone}</li>
               <li>{employee.department}</li>
               <button>update</button>
               <button>delete</button>
          </ul>
     ))}
    </div>
    
    
    </>

     )
}

export default Dashboard;