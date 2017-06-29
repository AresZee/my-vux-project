<template>
    <div>
        <my-header></my-header>
        <swiper auto height="30px" direction="vertical" :interval=2000 class="text-scroll" :show-dots="false">
            <swiper-item>
                <p>义务爱了 完成传奇世界H5-王者归来任务 获得20金币</p>
            </swiper-item>
            <swiper-item>
                <p>基本世神 兑换《传奇世界H5》畅玩级礼包 消耗30金币</p>
            </swiper-item>
            <swiper-item>
                <p>零哥章魚 完成传奇世界H5-王者归来任务 获得30金币</p>
            </swiper-item>
            <swiper-item>
                <p>做迎而為 兑换【饿了么】畅享美食红包 消耗20金币</p>
            </swiper-item>
            <swiper-item>
                <p>只知道不知道 兑换【饿了么】畅享美食红包 消耗20金币</p>
            </swiper-item>
            <swiper-item>
                <p>基本世神 兑换《传奇世界H5》畅玩级礼包 消耗30金币</p>
            </swiper-item>
        </swiper>
        <swiper loop auto :list="demo07_list" :index="demo07_index" @on-index-change="demo07_onIndexChange"></swiper>
        <grid :rows="4">
            <grid-item :label="Grid" v-for="i in 12" :key="i">
                <img slot="icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAA2CAMAAAC7m5rvAAAAllBMVEUAAAC/v7+qqqrHx8evr6/ExMS5ubmxsbGsrKysrKytra2pqam8vLy9vb2lpaXExMT////s7Oz8/Pz09PTu7u729vb5+fnp6enMzMzLy8vm5ub4+Pjj4+O3t7fx8fHb29vAwMDHx8ePj4/S0tLf39+rq6ulpaWSkpK7u7vY2NjR0dGnp6eenp6ampqysrLPz8+fn5+ioqKXtObzAAAAEHRSTlMA6wT4/e/f0KyZSy/z8mz4uKbH2gAAA6FJREFUSMellody2zAMhuXEGU6TVBgkbGp529np+79cKREUpbrxdfxnn7g+cYACkKku7m5vricPl4v5Yq5arWLJN14+TK5vbu8udLhCsyuHeY6QD0Q0rEHb765mA/DbJIw4j4XGybdIPV5q13lMC9NHnWvKpxhiAVBYPMX4ezffxSQnHmFoahFgkRpEmHCEMeWTdn8zygOnmAVhkxZZ1AImYdyOnvnJrrohrBiymF/3ZgGsYty1XV1kdy6MATKGnJRgoiAVuRRH/inhTe4uu9U1Q8MMmy0nOcdJ5bMwbEs9g9vsJg8yjq2UXxugdJYBtHKTXUeM64bO2c00bGP/dTbBIAIBERyIaFgTASHQyiS7hyC3KaHcQNSm2r2+vbwvBFRt91OjlfssXizZ+q2WjN3yqvXrcfWxmS/362lYGJfYjQm6zBah4InWbtRyy3UlGPaGvDxU6B8EvqVo9NgX2TwUGDosJzb7vQyPBHafxNSZ2zq9hXOdzYoJWM6Hyo5P0h4PkAcMwI5mAxOx/bvgGEOpfqBihoezoeSKLffWAA4xBLIvS8VywYR5RjFaix8PmDBs77+sa8XYDDA2ilVV9xbAiCF0cFUpZniASa6Yn0y5aICO8tMplkvCMGKbV8x7jqhbYSf8fI4YJgwUq46+FjmillIdK8UgYQUrtlvliaspUflqpxgXHbYiIhD/d77w+kG9oGkg1T5eiYhLImkbV2PsbUO96qcnStq8jbCwyFoX+TJPjhK8kpucv+gi66LfmwXF3peJMkQmcct3xcCeGmCxx55qDdBzuF8kA5yYW9bcUy3Wc7x2p+bOuQgYTJdKxctVBG65g4AVMMCoVgwOECjFlOMDKFbTbz+camcRilwxvS84rX79cPQztYrh51HM+DMtZPmGilkYOQUDiuX1iVPA44F7p2DGLghYZwP+8SJDjKdvADqbg+SCOtmyw9p94anDKwCDw7Pq8JJ7LduTga69rtaf0b3uIJyneAySe32AIPdc+r8D1bM6c23oulzvzB9S6BDnf1+HDifkUugYBCrT1OcCVd1QClQpLALQubDoHAGlsBiDMG3J0pMUthdzKhfw5LtLiUE4hnx0AgDNtnEQVZYQ5XyHf8jWasjXBAPBxgQDziQYFqwmGNmMlIrpDH+ZzihHs5A8+co4eeKUPEFKngKHIXnKvn0H++epmoWppoaP079JDL8//lsa+p9Jb0qx77sUexG0WmmhS7HvRyn2TxZ1zUyK+LY0AAAAAElFTkSuQmCC">
            </grid-item>
        </grid>
        <my-footer></my-footer>
    </div>
</template>

<script>
import { Swiper, SwiperItem, Grid, GridItem } from 'vux'
import MyHeader from '../components/Header.vue'
import MyFooter from '../components/Footer.vue'

const baseList = [{
    url: 'javascript:',
    img: 'https://static.vux.li/demo/1.jpg',
    title: '送你一朵fua'
}, {
    url: 'javascript:',
    img: 'https://static.vux.li/demo/2.jpg',
    title: '送你一辆车'
}, {
    url: 'javascript:',
    img: 'https://static.vux.li/demo/3.jpg',
    title: '送你一次旅行'
}]

const only2ClickList = baseList.slice(0, 2).map(item => {
    item.url = 'http://m.baidu.com'
    return item
})

export default {
    components: {
        Swiper,
        SwiperItem,
        Grid,
        GridItem,
        'my-header': MyHeader,
        'my-footer': MyFooter
    },
    methods: {
        demo07_onIndexChange(index) {
            this.demo07_index = index
        }
    },
    data() {
        return {
            demo07_list: only2ClickList,
            demo07_index: 0
        }
    }
}
</script>

<style scoped>
.copyright {
    font-size: 12px;
    color: #ccc;
    text-align: center;
}

.text-scroll {
    border: 1px solid #ddd;
    border-left: none;
    border-right: none;
}

.text-scroll p {
    font-size: 12px;
    text-align: center;
    line-height: 30px;
}

.black {
    background-color: #000;
}

.title {
    line-height: 100px;
    text-align: center;
    color: #fff;
}

.animated {
    animation-duration: 1s;
    animation-fill-mode: both;
}

.vux-indicator.custom-bottom {
    bottom: 30px;
}

@-webkit-keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translate3d(0, 100%, 0);
    }
    100% {
        opacity: 1;
        transform: none;
    }
}

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translate3d(0, 100%, 0);
    }
    100% {
        opacity: 1;
        transform: none;
    }
}

.fadeInUp {
    animation-name: fadeInUp;
}

.swiper-demo-img img {
    width: 100%;
}
</style>