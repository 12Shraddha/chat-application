import "./Login.css";
import React,{useState} from 'react';
import Form from "./Form";
import image1 from "../image/agora-small-groups.jpg";
import { useDispatch, useSelector } from "react-redux";
import { Actiontype } from "../../Actions/ActionType";
import { Reducer } from "../../Reducer";
import PageLoader from "./PageLoader";
import Home from "../HomePage/Home";
//import Switch from "react-router-dom";
//import { Route} from "react-router-dom";



const Login= () => {
  const [formInput,setFormInput]=useState<string>("");
  const [formPassword, setFormPassword] = useState<string>("");
  const dispatch = useDispatch();
  const states = useSelector((state: any) => state);
  console.log("Login page",states);  
  return (
    <div>
      <Form
        formInput={formInput}
        setFormInput={setFormInput}
        formPassword={formPassword}
        setFormPassword={setFormPassword}
      ></Form>
      <img src={image1} alt="xyz" />
      {states.loading ? (
        <PageLoader />
      ) : (states.users) ? (
      "YES"
      ) : (
        "NOT"
      )}
    </div>
  );
}

export default Login