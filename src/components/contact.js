import React, { Component } from 'react'
import { Link } from "react-router-dom";
export default class Contact extends Component {
    render() {
        return (
            <div>
                Contact Page
                <Link to='/pensioncheck/lifesituation/salary'>
                    <button className="btn btn-light btn-block" >next</button>
                </Link>
            </div>
        )
    }
}
