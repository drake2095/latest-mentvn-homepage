<template>
<header>
   <section class="home-section-header xl:bg-contain bg-top bg-no-repeat ">
      <div class=" container  px-4 mx-auto">
         <nav class=" py-6">
         <Logo />
         <Navbar />
         <BtnLogin  />
         <IconNavMobile />
         </nav>
      <Slogan />
      <CompanyImage />
      </div>
      
   </section>

</header>
     

 </template>
 
<script>


   // import Btnlogin from '@/components/global/btn-login'

   // import Navbar from '@/components/global/navbar'
   export default {
      components:{
         // Navbar,
         // Btnlogin
      }
   }
</script>

 <script setup>



   </script>
<style>
   body{
      margin: 0;
   }
.home-section-header {
    background-size: cover;
    background: linear-gradient(334.93deg, #23033C -57.5%, #2ccfbb 87.13%);
    align-items: center;
}
.logo-mentvn img {
    width: 160px;
    height: 76px;
}

.home-section-header ul {

    align-items: center;
}

.home-section-header li {
    float: left;
    color: #fff;
    list-style: none;
    width: auto;
    font-size: 14px;
    /* padding: 0 15px; */
    font-size: 20px;
    line-height: 26px;
}

.home-section-header .btn-login {
    color: #000;
    background: #fff;
    font-size: 14px;
    line-height: 16px;
    text-decoration: none;
    border-radius: 5px;
}

.home-section-header nav {
    align-items: center;
    padding: 0 25px;
    display: flex;
    justify-content: space-between;
}

.btn-visit {
    background: #fff;
    border-radius: 10px;
    color: #000;
    text-decoration: none;
    font-size: 14px;
}

</style>