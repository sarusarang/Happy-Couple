import React from 'react'
import { useState } from 'react'
import './Auth.css'
import { toast } from 'sonner'
import { Register } from '../Services/AllApi'

function Auth() {



  // TO check Login and Register Status
  const [LoginStatus, setLoginStatus] = useState(true)


  // Login Data
  const [LoginData, setLoginData] = useState({

    email: "", password: "", password2: "", username: "",

  })




  // Handle Login
  const HandleRegister = async () => {


    try {


      const { email, password, password2, username } = LoginData



      if (!username || !email || !password || !password2) {

        toast.warning("Empty Feilds...!")

      }
      else {



        const reqheader = {

          "Content-Type": "multipart/form-data"

        }


        const formdata = new FormData
        formdata.append("email", email)
        formdata.append("username", username)
        formdata.append("password", password)
        formdata.append("password2", password2)


        const res = await Register(formdata ,reqheader)


        if (res.status >= 200 && res.status <=300 ) {

          toast.success("Login Success...!")
          console.log(res);

        }
        else {

          toast.error(res.response.data.username || res.response.data.password)
         

        }


      }



    }
    catch (err) {

      console.log(err);



    }


  }


  console.log(LoginData);




  return (

    <>


      <section className='login'>

        <nav className='w-100 p-4'>

          <div className='login-logo'>

            <img src="/NAV-LOGO.png" className='img-fluid' alt="" />

          </div>

        </nav>


        {/* Login */}
        <div className='w-100 d-flex justify-content-center align-items-center'>

          <div className='login-form row shadow border'>


            <div className='col-md-6 form-img'>

              <img src="https://static.vecteezy.com/system/resources/previews/006/912/004/non_2x/secure-login-and-sign-up-concept-illustration-vector.jpg" className='img-fluid' alt="" />

            </div>



            {

              LoginStatus ?


                <form onSubmit={(e) => { e.preventDefault() }} className='col-md-6 mt-2'>

                  <h1>Login</h1>

                  <input type="email" onChange={(e) => { setLoginData({ ...LoginData, email: e.target.value }) }} className='form-control' placeholder='Enter your Email' /> <br />

                  <input type="password" onChange={(e) => { setLoginData({ ...LoginData, password: e.target.value }) }} className='form-control' placeholder='Enter Your Password' />

                  <button type='submit' className='btn-login w-100 mt-3'>Login</button>

                  <button class="google-login-btn mt-3 w-100">
                    <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google logo" class="google-icon" />
                    Login with Google
                  </button>

                  <p className='text-center mt-3'>Don't have an account ? <a className='dont' onClick={() => { setLoginStatus(false) }}>Register</a></p>


                </form>


                :


                <form onSubmit={(e) => { e.preventDefault() }} className='col-md-6 mt-2'>

                  <h1>Sign Up</h1>

                  <input type="text" value={LoginData.name} onChange={(e) => { setLoginData({ ...LoginData, username: e.target.value }) }} className='form-control' placeholder='Enter your username' /> <br />

                  <input type="email" onChange={(e) => { setLoginData({ ...LoginData, email: e.target.value }) }} className='form-control' placeholder='Enter your Email' /> <br />

                  <input type="password" onChange={(e) => { setLoginData({ ...LoginData, password: e.target.value }) }} className='form-control' placeholder='Enter Your Password' />

                  <input type="password" onChange={(e) => { setLoginData({ ...LoginData, password2: e.target.value }) }} className='form-control mt-3' placeholder=' Re-Enter Password' />

                  <button type='submit' className='btn-login w-100 mt-3' onClick={HandleRegister}>Register</button>

                  <p className='text-center mt-3'>Already Registerd ? <a className='dont' onClick={() => { setLoginStatus(true) }}>Login</a></p>


                </form>


            }


          </div>


        </div>


      </section>





    </>


  )


}

export default Auth