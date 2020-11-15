import React ,{ useState} from 'react'
import axios from 'axios'

function Login() {
    const [res, setRes] = useState([])
    const loginfun = () => {
        axios.get('http://localhost:5000/req').then(resp => {setRes(resp)}).then(console.log(res))
    }
    return (
        <div>
           
           <button onClick={loginfun}> get user</button> 
           <a href="http://localhost:5000/auth/google"><button > click me</button></a>
           <a href="http://localhost:5000/req"><button > click me</button></a>
           <a href="http://localhost:5000/auth/logout"><button > logout </button></a>
        </div>
    )
}

export default Login
