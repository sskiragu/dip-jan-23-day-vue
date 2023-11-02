<template>
   <div class="container">
      <div class="container">
         <div class="row justify-content-center align-items-center">
            <div class="col-4 mt-5">
               <h1>Signup Form</h1>
            </div>
            <div class="col-8">
               <form @submit.prevent="signup">
                  <fieldset>
                     <legend>Personalia:</legend>
                     <div class="mb-3">
                        <label for="username" class="form-label">Username</label>
                        <input type="text" class="form-control" id="username" aria-describedby="usernameHelp"
                           v-model="name">
                        <span>{{ username }}</span>
                     </div>
                     <div class="mb-3">
                        <label for="email" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="email" aria-describedby="emailHelp" v-model="email">
                     </div>
                     <div class="mb-3">
                        <label for="password" class="form-label">Password</label>
                        <input type="password" class="form-control" id="password" v-model="password">
                     </div>
                     <div class="mb-3">
                        <button type="submit" class="btn btn-primary">Signup</button>
                     </div>
                  </fieldset>
               </form>
            </div>
         </div>
      </div>
   </div>
</template>

<script setup>
import { ref } from "vue";
import axios from 'axios';

const name = ref('john')
const email = ref('john@gmail.com')
const password = ref('password')

const signup =  async () => {
   try {
      const response = await axios.post('http://127.0.0.1:8000/api/signup', {
      name: name.value,
      email: email.value,
      password: password.value
   });
   console.log(response);
   } catch (error) {
      console.log(error);
   }
}
</script>

<style scoped></style>