<script>

import axios from "axios";
import useVuelidate from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";
import Layout from './Layout.vue'

export default {
  data() {
    return {
      v$: useVuelidate(),
      username: "",
      password: "",
      at: "",
      rt: "",
      validation: null,
    };
  },
  validations() {
    return {
      username: { required, email }, // Matches this.firstName
      password: { required }, // Matches this.lastName
    };
  },
  methods: {
    async onSubmit() {
      // POST request using axios with async/await
      const information = {
        username: this.username,
        password: this.password,
      };
      const response = await axios.post(
        "https://python-flask-login-backend.herokuapp.com/auth/login",
        information
      );
      console.log(response);
      console.log(response.data.access_token);
      localStorage.setItem("access_token", response.data.access_token);
      localStorage.setItem("refresh_token", response.data.refresh_token);
      if (localStorage.access_token) {
        this.at = localStorage.access_token;
        this.rt = localStorage.refresh_token;
      }

      this.username = "";
      this.password = "";
    },
    async onSubmit1() {
      const result = await this.v$.$validate();
      if (result) {
        // alert("success");
        this.validation = true;
        this.onSubmit();
      } else {
        // alert("error");
        this.validation = false;
      }
    },
    logOut() {
      localStorage.removeItem("access_token");
      localStorage.removeItem("refresh_token");
      this.at = "";
      this.rt = "";

    },
    async testRefreshToken() {
      console.log("test refresh", this.at)
      const opts = {
        headers: {
          Authorization: "Bearer " + `${this.at}`
        }
      }
      try {
        const response = await axios.get(
          "https://python-flask-login-backend.herokuapp.com/auth/protected", opts
        );
        if (response.status == 200) {
          console.log(response.data.logged_in_as);
        } else {
          console.log(response.response.data.msg);
        }
        console.log(response);
      } catch (e) {
        console.log(e.response.data.msg)
        const information = {
        username: this.username,
        password: this.password,
        };

      const opts = {
        headers: {
          Authorization: "Bearer " + `${this.rt}`
        }
      }
        const response1 = await axios.get(
          "https://python-flask-login-backend.herokuapp.com/auth/refresh_token", opts
        );
        console.log('response1',response1)
        if(response1.data.access_token){
          localStorage.removeItem("access_token");
          localStorage.setItem("access_token", response1.data.access_token);
        }
        this.at = localStorage.access_token;
      //   localStorage.setItem("access_token", response1.data.access_token);
      // if (localStorage.access_token) {
      //   this.at = localStorage.access_token;
      // }
      }




    }
  },
  mounted() {
    let access_token_1 = "";
    if (localStorage.access_token) {
      access_token_1 = localStorage.access_token;
      refresh_token_1 = localStorage.refresh_token;
      console.log("first run: " + access_token_1);
      this.at = access_token_1;
      this.rt =refresh_token_1
    }
  },
  components: {
    Layout
  }
};
</script>

<template>
<div v-if="at != ''">
    <Layout @logOut="logOut" @testRefreshToken="testRefreshToken" />
  </div>
  <div v-else>
    <div class="wrapper">
      <div class="login__page">
        <h1>WELCOME</h1>
        <form>
          <div class="user__box">
            <input v-model="username" type="text" placeholder="Email" id="username" />
            <div v-if="validation == false" class="validate">Invalid email!</div>
            <input v-model="password" type="password" placeholder="Password" id="password" />
          </div>
        </form>
        <button type="submit" @click="onSubmit1" class="btn__login">
          Login
        </button>
        <div class="other">
          <button class="other--btn__face">Facebook</button>
          <button class="other--btn__google">Google</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.validate {
  color: rgb(255, 72, 72);
  font-size: 15px;
}

.noti {
  width: 100%;
  height: 100vh;
  background-color: #23a2f6;
  color: #eaf0fb;
}

.wrapper {
  position: relative;
  height: 100vh;
}

.login__page {
  width: 350px;
  height: 350px;
  border: 1px solid grey;
  background-color: white;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.login__page h1 {
  color: black;
  text-align: center;
  font-size: 180%;
}

.user__box input {
  width: 250px;
  height: 40px;
  margin-bottom: 20px;
  border-radius: 5px;
  border: 1px solid grey;
  padding-left: 15px;
}

.btn__login {
  width: 270px;
  height: 40px;
  margin-bottom: 20px;
  background-color: #498fae;
  border-radius: 5px;
  border: 1px solid grey;
  border: none;
  color: #fff;
}

.other {
  display: flex;
  margin-left: 70px;
}

.other--btn__face {
  width: 110px;
  height: 40px;
  border-radius: 5px;
  background-color: #4b96fc;
  border: 1px solid grey;
  border: none;
  margin-left: -29px;
  margin-bottom: 20px;
  color: #fff;
}

.other--btn__google {
  width: 110px;
  height: 40px;
  border-radius: 5px;
  background-color: #e8413b;
  border: 1px solid grey;
  border: none;
  margin-left: 50px;
  margin-bottom: 20px;
  color: #fff;
}

/*--------------- Resposiveness-------*/
</style>
