import { useContext, useState } from 'react'
import UserContext from '../context/UserContext';

function Login() {
    const [username, setUsername]= useState('');
    const [password, setPassword]= useState('');

    const {setUser}=useContext(UserContext);

    const handleSubmit = (e) =>{
        e.preventDefault();

        if(username==='' || password==='') return
        setUser({username, password})
    }

    return (
        <div>
            <input 
                value={username}
                onChange={(e)=>setUsername(e.target.value)}
                type="text" 
                placeholder='username'
            />{" "}
            <input 
                value={password} 
                onChange={(e)=>setPassword(e.target.value)} 
                type="password" 
                placeholder='password' 
            />{" "}
            <button onClick={handleSubmit} type='submit'>Submit</button>
        </div>
    )
}

export default Login;