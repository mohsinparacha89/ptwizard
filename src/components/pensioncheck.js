import React, { Component } from 'react'
import { Link } from "react-router-dom";
export default class Pensioncheck extends Component {


    render() {
        return (
            <div>
                <Link to='/pensioncheck/lifesituation'>
                    <button className="btn btn-light btn-block" >Pensioncheck</button>
                </Link>
            </div>
        )
    }
}
