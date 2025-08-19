import { useEffect, useState } from "react";
import { useNavigate } from "react-router";




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
     const navigate = useNavigate();


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


const handleDelete =async(id:number)=>{
     try {
          const res = await fetch(`http://localhost:8080/api/employee/${id}`,{
           method:"DELETE",
             
          })
          if(res.ok){
               setEmployees((prevEmployees)=>
               prevEmployees.filter((employee)=>employee.id!=id))
               //so the content inside the filter means filter the content which is not equl to the given id like filter all expect this
          }
          console.log("empoyee with the id is deleted succesfully")  
     } catch (error) {
        console.log(error)  
     }
}
const updateUser=(id:number)=>{
    navigate(`/employee/${id}`)
}

     return(

    <>
    <div>
     {employees.map((employee)=>(
          <ul key={employee.id}>
               <li>{employee.name}</li>
               <li>{employee.email}</li>
               <li>{employee.phone}</li>
               <li>{employee.department}</li>
               <button onClick={()=>updateUser(employee.id)}>update</button>
               <button onClick={()=>handleDelete(employee.id)}>delete</button>
          </ul>
     ))}
    </div>
    
    
    </>

     )
}

export default Dashboard;