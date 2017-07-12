<template>
    <div>
        <x-header>
            <img slot="overwrite-left" src="data:image/png;base64,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" width="76" height="18" alt="500彩票网">
            <!--<a slot="right" @click="showLogin">登陆</a>
            <a slot="right"> | </a>
            <a slot="right" href="/register">注册</a>-->
            <span slot="right">
                <a @click="showLogin" class="zee-left">登陆</a>
                <span class="zee-left zee-margin-left-8"> | </span>
                <router-link to="register" class="zee-left">注册</router-link>
            </span>
        </x-header>
        <popup v-model="show" height="100%">
            <div class="zee-popup">
                <a class="vux-close zee-close" style="color:red;" @click="hideLogin"></a>
                <div class="zee-login-logo">
                    <img src="data:image/png;base64,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" alt="500彩票网">
                </div>
                <group>
                    <x-input title="账号:" v-model="username" placeholder="请输入账号"></x-input>
                    <x-input title="密码:" v-model="pwd" placeholder="请输入密码" type="password"></x-input>
                    <x-input title="验证码:" class="weui-cell_vcode" v-model="vcode" placeholder="请输入验证码">
                        <img slot="right" class="weui-vcode-img" src="http://weui.github.io/weui/images/vcode.jpg">
                    </x-input>
                </group>
                <x-button plain class="zee-submit" type="primary" action-type="button">登陆</x-button>
            </div>
        </popup>
    </div>
</template>

<style scoped>
.zee-popup {
    width: 100%;
    height: 100%;
}

.zee-login-logo {
    text-align: center;
    padding-top: 20px;
}

.zee-close {
    position: absolute;
    top: 5px;
    right: 5px;
}

.zee-submit{
    margin-top: 15px;
}

.zee-left{
    float: left;
}
.zee-margin-left-8{
    margin-left: 8px;
}
</style>

<script>
import { XHeader, Popup, Group, XInput, XButton } from 'vux'
export default {
    components: {
        XHeader,
        Popup,
        Group,
        XInput,
        XButton
    },
    data() {
        return {
            show: false,
            username: '',
            pwd: '',
            vcode: ''
        }
    },
    methods: {
        showLogin() {
            this.show = true
        },
        hideLogin() {
            this.show = false
        }
    }
}
</script>