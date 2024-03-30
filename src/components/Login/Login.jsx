import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import app from "../../firebase/firebase.init";
import { useState } from "react";

const Login = () => {
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const gihubProvider = new GithubAuthProvider()

    const [userData, setUserData] = useState(null)

    const handleGooleSingin = () =>{
        signInWithPopup(auth, googleProvider)
        .then(result => {
            const user = result.user;
            console.log('user result', user)
            setUserData(user)
        })
        .catch(error =>{
            console.log('error', error.message);
        })
    }

    const handleGithubLogin =()=>{
        signInWithPopup(auth, gihubProvider)
        .then(result => {
            const user = result.user;
            console.log('user result', user)
            setUserData(user)
        })
        .catch(error =>{
            console.log('error', error.message);
        })
    }

    const handleSingOut = () =>{
        signOut(auth) 
        .then(result =>{
            console.log('sing out result',result);
            setUserData(null)
        })
        .catch(error =>{
            console.log(error);
        })
    }

    return (
        <div>
            <h2>Login here</h2>
            {
                userData ? <button onClick={handleSingOut}>Sing Out</button>
                 : <div>
                    <button onClick={handleGooleSingin}>Google Login</button> 
                    <button onClick={handleGithubLogin}>Github login</button>
                 </div>
            }
            
            
            <div>
                {
                    userData && <div>
                        <h3>User Name: {userData?.displayName}</h3>
                                <p>User Email: {userData?.email}</p>
                    </div>
                }
            </div>
        </div>
    );
};

export default Login;