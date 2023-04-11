import { UserProfile } from "../Models/Profile.js";
import { googleAuth } from "../GoogleAuth.js";

export const getUserProfile = async (req, res) => {
  const Token = req.params.token;
  

  const user = await googleAuth(Token);
  console.log("reached bb bb bb",user);

  try {
    console.log(user.email);
    const UserData = await UserProfile.find({ email: user.email });
    console.log(UserData[0]);
    let u = 0;
    if (UserData[0]?.name === undefined) {
      u = 1;
      console.log("Adding new user");
      const newUser = user;
      const insertUser = new UserProfile(newUser);

      try {
        await insertUser.save();
        res.status(201).json(insertUser);
      } catch (error) {
        res.status(409).json({ message: error.message });
      }
    }
    if (u === 0) {
      console.log("user exists");
      res.status(200).json(UserData);
    }
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const saveNewProfile = async (req, res) => {
  const newUser = req.body;
  const user = new UserProfile(newUser);

  try {
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updateUser = async (req, res) => {
  const id = req.params.id;
  const newData = req.body;
  console.log("id", id);
  console.log("data", newData);

  if (newData.type == "bookmark") {
    const { bookmarks } = await UserProfile.findById(id);
    console.log(bookmarks);
    // console.log(newData.quesId.toString() in bookmarks);
    console.log(bookmarks.includes(newData.quesId));
    if (!bookmarks.includes(newData.quesId)) {
      let newBookmarks = [];
      newBookmarks = [...bookmarks, newData.quesId];
      const updatedUser = await UserProfile.findByIdAndUpdate(id, {
        bookmarks: newBookmarks,
      });

      res.json({ updateduser: updatedUser });
    } else {
      // let newBookmarks = []
      let index = bookmarks.indexOf(newData.quesId);
      if (index !== -1) {
        bookmarks.splice(index, 1);
      }
      // newBookmarks = bookmarks.filter(newData.quesId)
      const updatedUser = await UserProfile.findByIdAndUpdate(id, {
        bookmarks: bookmarks,
      });
      res.json({ updateduser: updatedUser });
    }
  } else if (newData.type == "community") {
    const { communities } = await UserProfile.findById(id);
    console.log(communities);
    // console.log(newData.quesId.toString() in bookmarks);
    console.log(communities.includes(newData.communityID));
    if (!communities.includes(newData.communityID)) {
      let newCommunities = [];
      newCommunities = [...communities, newData.communityID];
      const updatedUser = await UserProfile.findByIdAndUpdate(id, {
        communities: newCommunities,
      });

      res.json({ updateduser: updatedUser });
    } else {
      // let newBookmarks = []
      let index = communities.indexOf(newData.quesId);
      if (index !== -1) {
        communities.splice(index, 1);
      }
      // newBookmarks = bookmarks.filter(newData.quesId)
      const updatedUser = await UserProfile.findByIdAndUpdate(id, {
        communities: communities,
      });
      res.json({ updateduser: updatedUser });
    }
  }
  else if (newData.type=="user"){
    
    console.log(newData.data)
    console.log(newData.data.mobile)
    console.log(newData.data.college)
    try {
      const updatedUser = await UserProfile.findByIdAndUpdate(id,{mobile:newData.data.mobile,college:newData.data.college})
      res.json({ updateduser: updatedUser });
    } catch (error) {
      console.log(error)
    }
  }
};

export const getFullProfile = async (req, res) => {
  const Token = req.params.token;
  console.log(Token);
  const user = await googleAuth(Token);
  console.log("this is the end line",user);

  try {
    const fullprofile = await UserProfile.find({ email:user.email });
    res.status(200).json(fullprofile);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
