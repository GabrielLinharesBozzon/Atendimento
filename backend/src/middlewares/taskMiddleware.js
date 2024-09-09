const validateTitle=(req,res,next)=>{
    const{body}= req;
    if(body.title ==undefined){
        return res.status(400).json({message:'The field "title" is required'});
    }else if(body.title ==''){
        return res.status(400).json({message:'Title cannot be empty'});
    }else if(body.title.trim() ===''){
        return res.status(400).json({message:'Title cannot be empty'});
    }
    next();
};
const validateFieldStatus =(req,res,next)=>{
    const{body}= req;
    if(body.title ==undefined){
        return res.status(400).json({message:'The field "status" is required'});
    }else if(body.title ==''){
        return res.status(400).json({message:'Title cannot be status'});
    }else if(body.title.trim() ===''){
        return res.status(400).json({message:'Title cannot be status'});
    }
    next();
};
export default{
    validateTitle,
    validateFieldStatus,
};

