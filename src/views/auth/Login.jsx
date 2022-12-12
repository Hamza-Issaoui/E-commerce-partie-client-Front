import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginFailure, loginStart, loginSuccess } from '../../redux/UserRedux';
import AuthServices from '../../services/AuthServices';
import './Login.css'

const Login = () => {

  const navigate = useNavigate()

  const dispatch = useDispatch()


// pour afficher les message d'erreur
const initialValues = { email: "", password: "" };
const [formErrors, setFormErrors] = useState({});

const [isSubmit, setIsSubmit] = useState(false);

// creer une copie du data
const [data, setData] = useState( initialValues)

const handelChange = (e) => {
    //console.log(e)
    setData({
        ...data,
        [e.target.name] : e.target.value
    });
};

const submitHandler = (e) => {
  e.preventDefault()

dispatch(loginStart())

  AuthServices.login(data).then(res => {
      console.log(res)
      setData(res.data)

dispatch(loginSuccess(res.data))

      navigate("/")


  }).catch(err => {
      console.log(err)

dispatch(loginFailure())

      setFormErrors(validate(data, err));
      setIsSubmit(true);
  })

}

useEffect(() => { 
  console.log(formErrors);
  if (Object.keys(formErrors).length === 0 && isSubmit) {
    console.log(data);
  }
}, [formErrors]);

const validate = (values, err) => {
  const errors = {};
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  // afficher les erreurs du email
  if (err.response && err.response.status === 404 ) {
      errors.email = err.response.data.msg 
  }
  
  if (!values.email) {
    errors.email = "Email is required!";
  } else if (!regex.test(values.email)) {
    errors.email = "This is not a valid email format!";
  }
  // afficher les erreurs du mot de passe
  if (err.response && err.response.status === 406 ) {
      errors.password = err.response.data.msg
  }

  if (!values.password) {
    errors.password = "Password is required";
  } else if (values.password.length < 4) {
    errors.password = "Password must be more than 4 characters";
  } else if (values.password.length > 10) {
    errors.password = "Password cannot exceed more than 10 characters";
  }
  return errors;
};






  return (
  <div className="container h-100">
  <div className="d-flex justify-content-center h-100">
    <div className="user_card" style={{marginTop:"100px"}}>
      <div className="d-flex justify-content-center">
        <div className="brand_logo_container">
          <img src="https://cdn.freebiesupply.com/logos/large/2x/pinterest-circle-logo-png-transparent.png" className="brand_logo" alt="Logo" />
        </div>
      </div>
      <div className="d-flex justify-content-center form_container">
        <form  class="form-horizontal"  onSubmit={submitHandler}  >
          <div className="input-group mb-3">
            <div className="input-group-append">
              <span className="input-group-text"><i className="fas fa-user" /></span>
            </div>
            <input type="email"
                  class="form-control"
                  placeholder="Email"
                  name="email"
                  value={data.email}
                  onChange={handelChange} />
            <p style={{color:"white"}}>{formErrors.email}</p>

          </div>
          <div className="input-group mb-2">
            <div className="input-group-append">
              <span className="input-group-text"><i className="fas fa-key" /></span>
            </div>
            <input type="password"
                  class="form-control"
                  placeholder="Password"
                  name="password"
                  value={data.password}
                  onChange={handelChange} />
            <p style={{color:"white"}}>{formErrors.email}</p>

          </div>
          <div className="form-group">
            <div className="custom-control custom-checkbox">
              <input type="checkbox" className="custom-control-input" id="customControlInline" />
              <label className="custom-control-label" htmlFor="customControlInline">Remember me</label>
            </div>
          </div>
          <div className="d-flex justify-content-center mt-3 login_container">
            <button type="submit" name="button" className="btn login_btn">Login</button>
          </div>
        </form>
      </div>
      <div className="mt-4">
        <div className="d-flex justify-content-center links">
          Don't have an account? <a href="#" className="ml-2">Sign Up</a>
        </div>
        <div className="d-flex justify-content-center links">
        <a href="/forgetpass" class="btn btn-link btn-block">
              Forgot your password?</a>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default Login