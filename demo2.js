const UserData=[
    {id:1,name:"abdul",gender:"male", age:20, occupation:undefined},
    {id:2,name:"surendra",gender:"male", age:20, occupation:"Intern"},
    {id:3,name:"kavi",gender:"male", age:20, occupation:"stremer"},
    {id:4,name:"sabina",gender:"female", age:18, occupation:undefined},
    {id:5,name:"rabina",gender:"female", age:19, occupation:"SME"},
    {id:6,name:"tripal",gender:"male", age:20, occupation:"Intern"},
    
]
const response={
    status:200,
    message:"User data fetched successfully",
    data:UserData
}

const fetchUserNames=()=>{
    if(response.status===200)
        {const result=response.data
            
            .map((user)=> user.name)
            return result
    }else{
        const message="Api fetch failed"
        return message
    }
}
console.log(fetchUserNames())