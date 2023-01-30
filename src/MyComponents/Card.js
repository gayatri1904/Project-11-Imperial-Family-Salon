import React from "react";
import MediaQuery from "react-responsive";
import '../MyResources/Services.css'

const Card = (props) => {
	return (
		<>
			<MediaQuery maxDeviceWidth={800}>
			<div className="col-md-3 mx-auto cardBorder" style={{flexDirection:"row",paddingTop:"13%"}}>
				<div className="card my-1 mx-auto recruitersCard" style={{width:'30px',backgroundColor:"transparent",position:"relative",right:"35px",border:"none",boxShadow:"none"}}>
					<img src={props.imgsrc}  alt={props.imgsrc} style={{width:"100px",height:"100px",borderRadius:"50%",border:"4px solid white"}} />
					<center>
					<div className='cardBodyMy'>
						<h5 className="card-title font-weight-bold" style={{color:"white",textAlign:"center",width:"100px",paddingTop:"10px",marginLeft:"-15px"}}>{props.title}</h5>
					</div>
					</center>
				</div>
			</div>
			</MediaQuery>
			<MediaQuery minDeviceWidth={1224}>
			<div className="col-md-3 mx-auto cardBorder" style={{flexDirection:"row",paddingTop:"54px"}}>
				<div className="card my-1 mx-auto recruitersCard" style={{width:'30px',backgroundColor:"transparent",position:"relative",right:"70px",border:"none",marginTop:"10%",boxShadow:"none"}}>
					<img src={props.imgsrc}  alt={props.imgsrc} style={{width:"150px",height:"150px",borderRadius:"50%",border:"4px solid white",marginTop:"40px"}} />
					<center>
					<div className='cardBodyMy' style={{width:"50px"}}>
						<h5 className="card-title font-weight-bold" style={{color:"white",marginLeft:"2%",paddingTop:"10px"}}>{props.title}</h5>
					</div>
					</center>
				</div>
			</div>
			</MediaQuery>
		</>
	);
};

export default Card;
