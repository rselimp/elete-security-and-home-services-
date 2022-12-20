import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import app from '../../firebase/firebase.config';
import loginicons from '../../images/loginicon.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useToken from '../../hooks/useToken';

const auth = getAuth(app)

const Login = () => {
    const {login,signInWithGoogle} = useContext(AuthContext)
    const[passwordError, setPasswordError] = useState('')
    const [userEmail, setUserEmail] = useState('')
    const[loginUserEmail, setLoginUserEmail] = useState('')
    const[token] = useToken(loginUserEmail)
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/'
   

    const handleLogin = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        login(email, password)
        .then(result=>{
            const user = result.user;
            console.log(user)
            setLoginUserEmail(email)
            form.reset()
        navigate(from, {replace: true});
    
        })
        .catch(error => 
            {console.error(error)
            setPasswordError(error.message)
            
            })
            
    }

    const handleEmailBlur = event =>{
        const email = event.target.value;
        setUserEmail(email)
        console.log(email)
    }

    const handleForgetPassword =() =>{
        if(!userEmail){
            alert('please enter your email address')
            return;
        }
        sendPasswordResetEmail(auth, userEmail )
        .then(() =>{
            toast.success('Password reset email sent.Please check your email',{position:"bottom-center"})
        })
        .catch(error=>console.log(error))
    }

    const handleGoogleSignIn =() =>{
        signInWithGoogle()
        .then(result =>{
            const user = result.user;
            console.log(user)
            navigate(from, {replace: true});
        })
        .catch(error =>console.error(error))

    }




    return (
        
            <div className="hero w-full my-20 dark:bg-gray-600">
                <div className="hero-content grid md:grid-cols-2 flex-col lg:flex-row">
                    <div className="text-center lg:text-left">
                     <img className='' style={{width:'400px'}} src={loginicons} alt="" />  
                        
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-20 dark:bg-gray-600">
                    <h1 className="text-5xl text-center font-bold dark:text-white">Login now!</h1>
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text dark:text-white">Email</span>
                                </label>
                                <input onBlur={handleEmailBlur} name='email' type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text dark:text-white">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <p><button onClick={handleForgetPassword} className='btn btn-link dark:text-white'>Forgot password?</button></p>
                                </label>
                            </div>
                            <div className="form-control mt-4">
                                <input className="btn btn-primary" type="submit" value="Login" />
                                <button className='btn btn-outline btn-accent mt-2 rounded-full' onClick={handleGoogleSignIn}>Google Login</button>

                                <ToastContainer></ToastContainer>
                            </div>
                        </form>
                        <p className='text-center text-red-600'>{passwordError}</p>
                        <p className='text-center dark:text-white'>New to this Service <Link className='text-orange-600 font-bold' to='/signup'>SignUp</Link></p>
                    </div>
                </div>
            </div>

    );
};

export default Login;