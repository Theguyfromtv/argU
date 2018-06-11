import axios from "axios";

const API= {

    getUser: (uid)=>{
     return axios({
        method: 'get',
        url: '/login/'+uid,
      });
      }
    ,
    getChats: (uid)=>{
      return axios.get("/chats/all/"+uid)
    },
    getMessages: (cid)=>{

    },
    sendMessage: (cid, message, type, sender)=>{
        return axios.post('/chats/ ',{
          id:cid,
          message:message,
          type:type,
          sender:sender
        })

    },
    updateTopics:(topic,side,id)=>{
      return axios.post('/login/topics',{
        id:id,
        topic: topic,
        side:side
      })
    }
  };

  export default API