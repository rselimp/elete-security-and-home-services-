import { data } from 'autoprefixer';
import { getAuth, sendEmailVerification, updateProfile } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider/AuthProvider';
import app from '../firebase/firebase.config';
import singupimage from '../images/signup.jpg';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useToken from '../hooks/useToken';


const auth = getAuth(app)



const SignUp = () => {
    const {createUser}  = useContext(AuthContext)
    const[createdUserEmail, setCreatedUserEmail] = useState('')
    const[token] = useToken(createdUserEmail)
   const navigate = useNavigate();
   const[passwordError, setPasswordError] = useState('')
   
    if(token){
        navigate('/')
    }


    const handleSignUp = event =>{
      
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        //console.log(name,email,password)
        
        createUser(email, password)
        .then(result =>{
            const user = result.user;
            //console.log(user) 
            saveUser(name,email)
            updateUserName(name)
            toast.info('user create successFully',{position:"bottom-center"})
            form.reset();
            verifyEmail();

        })
        .catch(error =>{ 
            console.error(error)
            setPasswordError(error.message)
        
        })
    }

    const verifyEmail  =() =>{
        sendEmailVerification(auth.currentUser)
        .then( () =>{
            alert('Please check your email and verify')
        })
    }


    const updateUserName =name =>{
        updateProfile(auth.currentUser ,{
            displayName: name
        })
        .then( () =>{
           

        })
        .catch(error=>console.log(error))
    }


    const saveUser = (name, email) =>{
        const user = {name, email};
        fetch('https://elete-security-home-services-server.vercel.app/users',{
            method: 'POST',
            headers:{
                'content-type' : 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res =>res.json())
        .then(data =>{
           // console.log('saveuser', data)
           setCreatedUserEmail(email)
            
            
        })
    }

    // const getUserToken = email =>{
    //     fetch(`https://elete-security-home-services-server.vercel.app/jwt?email=${email}`)
    //     .then(res =>res.json())
    //     .then(data =>{
    //         console.log(data)
    //         if(data.accessToken){
    //                localStorage.setItem('accessToken', data.accessToken) 

    //                navigate('/');
    //         }

    //         })
                      
    // }

    return (
        <div className="hero w-full my-20">
        <div className="hero-content grid md:grid-cols-2 flex-col lg:flex-row">
            <div className="text-center lg:text-left">
             <img className='' style={{width:'400px'}} src={singupimage} alt="" />  
                
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-20 dark:bg-gray-500">
            <h1 className="text-5xl text-center font-bold dark:text-white">Sign Up</h1>
                <form onSubmit={handleSignUp} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text dark:text-white">Name</span>
                        </label>
                        <input type="text" name='name' placeholder="Name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text dark:text-white">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="Email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text dark:text-white">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="Password" className="input input-bordered" required />
                        
                    </div>
                    <div className="form-control mt-6">
                        <input className="btn btn-primary" type="submit" value="SignUp" />
                        <ToastContainer></ToastContainer>
                    </div>
                </form>
                <p className='text-center text-red-600'>{passwordError}</p>
                <p className='text-center dark:text-white'>Already have an account please <Link className='text-orange-600 font-bold' to='/login'>Login</Link></p>
            </div>
        </div>
    </div>
    );
};  

export default SignUp;