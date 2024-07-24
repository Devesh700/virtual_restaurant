  const RegisterCustomer = async(data,navigate) => {
      let res=await fetch("http://localhost:4000/api/user/register",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify(data)
      })
      res=await res.json();
      alert(res.msg);
      if(res.success){
        window.localStorage.setItem("auth-token",res.token)
      window.localStorage.setItem("_id",res.data._id)
      window.localStorage.setItem("user-data",JSON.stringify(res.data))
      // alert(JSON.parse(window.localStorage.getItem("user-data"))._id)
      // alert(window.localStorage.getItem("auth-token"))
        navigate("/profile/customer",{state:{data:res.data}})
      }
    }

  const validatePhone = (phone) => {
    if(phone.length!==10){
        return ({phone:"phone number must be of 10 digits"})
    }
    else if(isNaN(phone)){
        return ({phone:"please enter a valid phone number"})
    }
    else{
        return ({phone:""})
    }
  }

  const validatePassword = (password) => {
    const length = password.length;
    if (length > 15 || length < 8) {
      return ((prevWarnings) => ({ ...prevWarnings, password: 'Password length must be between 8-15' }));
    } else {
      return ((prevWarnings) => ({ ...prevWarnings, password: '' }));
    }
  }

  const validateConfirmPassword =(confirmPassword,password) => {
    if (password !== confirmPassword) {
      return ((prevWarnings) => ({ ...prevWarnings, confirmPassword: 'Confirm password does not match' }));
    } else {
      return ((prevWarnings) => ({ ...prevWarnings, confirmPassword: '' }));
    }
  };

  export {validatePhone,validatePassword,validateConfirmPassword,RegisterCustomer}