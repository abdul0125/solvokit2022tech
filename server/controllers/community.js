import { Communities } from "../Models/AllSchemas.js";

export const getCommunities = async (req,res)=>{

    try {
        const communities = await Communities.find();
        
        res.status(200).json(communities);
        
    } catch (error) {
        res.status(404).json({message:error.message});
        
    }
};

export const insertCommunity = async (req,res)=>{
    const newCommunity = req.body;
    const newcommunity = new Communities(newCommunity);
    try {
        await newcommunity.save();
        res.status(201).json(newcommunity);
        
    } catch (error) {
        res.status(409).json({message:error.message});
        
    }

}
