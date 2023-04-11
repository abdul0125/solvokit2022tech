import { ExpertHelp,ProjectHelp,AssignmentHelp } from "../Models/AllSchemas.js";


export const expertHelp = async (req,res)=>{
    const help = req.body;
    const newHelp = new ExpertHelp(help);
    try {
        await newHelp.save();
        res.status(201).json(newHelp);
        
    } catch (error) {
        res.status(409).json({message:error.message});
        
    }

}
export const assignmentHelp = async (req,res)=>{
    const help = req.body;
    const newHelp = new AssignmentHelp(help);
    try {
        await newHelp.save();
        res.status(201).json(newHelp);
        
    } catch (error) {
        res.status(409).json({message:error.message});
        
    }

}
export const projectHelp = async (req,res)=>{
    const help = req.body;
    const newHelp = new ProjectHelp(help);
    try {
        await newHelp.save();
        res.status(201).json(newHelp);
        
    } catch (error) {
        res.status(409).json({message:error.message});
        
    }

}


// export const getQuestions = async (req,res)=>{

//     try {
//         const questions = await AskExpert.find();

//         res.status(200).json(questions);
        
//     } catch (error) {
//         res.status(404).json({message:error.message});
        
//     }
// };