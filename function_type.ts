function userDetails(id:number,name:string):string{
    if(id){console.log(id)};
    if(name){console.log(name)};
    return id +name;
};

let userData:(id1:number,first_name:string)=>string;
userData = userDetails;
userData(121,'Seema');
