const customer=[
    {custid:1, name:"aurum",bought:[{id:7,name:"momo"},{id:2,name:"earphone"}]},
    {custid:2, name:"rabina",bought:[{id:3,name:"pen"},{id:4,name:"hen"}]},
    {custid:3, name:"ritu",bought:[{id:3,name:"pen"},{id:6,name:"copy"}]},
    {custid:4, name:"prabin",bought:[{id:7,name:"momo"},{id:8,name:"sprite"}]}
];

const customerAPIres={
    status: 200,
    message: "customer data fetched",
    data: customer,
};

// const getProductName=() => {
//     if (customerAPIres.status===200){
//         let boughtProducts=[]
//         customerAPIres.data.forEach
//         ((customer)=>{customer.bought.map((item)=>{
//             boughtProducts.unshift(item.name)
//         });

//         });
//     return boughtProducts;
//     }

// };
// console.log(getProductName());


const getProductNum=()=>{
    if (customerAPIres.status===200){
        let productNumbers = {};
        customerAPIres.data.forEach

        ((customer)=>{
            customer.bought.map((item)=>{
                if (productNumbers[item.name]){
                    productNumbers[item.name] += 1;
                } else {
                    productNumbers[item.name]= 1;
                }
            })
        });
        return productNumbers;
    }
};  
console.log(getProductNum());