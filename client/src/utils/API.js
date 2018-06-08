import axios from "axios";

const API= {

    getUser: (uid)=>{
     return axios({
        method: 'get',
        url: '/api/login/'+uid,
      });
      }
    ,
    getChats: (uid)=>{
      return axios.get("/api/chats/"+uid,{
      })
    },
    getMessages: (cid)=>{

    },
    sendMessage: (cid, message, type, sender)=>{
        axios.post('/api/chats/ ',{
          id:cid,
          message:message,
          type:type,
          sender:sender
        })

    }
  };

  export default API