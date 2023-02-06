const initialstate={
    user:{}

}

 export const reducer=(state=initialstate,action)=>{
    if (action.type==="userfound"){
        return{
          ...state,user:action.payload
        }
       
            
        }
    if (action.type==="usernotfound"){
        return{
            ...state,user:null
        }
    }
    else{
        return state;
    }
    
    }
