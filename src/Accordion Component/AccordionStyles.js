import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  accordion: {
    display: "flex",
    flexDirection: "column",
    gap: "1.25em",
    padding: "15.5em",
    paddingTop:"1rem",
    background: "white",
    borderRadius: "5px",
    marginTop:"20px",
    marginBottom:"-150px",
    "@media (max-width: 600px)": {
      padding: "2.5em",
      paddingTop:"2%",
      marginBottom:"0px"
    }
  },
  accordionEvent: {
    display: "flex",
    flexDirection: "column",
    gap: "1.25em",
    padding: "5.5em",
    paddingTop:"1rem",
    borderRadius: "5px",
    paddingLeft:'20%',
    paddingRight:'20%',
    "@media (max-width: 600px)": {
      paddingLeft:'10%',
    paddingRight:'10%',
    }
  },
  card: {
    borderRadius: "10px",
    background: "white",
    boxShadow: "0 1px 10px grey"
  },
  cardBodyMy:{
    paddingTop:".5rem",
    "@media (max-width: 600px)": {
      paddingRight:"20%"
    }
  },
  titleContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height:"50px",
    cursor:"pointer",
    "@media (max-width: 600px)": {
      height:"69px",
      marginBottom:"-15px",
    }
  },
  title: {
    color: "black",
    fontSize: "1.25rem",
    textTransform: "uppercase",
    paddingLeft:"15px",
    marginTop:"5px",
    width:"800px",
    textAlign:"center",
    "@media (max-width: 600px)": {
      fontSize:"0.8rem",
      marginTop:"-8px",
      fontWeight:"700"
  }
  },
  desc: {
    color: "black",
    fontSize: "1.25rem",
    padding: "15px",
    textAlign:'justify',
    "@media (max-width: 600px)": {
      fontSize:"1rem",
      marginTop:"-30px"
    }
  },
  expandBtn: {
    fontSize: "1.5rem",
    color: "black",
    cursor: "pointer",
    position:"relative",
    left:"100px",
    "@media (max-width: 600px)": {
      left:"0%",
      marginTop:"-14px"
    }
  }
});

