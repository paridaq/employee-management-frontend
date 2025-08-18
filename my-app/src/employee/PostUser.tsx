import { useState } from "react";

  

  function PostUser(){

    const [name ,setName] = useState("");
    const[email,setEmail] = useState("");
    const [phone,setPhone]= useState("");
    const[department,setDepartment] = useState("");

  const handleSubmit=(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    const data ={name,email,phone,department}

  }


    return (
        <>
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
              <input type="text" required
              placeholder="name"
              value={name || ""}
              onChange={e => setName(e.target.value)}/>
            <label htmlFor="email">Email</label>
            <input type="text"
            required
            placeholder="email"
            value={email || ''}
            onChange={e=>setEmail(e.target.value)} />
        
            <label htmlFor="text">phone</label>
            <input type="text"
            required
            placeholder="phone"
            value={phone || ''}
            onChange={e=>setPhone(e.target.value)} />
        
            <label htmlFor="text">department</label>
            <input type="text"
            required
            placeholder="department"
            value={department || ''}
            onChange={e=>setDepartment(e.target.value)} />
            <button type="submit">submit </button>
        
        </form>
        </>
    )
  }

  export default PostUser;