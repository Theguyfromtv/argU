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
        return axios.post('/chats/sendmessage ',{
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
    },
    read1:(cid,read)=>{
      return axios.post('chats/read1',{
        id:cid,
        read:read
      })
    },
    read2:(cid,read)=>{
      return axios.post('chats/read2',{
        id:cid,
        read:read
      })
    }
  };

  export default API