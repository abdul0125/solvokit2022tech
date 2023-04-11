import { Answers } from "../Models/AllSchemas.js";

export const answerQuestion = async(req,res)=>{
    const answer = req.body
    const newAnswer = new Answers(answer);
    
    try {
        await newAnswer.save();
        res.status(201).json(newAnswer);
        
    } catch (error) {
        res.status(409).json({message:error.message})
        
    }
}
export const getAnswers = async (req,res)=>{
    const {id:ID} = req.params;

    try {
        const answers = await Answers.find({questionID:ID});
        
        
        res.status(200).json(answers);
        
    } catch (error) {
        res.status(404).json({message:error.message});
        
    }
};