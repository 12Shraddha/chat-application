import React from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { logout } from '../../Actions/LoginAction';
import "./Home.css";
import { Actiontype } from '../../Actions/ActionType';
//import { useNavigate } from "react-router-dom";


const Home = () => {
  const useselect = useSelector((state: any) => state.users.id);
    //const navigate = useNavigate();

  const handleLogout = (e:any) => {
    e.preventDefault();
    
    const dispatch = useDispatch();
    dispatch(logout());
    // navigate(-1);
    

  }
    return (
      <div className="Home">
        <h3>Welcome!!</h3>
        <button
          className="btn-primary"
          type="submit"
          onClick={(e: any) => handleLogout(e)}
        >
          {useselect}
          Logout
        </button>
      </div>
    );
}

export default Home