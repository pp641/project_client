import React from 'react'
import { Pagination, Typography } from "@mui/material";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, Link, Outlet } from "react-router-dom";
import { Button } from "reactstrap";
import logo from '../images/logo.jpg'

const dashboard = () => {
  return (
      
    <>
    <div>
        <img src={logo} alt="logo" className='logo'/>
        <div className='container p-5 dashboard_content'>
            <div className='row'>
                <Typography
                    variant="h3"
                    
                >
                    <p className='dash_text'> Welcome to <font color="#4a32b6">PPReads</font><br/>Experience the contents in new way<br/><br/></p>
                </Typography>
            </div>
            
            <div className='row p-5 dash_btn'>

                <div className='col-3'></div>
                <div className='col-3'>
                    <Link to="/login">
                    <Button
                        variant="contained"
                        color="primary"
                        className='dash_btns'
                    >
                        Login
                    </Button>
                    </Link>
                </div>
                <div className='col-3'>
                    <Link to="/register">
                    <Button
                        variant="contained"
                        color="success"
                        className='dash_btns'
                    >
                        Register
                    </Button>
                    </Link>
                </div>

            </div>
        </div>
    </div>
    
    </>
  )
}

export default dashboard