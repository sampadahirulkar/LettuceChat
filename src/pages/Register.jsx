import React, { useState } from 'react'
import AddAvatar from "../img/addAvatar.png"
import {createUserWithEmailAndPassword,updateProfile } from "firebase/auth";
import {auth,storage} from "../firebase";
import {ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";


export const Register = () => {
  const [err,setErr] = useState(false);
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const displayName = e.target[0].value;
  //   const email = e.target[1].value;
  //   const password = e.target[2].value;
  //   const file = e.target[3].files[0];

  //   try{
  //         const res = await createUserWithEmailAndPassword(auth, email, password);
  //         const storageRef = ref(storage, displayName);
  //         // const uploadTask = uploadBytesResumable(storageRef, file);
  //         // uploadTask.on(
  //         //   (error) => {
  //         //     setErr(true);
  //         //   },
  //         //   () => {
  //         await uploadBytesResumable(storageRef, file).then(()=>
  //         {
  //           getDownloadURL(storageRef).then(async (downloadURL) => 
  //           {
  //           try 
  //           {
  //             await updateProfile(res.user,
  //             {
  //               displayName,
  //               photoURL:downloadURL
  //             })
  //           }
  //           catch (err)
  //           {
  //             setErr(true);
  //           }
          
  //     }
  //   );
  //   }
          
  //   catch (err){
  //     setErr(true);
  //   }
          
  // }



  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try {
      //Create user
      const res = await createUserWithEmailAndPassword(auth, email, password);

      //Create a unique image name
      const date = new Date().getTime();
      const storageRef = ref(storage, displayName);

      await uploadBytesResumable(storageRef, file).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          try {
            //Update profile
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            });
          } catch (err) {
            console.log(err);
            setErr(true);
            setLoading(false);
          }
        });
      });
    } catch (err) {
      setErr(true);
      setLoading(false);
    }
  };
  return (
    <div className='formContainer'>
        <div className="formWrapper">
            <span className="logo">LettuceChat</span>
            <span className="title">Register</span>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='display name'/>
                <input type="email" placeholder='email'/>
                <input type="password" placeholder='password'/>
                <input style={{display:"none"}} type="file" id='file'/>
                <label htmlFor='file'>
                    <img src={AddAvatar} alt="add_avatar" />
                    <span>Add an Avatar</span>
                </label>
                <button>Sign up</button>
                {err && <span>Something went wrong....</span>}
            </form>
            <p>Already have a patch? Login!</p>
        </div>
    </div>
  )
}

export default Register;