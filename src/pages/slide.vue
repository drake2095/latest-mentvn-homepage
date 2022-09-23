<template>
    <section class="s-testimonials">
        <div class="container px-4 mx-auto">
            <div class="mx-auto mb-12 text-center">
                <h2 class="text-3xl md:text-4xl mt-2 mb-4 font-bold font-heading">
                    Khách hàng nói về Ment
                </h2>
                <p class="text-gray-700 leading-loose">
                    Sự hài lòng của khách hàng chính là thành công lớn nhất của chúng tôi
                </p>
            </div>
            <div class="slider-testimonials  " role="toolbar" :arrows="true" :dots="true">

                <div aria-live="polite" class=" draggable">
                    <div class="slick-track"  role="listbox">


                        <Carousel :value="testimonial" :num-visible="1" :num-scroll="1" :circular="true" :autoplayInterval="500" :responsiveOptions="responsiveOptions">
                    <template #item="slotProps">
                        <div class="slide-testimonial" >
                            <div class="testimonial-item">
                                <img class="lazy"  :src="slotProps.data.link" :data-src="slotProps.data.link" :alt="slotProps.data.link" />
                                <span class="slide-quote"><i class="pi pi-quote-left" aria-hidden="true"></i></span>
                                <div class="testimon-content">
                                    <p>
                                        {{slotProps.data.content}}
                                        
                                    </p>
                                </div>
                                <h4 class="name">
                                    {{slotProps.data.name}}
                                    </h4>
                                <div class="prof">
                                    {{slotProps.data.position}}
                                    </div>
                            </div>
                        </div>
                    </template>
                </Carousel>


                    </div>
                </div>
            </div>
        </div>


    </section>
</template>
<style>

                        
</style>
<script>

// import { nextTick } from 'vue';

  export default {
  data() {
    return { 
    testimonial: [
        {link:'/assets/image/cam_van.jpg', content:'Ment làm việc rất hiệu quả, tư vấn, thiết kế và hỗ trợ rất tận tình. Sẽ ủng hộ và hợp tác cho các dự án tiếp theo!',name:'Cẩm Vân',position:'Tp. Hà Nội'
        },
        {link:'/assets/image/ly.jpg', content:'Ment làm việc rất nhiệt tình và chuyện nghiệp. Tôi rất hài lòng',name:'Diệu Ly',position:'Tp. Hồ Chí Minh'
        },
        {link:'/assets/image/huu.jpg', content:'Hoàn thiện và support nhiệt tình cho khách hàng. Nếu có dự án sắp tới mình sẽ liên hệ tiếp',name:'Nguyễn Xuân Hữu',position:'Tp. Đà Nẵng'
        }
      ],
      responsiveOptions: [
			{
				breakpoint: '1024px',
				numVisible: 3,
				numScroll: 3,
                autoplayInterval:300
			},
			{
				breakpoint: '600px',
				numVisible: 2,
				numScroll: 2
			},
			{
				breakpoint: '480px',
				numVisible: 1,
				numScroll: 1
			}
		],
    }
  },
//   created() {

//     console.log(this.$testimonial) 
//   },

}
</script>

