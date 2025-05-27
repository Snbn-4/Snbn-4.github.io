const Fname="abdul"
const lname="kawari"


const addName=()=>{
    return `${Fname}  ${lname}`
}
// console.log(addName())

const arr1=[-3,-2,-1]
const arr2=[0,1,2,3]

const addArray=()=>{
    const result=[...arr1,...arr2]
    return result
}
// console.log(addArray())

const addArrayV2=()=>[...arr1,...arr2]
// console.log(addArray())

const userData={
    name:"tripal",
    email:"tripal123@gmail.com",
    phn:123,
    hasPassedOut:false,
    occupation:undefined
}

const apiResponse={
    status:404,
    message:"not found",
    data:{}
}

const thisIsFinalUserData={}
const populateData=()=>{

    if(apiResponse.status===200 && apiResponse.data){
        thisIsFinalUserData=apiResponse.data
    }else{
        thisIsFinalUserData=userData
    }
    return thisIsFinalUserData
}
console.log(populateData())


// const filterFalsyVal=()=>{
//     let finalUserData={}
//     for(let key in userData){

//         if(userData[key]){
//             finalUserData={...finalUserData,[key]:userData[key]}
//         }
//     }
//      return finalUserData
// }
// console.log(filterFalsyVal())


// const filterlsyVal=()=>{
//     let finalUserData={}
//     for(let key in userData){

//         if(!userData[key]){
//             finalUserData={...finalUserData,[key]:userData[key]}
//         }
//     }
//      return finalUserData
// }
// console.log(filterlsyVal())
