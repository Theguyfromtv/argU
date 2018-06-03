import axios from "axios";

const API= {
    facebook: function(){
      return axios.get("/auth/facebook/")
    },
    twitter: function(){
        return axios.get("/auth/twitter/")
      },
    facebookLogin: function(){
        return axios.get("/auth/facebook/callback")
    }
  };

  export default API