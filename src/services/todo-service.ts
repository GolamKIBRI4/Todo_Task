import create from "./http-service"

export interface Person{
 id:number
 name:string
}

export default create('/todos')