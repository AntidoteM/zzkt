<template>
    <div>
        <nav-bar>
            <div slot="title">学习记录</div>
        </nav-bar>
        <div class="page-container">
            <div class="user-center-volunteer-main">
                <div class="personal-settings__right" id="studyItem">
                    <div style="padding-top:10px">
                        <img style="width: 200px;display: block;margin: 0 auto;" src="http://www.danengshou.com/img/empty.png" />
                        <span style="text-align: center;display: block;margin-top: 10px;font-size: 11px;">暂无学习记录！</span>
                    </div>
                </div>
                <div class="module page-index-pagination" id="paginations" style="margin: 0.3rem 0"></div>
            </div>
            <ul>
                <li></li>
            </ul>
        </div>
    </div>
</template>

<script>
import navBar from '../../../../components/navbar'
export default {
    data(){
        return {

        }
    },
    components: {
        navBar
    }
}
</script>

<style lang="less" scoped>
    .page-container {
        margin-top: 45px;
    }
</style>