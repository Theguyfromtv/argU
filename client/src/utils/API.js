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
    sendMessage: (cid, message, uid, side)=>{
        return axios.post('/chats/ ',{
          id:cid,
          side:side,
          message:message,
          sender:uid
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