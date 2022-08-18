import React from "react";
import memberInfo from "./memberInfo"
import { useParams } from 'react-router-dom';

function MemberDetails ({match}) {
    const { id } = useParams();
    console.log(id);
    const member = memberInfo[id-1];
    return(
        
            <div style={{display: "flex",flexDirection: "row",alignItems: "center",margin: "0.5rem",marginTop:"150px"}} >
                    <img style={{maxWidth: '40%' }} src={member.img} alt={member.name}/>
                <div style={{maxWidth: '40%', marginLeft : '20px'}}>
                    <h1>{member.name}</h1>
                    <h3>{member.position}</h3>                    
                    <h6>Département : {member.departement}</h6>
                    <h6>Email : {member.email}</h6>
                    <h6>Tél : {member.phone}</h6>
                    <h6>Fax : {member.Fax}</h6>

                </div>
            </div>
        
    )
}

export default MemberDetails;




/*
import React, { Component } from "react";
import memberInfo from "./memberInfo"
import { useParams } from 'react-router-dom';
import "./MemberDetails.css"
function MemberDetails ({match}) {
    const { id } = useParams();
    console.log(id);
    const member = memberInfo[id-1];
    return(
        
            <div style={{display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                        margin: "0.5rem"}} >
                <div>
                    
                    <img style={{maxWidth: '40%'}} src={member.img}/>
                </div>
                <div style={{maxWidth: '40%'}} >
                    <h1>{member.name}</h1>
                    <h3>{member.position}</h3>
                    <div>{member.phone}</div>
                    <div>{member.email}</div>
                    <div>{member.website}</div>
                </div>
            </div>
        
    )
}

export default MemberDetails;
*/



/*
import React, { Component } from "react";
import memberInfo from "./memberInfo"
import { useParams } from 'react-router-dom';

function MemberDetails ({match}) {
    const { id } = useParams();
    console.log(id);
    const member = memberInfo[id-1];
    return(
        
            <div style={{marginLeft: '470px'}} >
                <div>
                    <h1>{member.name}</h1>
                    <img style={{maxWidth: '40%'}} src={member.img}/>
                </div>
                <div style={{maxWidth: '40%'}} >
                    <h3>{member.position}</h3>
                    <div>{member.phone}</div>
                    <div>{member.email}</div>
                    <div>{member.website}</div>
                </div>
            </div>
        
    )
}


export default MemberDetails;
*/
