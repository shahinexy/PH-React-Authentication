import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../../firebase/firebase.init";

const Login = () => {
    const auth = getAuth(app);
    console.log(auth);
    const provider = new GoogleAuthProvider();

    const handleGooleSingin = () =>{
        signInWithPopup(auth, provider)
        .then(result => {
            const user = result.user;
            console.log('user result', user);
        })
        .catch(error =>{
            console.log('error', error.message);
        })
    }

    return (
        <div>
            <h2>Login here</h2>
            <button onClick={handleGooleSingin}>Login</button>
        </div>
    );
};

export default Login;