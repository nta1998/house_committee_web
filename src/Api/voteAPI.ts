import axios from "axios";
import { Vote } from "../model/vote";

const MY_server='http://44.202.160.222/'
// A mock function to mimic making an async request for data
export const get=(token:string)=>{
  return new Promise<{ data: Vote[] }>((resolve,reject) =>
    axios.get(MY_server+"vote/",{ headers: {
      'Authorization':`Bearer ${token}`
    }}).then(res => resolve({ data: res.data })).catch(error => {reject(error);})
  );
}
export const add=(vote:Vote,token:string)=>{
  return new Promise<{ data: Vote[] }>((resolve,reject) =>
    axios.post(MY_server+"vote/",vote,{ headers: {
      'Authorization':`Bearer ${token}`
    }}).then(res => resolve({ data: res.data })).catch(error => {reject(error);})
  );
}

export const editVote=(vote:Vote,token:string,profile:number)=>{
  return new Promise<{ data: Vote[] }>((resolve,reject) =>
    axios.put(MY_server+"vote/"+vote.id,{building_id:vote.building_id,profile_id:vote.profile_id.id,vote:vote.vote+1,answered:[profile]},{ headers: {
      'Authorization':`Bearer ${token}`
    }}).then(res => resolve({ data: res.data })).catch(error => {reject(error);})
  );
}
export const delVote=(id:number,token:string)=>{
  return new Promise<{ data: Vote[] }>((resolve,reject) =>
    axios.delete(MY_server+"vote/"+id,{ headers: {
      'Authorization':`Bearer ${token}`
    }}).then(res => resolve({ data: res.data })).catch(error => {reject(error);})
  );
}

