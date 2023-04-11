import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import LoginIcon from "@mui/icons-material/Login";
import Typography from "@mui/material/Typography";

import { TextField } from "@mui/material";
import addImage from "../../images/addImage.png";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";

import { insertCommunity,updateProfile } from "../../api/index.js"


export function CommunityCard({title,description,image,activity,count,communityID,joined}) {

  const fullprofile = JSON.parse(window.localStorage.getItem("FullProfile"));

  const [communityState,setCommunityState] = useState(joined);
  console.log(joined);
  

  const handleUpdates = async ()=>{
    setCommunityState(!communityState);
    console.log(fullprofile[0]._id);

    const updatedprofile = await updateProfile(fullprofile[0]._id,{type:"community",communityID:communityID});
    console.log("uiui",updatedprofile?.data);
    


  }




  const card = (
    <React.Fragment>
      <CardMedia
        component="img"
        height="140"
        // image="https://media.istockphoto.com/vectors/hikers-at-mountain-viewpoint-vector-id1204813970?b=1&k=20&m=1204813970&s=170667a&w=0&h=HNIdRYDubkVcgedGg8jZ3sBNIT2wsuIMK1OYRFIaP3M="
        image={image?image:"https://media.istockphoto.com/vectors/hikers-at-mountain-viewpoint-vector-id1204813970?b=1&k=20&m=1204813970&s=170667a&w=0&h=HNIdRYDubkVcgedGg8jZ3sBNIT2wsuIMK1OYRFIaP3M="}
        alt="green iguana"
      />
      <CardContent>
        <Typography variant="h5" component="div">
          {/* Mechanical Engineers */}
          {title?title:"New Community"}
        </Typography>
        <br />
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Activity {activity?activity:"low"}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Members {count?count:"low"}
        </Typography>
        <Typography variant="body2">
          {description?description:"No description"}
          <br />
          <br />
          
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          style={{ color: "grey", fontFamily: "cursive", fontWeight: "bold" }}
          onClick={handleUpdates}
        >
          {communityState?"Joined":
          // <LoginIcon />
        "Join Community"  }
        
        </Button>
      </CardActions>
    </React.Fragment>
  );
  return (
    <Box sx={{ minWidth: 350 }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}

export function CommunityInputCard() {
  const [newCommunity, setNewCommunity] = useState({
    communityName: "",
    communityDescription: "",
    image: "",
  });
  const onChange = (e) => {
    const files = e.target.files;
    const file = files[0];
    getBase64(file);
  };

  const onLoad = (fileString) => {
    console.log(fileString);
    setNewCommunity({ ...newCommunity, image: fileString });
  };

  const getBase64 = (file) => {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      onLoad(reader.result);
    };
  };
  const handleSubmit = async () => {
    await  insertCommunity(newCommunity);
    
    console.log("reached handle submit", newCommunity);
    // setNewCommunity({...newCommunity,communityName: "",
    // communityDescription: ""})
    // document.getElementById("inputCommunity").value = "";
  };

  const inputcard = (
    <React.Fragment>
      <CardMedia
        component="img"
        height="140"
        
        image={newCommunity.image?newCommunity.image:addImage}
        alt="green iguana"
      />
      <h3 style={{ textAlign: "center", marginBottom: -10 }}>Add Image</h3>

      <CardContent>
        <input onChange={onChange} id="inputCommunity" type="file" />

        <br />
        <br />
        <TextField
          required={true}
          value={newCommunity.communityName}
          placeholder="Enter new community"
          variant="standard"
          fullWidth
          onChange={(e) =>
            setNewCommunity({ ...newCommunity, communityName: e.target.value })
          }
        />

        <br />
        <br />

        <TextField
          placeholder="Enter description"
          value={newCommunity.communityDescription}
          onChange={(e) =>
            setNewCommunity({
              ...newCommunity,
              communityDescription: e.target.value,
            })
          }
          variant="standard"
          fullWidth
        />

        <br />
      </CardContent>
      <CardActions>
        <Button
          size="small"
          type="submit"
          style={{ color: "grey", fontFamily: "cursive", fontWeight: "bold" }}
          onClick={handleSubmit}
        >
          

          {"  Submit"}
        </Button>
      </CardActions>
    </React.Fragment>
  );
  return (
    <Box sx={{ minWidth: 350 }}>
      <Card variant="outlined">{inputcard}</Card>
    </Box>
  );
}
































// import { Button } from '@mui/material'
// import React from 'react'
// import './CommunityCard.css'

// const CommunityCard = ({Cname,Cdisc,Members,Activity,}) => {
//   return (
//     <div className='CommunityCard'>
//         <h3>Community Name</h3>
//         <p>This is the discription of the community</p>
//         <div className='details'>
//         <h4 >Total Members  </h4><p>251</p>
//         </div>
//         <div className='details'>

//         <h4 >Activity</h4><p>High/low</p>
//         </div>
//         <Button>
//             Join Community
//         </Button>

//     </div>
//   )
// }

// export default CommunityCard
