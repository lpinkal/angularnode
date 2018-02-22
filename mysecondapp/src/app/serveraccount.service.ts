// export class serveraccountservice{
//   serverlist=[{type:'server',name:'test1',content:'test1 content'}];
//
//   onlistadded(type:string,name:string,content:string){
//       this.serverlist.push({type:type,name:name,content:content})
//   }
//   onlistupdate(){
//
//   }
// }
export class serveraccountservice{
  serverlist=[{type:'server',name:'test1',content:'test1 content'}];
  onlistadded(type:string,name:string,content:string){
      this.serverlist.push({type:type,name:name,content:content})
  }
}
