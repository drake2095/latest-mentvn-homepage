<template>
   <div class=" pt-12 pb-16 text-center relative header-content-secion">
      <h2 class="text-3xl lg:text-4xl mb-4 font-bold font-heading text-white">{{slogan}}</h2>
      <p class="leading-relaxed text-white mb-8">Hổ trợ cho các doanh nghiệp vừa và nhỏ hoạt động hiệu quả hơn.</p>
      <nuxt-link class=" btn-visit block sm:inline-block py-4 px-8 mb-4 sm:mb-0 text-center font-semibold leading-none btn-link-services rounded" to="/visit">
      Cùng tham quan
   </nuxt-link>
   
   </div>
</template>
<script>
export default {
  data () {
       return {
         slogan: "Ment xây dựng hệ thống tiện ích, thay đổi cuộc sống của bạn"
        }
    }
}

</script>
