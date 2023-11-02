<template>
  <div class="container">
    <nav>
      <div class="nav-link">
        <RouterLink to="/" class="nav-item">Home</RouterLink>
        <RouterLink to="/about" class="nav-item">About</RouterLink>
        <RouterLink to="/services" class="nav-item">Services</RouterLink>
        <RouterLink to="/contacts" class="nav-item">Contacts</RouterLink>
        <RouterLink to="/login" class="nav-item">Login</RouterLink>
        <RouterLink to="/signup" class="nav-item">Signup</RouterLink>
      </div>
    </nav>

    <RouterView/>
  </div>
</template>

<script>
import { RouterLink } from 'vue-router';
</script>

<style scoped>
.nav-link{
  background-color: darkorange;
  color: white;
  padding: 14px 0px;
}

.nav-link .nav-item{
  color: white;
  padding: 0px 28px;
  text-decoration: none;
  font-weight: bold;
  font-size: large;
}
</style>