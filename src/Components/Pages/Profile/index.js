  const CustomerDataHandler=(setPersonalDetails)=>{
         const  userData = JSON.parse(window.localStorage.getItem("user-data"));
  setPersonalDetails(userData);

  }

  const ImageUploader=async(profileimage,setPersonalDetails,client)=>{

        try{
            let res=await fetch(`http://localhost:4000/api/images/${client}`,{
                method:"POST",
                body:profileimage
            })
            res=await res.json();
            window.localStorage.setItem("user-data",JSON.stringify(res.data))
            console.log(res);
            alert(res.msg);
            CustomerDataHandler(setPersonalDetails);
        }
        catch(err){
            alert(err);

        }
    }


    
    const InputChangeHandler = (e,setPersonalDetails) => {
    const { name, value } = e.target;
    setPersonalDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value
    }));
  };



  const UpdateHandler = async(personalDetails,setEditable,setPersonalDetails,navigate,client) => {
    let res=await fetch(`http://localhost:4000/api/${client}/update`,{
        method:"PUT",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(personalDetails)
    })
    res=await res.json();
    console.log(res);
    setEditable(false);
    alert(res.msg);
    if(res.success){
        // alert("details succesfully updated ");
        window.localStorage.setItem("user-data",JSON.stringify(res.data));
        CustomerDataHandler(setPersonalDetails);
        navigate(`/profile/${client}`);
    }
  };


  const HandleApproval = async (approval, user, product, order,setPersonalDetails) => {
    let res = await fetch('http://localhost:4000/api/orders/approval', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ approval, user, product, order })
    })
    res = await res.json();
    window.localStorage.setItem("user-data", JSON.stringify(res.data))
    alert(JSON.parse(window.localStorage.getItem("user-data")))
    CustomerDataHandler(setPersonalDetails)
  }

    const RemoveNotification=async ( user, product, order,setPersonalDetails) => {
      console.log("user: "+user+"product: "+product+"order: "+order)
    let res = await fetch('http://localhost:4000/api/orders//removenotification', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ user, product, order })
    })
    res = await res.json();
    window.localStorage.setItem("user-data", JSON.stringify(res.data))
    alert(JSON.parse(window.localStorage.getItem("user-data")))
    CustomerDataHandler(setPersonalDetails)
  }

  const GetProducts = async (personalDetails,setPersonalDetails,setproducts) => {
    let res = await fetch("http://localhost:4000/api/products/getproducts", {
      method: "POST",
      body: JSON.stringify({ _id: personalDetails.products }),
      headers: {
        "Content-Type": "application/json"
      }
    })
    res = await res.json();
    setproducts(res.data);
    console.log("res data" + JSON.stringify(res.data))
    // personalDetails.append("products",res.data);
    // window.localStorage.setItem("user-data",JSON.stringify(personalDetails));
    // alert(JSON.stringify(personalDetails));
    CustomerDataHandler(setPersonalDetails);

  }
  const GetProducts2 = async (personalDetails,setPersonalDetails,setproducts) => {
    let res = await fetch("http://localhost:4000/api/products/getproducts", {
      method: "POST",
      body: JSON.stringify({ _id: personalDetails.products }),
      headers: {
        "Content-Type": "application/json"
      }
    })
    res = await res.json();
    setproducts(res.data);
    console.log("res data" + JSON.stringify(res.data))
    // personalDetails.append("products",res.data);
    // window.localStorage.setItem("user-data",JSON.stringify(personalDetails));
    // alert(JSON.stringify(personalDetails));
    // CustomerDataHandler(setPersonalDetails);

  }


  const GetOrder = async (personalDetails,setPersonalDetails,setorders) => {
    let res = await fetch("http://localhost:4000/api/orders", {
      method: "POST",
      body: JSON.stringify({ _id: personalDetails.orders }),
      headers: {
        "Content-Type": "application/json"
      }
    })
    res = await res.json();
    setorders(res.data);
    console.log("res data" + JSON.stringify(res.data))
    // personalDetails.append("products",res.data);
    // window.localStorage.setItem("user-data",JSON.stringify(personalDetails));
    // alert(JSON.stringify(personalDetails));
    CustomerDataHandler(setPersonalDetails);

  }


  const CancelOrder=async (order)=>{
    let res=await fetch("http://localhost:4000/api/orders/cancelorder",{
      method:"POST",
      body:JSON.stringify(order),
      headers:{
        "Content-Type":"application/json"
      }
    })
    res=await res.json();
    if(res.success)
    alert("order cancelled");
  }
  export {CustomerDataHandler,ImageUploader,InputChangeHandler,UpdateHandler,HandleApproval,GetProducts,GetProducts2,GetOrder,RemoveNotification,CancelOrder}