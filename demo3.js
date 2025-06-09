// const customer=[
//     {custid:1, name:"aurum",bought:[{id:7,name:"momo"},{id:2,name:"earphone"}]},
//     {custid:2, name:"rabina",bought:[{id:3,name:"pen"},{id:4,name:"hen"}]},
//     {custid:3, name:"ritu",bought:[{id:3,name:"pen"},{id:6,name:"copy"}]},
//     {custid:4, name:"prabin",bought:[{id:7,name:"momo"},{id:8,name:"sprite"}]}
// ];

// const customerAPIres={
//     status: 200,
//     message: "customer data fetched",
//     data: customer,
// };

// // const getProductName=() => {
// //     if (customerAPIres.status===200){
// //         let boughtProducts=[]
// //         customerAPIres.data.forEach
// //         ((customer)=>{customer.bought.map((item)=>{
// //             boughtProducts.unshift(item.name)
// //         });

// //         });
// //     return boughtProducts;
// //     }

// // };
// // console.log(getProductName());


// const getProductNum=()=>{
//     if (customerAPIres.status===200){
//         let productNumbers = {};
//         customerAPIres.data.forEach

//         ((customer)=>{
//             customer.bought.map((item)=>{
//                 if (productNumbers[item.name]){
//                     productNumbers[item.name] += 1;
//                 } else {
//                     productNumbers[item.name]= 1;
//                 }
//             })
//         });
//         return productNumbers;
//     }
// };  
// console.log(getProductNum());



const potentialMatch=[{id:1,Fname:"Zoro",
    Lname:"Roronoa",
    age:25,
    maritalStatus:"single",
    gender:"male",
    location:[
    {city:"delhi",country:"India"},
   {city:"banalore",country:"India"}
    ],
},
{id:2,Fname:"shraddha",
    Lname:"bhattarai",
    age:20,
    maritalStatus:"single",
    gender:"female",
    location:[
    {city:"kawasoti",country:"Nawalpur"},
   {city:"Texas",country:"Nepal"}
    ],
},
{id:3,Fname:"sumit",
    Lname:"oil",
    age:22,
    maritalStatus:"married",
    partnerName:"sushmita",
    gender:"male",
    location:[
  {city:"sunkoshi",country:"Sinchupalchowk"},
   {city:"Texas",country:"USA"}
    ],
},
];

const shadiwebAPIresp={
    status:200,
    message:"data fetched",
    data: potentialMatch,
};

// const getMyPerfectMatch=()=>{
//     if(shadiwebAPIresp.status===200) {
        
//         shadiwebAPIresp.data.map((candidate)=>{
//            const {gender,maritalStatus,age,location}=candidate

//             const MyRequirement = (gender==="male" && 
//             maritalStatus==="single" ) || age>22;

//             if(MyRequirement){
//                 location.currentLocation.country==="USA" ? 
//                     console.log(`My perfect match is ${candidate.Lname} ${candidate.Fname}. Congratulations~~~`):
//                     console.log("You're single.")
                

//             }
//         });
    
//     }
// };
// getMyPerfectMatch();


// const getCountryNames=()=>{
//     let countryName=[]
//     shadiwebAPIresp.data.map((candidate)=>{
//         candidate.location.map((loc)=>{
//             countryName.includes(loc.country)
//             ?null
//             :countryName.push(loc.country);
            
//         });
//     });
//     return countryName;
// };
// console.log(getCountryNames());


const getCountryNames=()=>{
    let countryName=[]
    shadiwebAPIresp.data.map((candidate)=>{
        candidate.location.map((loc)=>{
           countryName.push(loc.country);
            
        });
    });
    // return [...new Set(countryName)];    ///1

    const result=countryName.filter((country,index)=>{  ///2
        return countryName.indexOf(country)===index;
    });
    return result; 
};
console.log(getCountryNames());