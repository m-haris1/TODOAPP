
export const generateInitials=(name)=>{
    if(!name){
        return "";
    }
    const words=name.split(" ");
    let ans="";
    for(let i=0; i<Math.min(words.length,2); i++){
        ans+=words[i][0];
    }
    return ans;
}