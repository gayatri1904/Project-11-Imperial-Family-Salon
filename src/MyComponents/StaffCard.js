import React from 'react';
import MediaQuery from 'react-responsive';

export default function StaffCard(props) {
  return (
      <>
	  	<MediaQuery maxDeviceWidth={600}>
			<div className="col-md-3 mx-auto cardBorder" style={{flexDirection:"row",paddingTop:"54px"}}  data-aos="fade-down">
				<div className="card my-1 mx-auto recruitersCard" style={{width:'30px',backgroundColor:"white",position:"relative",right:"35px",border:"none"}}>
					<img src={props.imgsrc}  alt={props.imgsrc} style={{width:"100px",height:"100px",borderRadius:"50%",border:"4px solid rgb(177 167 229)"}} />
					<center>
					<div className='cardBodyMy' style={{width:"5px"}}>
						<h5 className="card-title font-weight-bold" style={{color:"black",textAlign:"center",width:"75px",paddingTop:"10px"}}>{props.title}</h5>
						<h3 className="card-title font-weight-bold" style={{color:"grey",textAlign:"center",width:"100px",fontSize:"1rem",marginLeft:"-15px"}}>{props.post}</h3>
					</div>
					</center>
				</div>
			</div>
			</MediaQuery>
			<MediaQuery minDeviceWidth={1224}>
			<div className="col-md-3 mx-auto cardBorder" style={{flexDirection:"row",paddingTop:"54px"}}  data-aos="fade-down">
				<div className="card my-1 mx-auto recruitersCard" style={{width:'30px',backgroundColor:"white",position:"relative",right:"70px",border:"none"}}>
					<img src={props.imgsrc}  alt={props.imgsrc} style={{width:"150px",height:"150px",borderRadius:"50%",border:"4px solid rgb(177 167 229)"}} />
					<center>
					<div className='cardBodyMy' style={{width:"5px"}}>
						<h5 className="card-title font-weight-bold" style={{color:"black",textAlign:"center",width:"200px",paddingTop:"10px",marginLeft:"-37px"}}>{props.title}</h5>
						<h3 className="card-title font-weight-bold" style={{color:"grey",textAlign:"center",width:"100px",fontSize:"1rem",marginLeft:"9px"}}>{props.post}</h3>
					</div>
					</center>
				</div>
			</div>
			</MediaQuery>
		</>
  )
}
