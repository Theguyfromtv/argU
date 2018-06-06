import axios from "axios";

const API= {

    getUser: (uid)=>{
     return axios({
        method: 'get',
        url: 'http://localhost:8080/argumentuser/'+uid,
        data: {
          id: uid,
        }
      });
      }
    ,
    getChats: (uid)=>{
      return axios.get("http://localhost:8080/chats/all/"+uid,{
        body:{
          id:uid
        }
      })
    }
  };

  export default API