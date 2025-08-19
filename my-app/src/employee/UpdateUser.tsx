import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";



function UpdateUser(){

     const [name ,setName] = useState("");
    const[email,setEmail] = useState("");
    const [phone,setPhone]= useState("");
    const[department,setDepartment] = useState("");
    const navigate = useNavigate();
      const {id} = useParams();

    useEffect(()=>{
        const fetchUser = async()=>{
            try{
            const res = await fetch(`http://localhost:8080/api/employee/${id}`)
        const result = await res.json();
        setName(result.name)
        setEmail(result.email)
        setPhone(result.phone)
        setDepartment(result.department)
            }catch(error){
                console.log(error)
            }
        }
        fetchUser();
    },[id])

    const handleSubmit =async(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        const data = {
              name,email,phone,department
        }
        try {
            const res = await fetch(`http://localhost:8080/api/employee/${id}`,{
                method:"PATCH",
                headers:{
                    "Content-Type":"application/json"
                },
                body :JSON.stringify(data)
            })
            const result = await res.json();
            console.log(result)
            console.log("user updated")
            navigate("/dashboard")
        } catch (error) {
            console.log(error)
        }

    }

    return(
        <>
        <div>updateuser component</div>
           


            <form onSubmit={handleSubmit}>

          <label htmlFor="">name</label>
          <input type="text" 
          value={name}
          required
          placeholder="enter the name"
          onChange={e=>setName(e.target.value)}/>
          <label htmlFor="">email</label>
          <input type="text"
          value={email}
          required
          placeholder="enter the email"
          onChange={e=>setEmail(e.target.value)} />
          <label htmlFor="">phone</label>
          <input type="text" 
          required
          placeholder="enter the phone number"
          value={phone}
          onChange={e=>setPhone(e.target.value)}/>
          <label htmlFor="">department</label>
          <input type="text"
          required
          placeholder="department"
          value={department}
          onChange={e=>setDepartment(e.target.value)} />
          
          <button type="submit">update  user</button>
          </form>

        </>
    )
}
export default UpdateUser