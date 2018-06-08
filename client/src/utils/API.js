import axios from "axios";

const API= {

    getUser: (uid)=>{
     return axios({
        method: 'get',
        url: '/'+uid,
      });
      }
    ,
    getChats: (uid)=>{
      return axios.get("/chats/"+uid,{
      })
    },
    getMessages: (cid)=>{

    },
    sendMessage: (cid, message, type, sender)=>{
        axios.post('/chats/ ',{
          id:cid,
          message:message,
          type:type,
          sender:sender
        })

    }
  };

  export default API