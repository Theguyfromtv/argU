import axios from "axios";

const API= {

    getUser: (uid)=>{
     return axios({
        method: 'get',
        url: 'https://afternoon-sea-74630.herokuapp.com/ '+uid,
      });
      }
    ,
    getChats: (uid)=>{
      return axios.get("https://afternoon-sea-74630.herokuapp.com/ "+uid,{
      })
    },
    getMessages: (cid)=>{

    },
    sendMessage: (cid, message, type, sender)=>{
        axios.post('https://afternoon-sea-74630.herokuapp.com/ ',{
          id:cid,
          message:message,
          type:type,
          sender:sender
        })

    }
  };

  export default API