import React, { Component } from "react";
import { Link } from "react-router-dom"


class TeamMember extends Component {
    render(){
        console.log(this.props.id)
    return(
        <Link to={`/member/${this.props.id}`} className="col-md-4 col-sm-6" style={{ color: 'inherit', textDecoration: 'inherit' }}>
            <div className="card">
                <div className="card-header">
                    <img style={{maxWidth: '100%'}} src={this.props.img} alt=""/>
                </div>
                <div className="card-body">
                    <h2>{this.props.name}</h2>
                    <h5>{this.props.position}</h5>
                </div>
            </div>
        </Link>
    )
}
}

export default TeamMember;
