import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./Communities.css";

import { CommunityCard, CommunityInputCard } from "./component/CommunityCard";
import { getCommunities } from "../api/index.js";

const Communities = ({userCommunities}) => {
  const [communitiesData, setCommunitiesData] = useState([]);
  const communityData = async () => {
    await getCommunities()
      .then(
        (e) => setCommunitiesData(e.data)
        
        // (e)=>console.log(e)
      )
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    communityData();
  }, []);
  console.log(communitiesData);
  console.log("user communities",userCommunities);

  return (
    <div className="Communities">
      <h1>Communities</h1>
      <p>Join community to ask and answer questions</p>
      <div className="cards">
        <Grid container spacing={2}>
              <Grid item>
                <CommunityInputCard />
              </Grid>

          {communitiesData.map(
            (obj)=>(
          <Grid item>
            <CommunityCard key={obj._id} joined={userCommunities?.includes(obj._id)} communityID={obj._id} title={obj.communityName} description={obj.communityDescription} image={obj.image} />
          </Grid>

            )
          )}
          
        </Grid>
      </div>
    </div>
  );
};

export default Communities;
