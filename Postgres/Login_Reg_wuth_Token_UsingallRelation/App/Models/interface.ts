export interface Empmodel{
    id? :number,
    name?:any,
    email?:any,
    password?:any,
    address?:any,
    emptype?:any,

    // hrlists  ,

    managerid?:any

}

export interface Hrmodel{
    id? :number,
    name?:any,
    email?:any,
    password?:any,
    hrtype?:any,
    empid?:any
}

export interface Managermodel{
    id? :number,
    name?:any,
    email?:any,
    password?:any,
    city?:any,
    managerrole?:any,
    salary?:any,

    // senioremplist  ,
    // employeelist  ,
}

export interface SeniorEmpmodel{
    id? :number,
    name?:any,
    email?:any,
    password?:any,
    city?:any,
    senioremprole?:any,

    // managerlist  ,
    salary?:any
}