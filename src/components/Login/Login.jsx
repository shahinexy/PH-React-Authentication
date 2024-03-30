import { GoogleAuthProvider, getAuth } from "firebase/auth";
import app from "../../firebase/firebase.init";

const Login = () => {
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();

    const handleGooleSingin = () =>{
        console.log('google authentication');
    }

    return (
        <div>
            <h2>Login here</h2>
            <button onClick={handleGooleSingin}>Login</button>
        </div>
    );
};

export default Login;