<template>
  <div>
    <nav-bar>
      <div slot="title">资料设置</div>
    </nav-bar>
    <div class="page-container">
      <form class="material-setting_form material-setting_form-top-none" id="upFileForm">
        <div class="Essential-information-1 Essential-information-1-have">
          <div class="common-detail">
            <div>基本信息</div>
            <div class="Essential-information-1-1" @click="basicshow=!basicshow">
              <span class="list-span_">{{basicshow?'收起':'展开'}}</span>
              <img class="test-inverseNormal" :class="basicshow?'test-inverse':''" src="http://h5.danengshou.com/img/downLoad_1.png" />
            </div>
          </div>
          <transition name="fade">
          <div class="essentiall-information" v-if="basicshow">
            <div class="material-setting_form-wrapper">
              <label class="material-setting_form-label">头像：</label>
              <div class="material-setting-wrapper">
                <div class="material-setting__uploading">
                  <img
                    src="http://vocational-1258108869.cos.ap-shanghai.myqcloud.com/images/6f0c342c-e243-a6ee-7530-3c9fb571fd3d.png"
                    id="HeadImg"
                    alt
                    width="90"
                    height="70"
                  />
                </div>
                <div class="material-setting">
                  <input
                    type="file"
                    id="imgFile"
                    class="flie_upload img_left"
                    accept="image/*"
                    name="file"
                  />
                </div>
                <input type="text" hidden="hidden" id="imgHead" />
                <input type="text" hidden="hidden" value="0" name="type" />
              </div>
              <span class="touxiang_text">支持JPG、GIF、PNG格式的图片建议文件小于20M</span>
              <input class="touxiang_btn" disabled type="button" value />
            </div>
            <div class="material-setting_form-wrapper">
              <label class="material-setting_form-label">姓名：</label>
              <input
                class="material-setting_form-input"
                id="studentName"
                type="text"
                placeholder="请输入姓名(用于实名认证)"
              />
            </div>
            <div class="material-setting_form-wrapper">
              <label class="material-setting_form-label">性别：</label>
              <span class="radio">
                <input id="radio-1" name="sex" value="0" type="radio" checked="checked" />

                <label for="radio-1" class="radio_text">男</label>
              </span>
              <span class="radio">
                <input id="radio-2" name="sex" value="1" type="radio" />

                <label for="radio-2" class="radio_text">女</label>
              </span>
            </div>
            <div class="material-setting_form-wrapper">
              <label class="material-setting_form-label">*身份证号：</label>
              <input
                class="material-setting_form-input"
                id="cardId"
                type="text"
                placeholder="请输入您的身份证号"
              />
            </div>
            <div class="material-setting_form-wrapper flex_show">
              <label class="material-setting_form-label">身份证照片：</label>
              <div id="frontCardPoster" class="preview">
                <input
                  type="file"
                  accept="image/*"
                  name="file"
                  class="file"
                  id="frontCardPosterFile"
                  value
                />
                <input id="frontCardPosterUrl" value hidden />
              </div>
              <div id="backCardPoster" class="preview">
                <input
                  type="file"
                  accept="image/*"
                  name="file"
                  class="file"
                  id="backCardPosterFile"
                  value
                />
                <input id="backCardPosterUrl" value hidden />
              </div>
            </div>
            <div class="material-setting_form-wrapper flex_show">
              <label class="material-setting_form-label material-setting_form-label_1">上传本人电子照片：</label>
              <div id="ercunPhotos" class="preview">
                <input
                  type="file"
                  accept="image/*"
                  name="file"
                  class="file"
                  id="ercunPhotosFile"
                  value
                />
                <input id="ercunPhotosUrl" value hidden />
              </div>
            </div>
            <div class="material-setting_form-wrapper">
              <label class="material-setting_form-label">出生日期：</label>
              <input
                class="material-setting_form-input"
                id="userBirth"
                type="text"
                placeholder="YYYY-MM-DD"
              />
            </div>
            <div class="material-setting_form-wrapper">
              <label class="material-setting_form-label">联系电话:</label>
              <input
                class="material-setting_form-input"
                id="userPhone"
                type="text"
                placeholder="请输入您联系电话"
              />
            </div>
            <div class="material-setting_form-wrapper">
              <label class="material-setting_form-label">邮箱：</label>
              <input
                class="material-setting_form-input"
                id="email"
                type="text"
                placeholder="请输入您常用的邮箱"
              />
            </div>
          </div>
          </transition>
        </div>

        <div class="Essential-information-1 Essential-information-1-have-1">
          <div class="common-detail">
            <div>详细信息</div>
            <div class="Essential-information-1-2" @click="detailshow=!detailshow">
              <span class="list-span-1">{{detailshow?'收起':'展开'}}</span>
              <img class="test-inverseNormal" :class="detailshow?'test-inverse':''" src="http://h5.danengshou.com/img/downLoad_1.png" />
            </div>
          </div>
          <transition name="fade">
          <div class="essentiall-information-1" v-if="detailshow">
            <div class="material-setting_form-wrapper">
              <label class="material-setting_form-label">民族：</label>
              <select id="national" class="userTypeMain">
                <option value="汉族">汉族</option>
                <option value="壮族">壮族</option>
                <option value="满族">满族</option>
                <option value="回族">回族</option>
                <option value="苗族">苗族</option>
                <option value="维吾尔族">维吾尔族</option>
                <option value="土家族">土家族</option>
                <option value="彝族">彝族</option>
                <option value="蒙古族">蒙古族</option>
                <option value="藏族">藏族</option>
                <option value="布依族">布依族</option>
                <option value="侗族">侗族</option>
                <option value="瑶族">瑶族</option>
                <option value="朝鲜族">朝鲜族</option>
                <option value="白族">白族</option>
                <option value="哈尼族">哈尼族</option>
                <option value="哈萨克族">哈萨克族</option>
                <option value="黎族">黎族</option>
                <option value="傣族">傣族</option>
                <option value="畲族">畲族</option>
                <option value="傈僳族">傈僳族</option>
                <option value="仡佬族">仡佬族</option>
                <option value="东乡族">东乡族</option>
                <option value="高山族">高山族</option>
                <option value="拉祜族">拉祜族</option>
                <option value="水族">水族</option>
                <option value="佤族">佤族</option>
                <option value="纳西族">纳西族</option>
                <option value="羌族">羌族</option>
                <option value="土族">土族</option>
                <option value="仫佬族">仫佬族</option>
                <option value="锡伯族">锡伯族</option>
                <option value="柯尔克孜族">柯尔克孜族</option>
                <option value="达斡尔族">达斡尔族</option>
                <option value="景颇族">景颇族</option>
                <option value="毛南族">毛南族</option>
                <option value="撒拉族">撒拉族</option>
                <option value="布朗族">布朗族</option>
                <option value="塔吉克族">塔吉克族</option>
                <option value="阿昌族">阿昌族</option>
                <option value="普米族">普米族</option>
                <option value="鄂温克族">鄂温克族</option>
                <option value="怒族">怒族</option>
                <option value="京族">京族</option>
                <option value="基诺族">基诺族</option>
                <option value="德昂族">德昂族</option>
                <option value="保安族">保安族</option>
                <option value="俄罗斯族">俄罗斯族</option>
                <option value="裕固族">裕固族</option>
                <option value="乌孜别克族">乌孜别克族</option>
                <option value="门巴族">门巴族</option>
                <option value="鄂伦春族">鄂伦春族</option>
                <option value="独龙族">独龙族</option>
                <option value="塔塔尔族">塔塔尔族</option>
                <option value="赫哲族">赫哲族</option>
                <option value="珞巴族">珞巴族</option>
              </select>
            </div>
            <div class="material-setting_form-wrapper">
              <label class="material-setting_form-label">文化程度：</label>
              <select id="education" class="userTypeMain">
                <option value="TYPE_PRIMARY_SCHOOL" style="font-size: 15px">小学及以下</option>
                <option value="TYPE_JUNIOR MIDDLE SCHOOL" style="font-size: 15px">初中</option>
                <option value="TYPE_SENIOR" style="font-size: 15px">高中</option>
                <option value="TYPE_JUNIOR COLLEGE" style="font-size: 15px">大科</option>
                <option value="TYPE_UNDERGRADUATE" style="font-size: 15px">本科</option>
                <option value="TYPE_MASTER" style="font-size: 15px">硕士及以上</option>
              </select>
            </div>
            <div class="material-setting_form-wrapper">
              <label class="material-setting_form-label">政治面貌：</label>
              <select id="politicalAppearance" class="userTypeMain">
                <option value="群众" style="font-size: 15px">群众</option>
                <option value="党员" style="font-size: 15px">党员</option>
                <option value="军人" style="font-size: 15px">军人</option>
                <option value="共青团员" style="font-size: 15px">共青团员</option>
              </select>
            </div>
            <div class="material-setting_form-wrapper">
              <label class="material-setting_form-label">户籍所在地:</label>
              <input
                class="material-setting_form-input"
                id="locationRegistration"
                type="text"
                placeholder="请输入您户籍所在地"
              />
            </div>
            <div class="material-setting_form-wrapper">
              <label class="material-setting_form-label">现居地址:</label>
              <!--创造三个下拉选项栏-->
              <select class="choose_city" id="pro">
                <option value="dd9b2987af4a11e9ac97005056ae9835">云南</option>
                <option value="cbc80ed6ecb211e9ad5d00163e08da4d">北京</option>
                <option value="cbc81112ecb211e9ad5d00163e08da4d">天津</option>
                <option value="cbc81356ecb211e9ad5d00163e08da4d">河北</option>
                <option value="cbc82b9aecb211e9ad5d00163e08da4d">山西</option>
                <option value="cbc83ba9ecb211e9ad5d00163e08da4d">内蒙古</option>
                <option value="cbd5d031ecb211e9ad5d00163e08da4d">辽宁</option>
                <option value="cbd5e006ecb211e9ad5d00163e08da4d">吉林</option>
                <option value="cbd5e959ecb211e9ad5d00163e08da4d">黑龙江</option>
                <option value="cbda7c45ecb211e9ad5d00163e08da4d">上海</option>
                <option value="cbda7ee0ecb211e9ad5d00163e08da4d">江苏</option>
                <option value="cbda8dccecb211e9ad5d00163e08da4d">浙江</option>
                <option value="cbda9db4ecb211e9ad5d00163e08da4d">安徽</option>
                <option value="cbdf3480ecb211e9ad5d00163e08da4d">福建</option>
                <option value="cbdf418cecb211e9ad5d00163e08da4d">江西</option>
                <option value="cbdf510eecb211e9ad5d00163e08da4d">山东</option>
                <option value="cbdf63dbecb211e9ad5d00163e08da4d">河南</option>
                <option value="cbe408afecb211e9ad5d00163e08da4d">湖北</option>
                <option value="cbe418aeecb211e9ad5d00163e08da4d">湖南</option>
                <option value="cbe42d1eecb211e9ad5d00163e08da4d">广东</option>
                <option value="cbe43febecb211e9ad5d00163e08da4d">广西</option>
                <option value="cbe920a6ecb211e9ad5d00163e08da4d">海南</option>
                <option value="cbe924edecb211e9ad5d00163e08da4d">重庆</option>
                <option value="cbe929ccecb211e9ad5d00163e08da4d">四川</option>
                <option value="cbe9441cecb211e9ad5d00163e08da4d">贵州</option>
                <option value="cbe9572eecb211e9ad5d00163e08da4d">西藏</option>
                <option value="cbe96198ecb211e9ad5d00163e08da4d">陕西</option>
                <option value="cbededd4ecb211e9ad5d00163e08da4d">甘肃</option>
                <option value="cbedfc80ecb211e9ad5d00163e08da4d">青海</option>
                <option value="cbee034cecb211e9ad5d00163e08da4d">宁夏</option>
                <option value="cbee07dbecb211e9ad5d00163e08da4d">新疆兵团</option>
                <option value="cbee18e4ecb211e9ad5d00163e08da4d">新疆</option>
              </select>
              <select class="choose_city" id="city">
                <option value>请选择</option>
                <option value="dd9be929af4a11e9ac97005056ae9835">昆明市</option>
                <option value="dda73ec3af4a11e9ac97005056ae9835">曲靖市</option>
                <option value="ddae6369af4a11e9ac97005056ae9835">玉溪市</option>
                <option value="ddb85750af4a11e9ac97005056ae9835">保山市</option>
                <option value="ddbcc8eeaf4a11e9ac97005056ae9835">昭通市</option>
                <option value="ddc596adaf4a11e9ac97005056ae9835">丽江市</option>
                <option value="ddc9beefaf4a11e9ac97005056ae9835">普洱市</option>
                <option value="ddd1f0e8af4a11e9ac97005056ae9835">临沧市</option>
                <option value="ddd8eb4faf4a11e9ac97005056ae9835">楚雄彝族自治州</option>
                <option value="dde2087eaf4a11e9ac97005056ae9835">红河哈尼族彝族自治州</option>
                <option value="ddec2002af4a11e9ac97005056ae9835">文山壮族苗族自治州</option>
                <option value="ddf2a8b1af4a11e9ac97005056ae9835">西双版纳傣族自治州</option>
                <option value="ddf6f0c4af4a11e9ac97005056ae9835">大理白族自治州</option>
                <option value="de03fbd6af4a11e9ac97005056ae9835">德宏傣族景颇族自治州</option>
                <option value="de094a71af4a11e9ac97005056ae9835">怒江傈僳族自治州</option>
                <option value="de0de44baf4a11e9ac97005056ae9835">迪庆藏族自治州</option>
              </select>
              <select class="choose_city" id="area">
                <option value>请选择</option>
              </select>
            </div>
            <div class="material-setting_form-wrapper">
              <label class="material-setting_form-label">详细地址:</label>
              <input
                class="material-setting_form-input"
                id="userAddress"
                type="text"
                placeholder="请输入您详细地址"
              />
            </div>
          </div>
          </transition>
        </div>

        <div class="Essential-information-1 Essential-information-1-have-2">
          <div class="common-detail">
            <div>职培信息</div>
            <div class="Essential-information-1-3" @click="professionshow=!professionshow">
              <span class="list-span-2">{{professionshow?'收起':'展开'}}</span>
              <img class="test-inverseNormal" :class="professionshow?'test-inverse':''" src="http://h5.danengshou.com/img/downLoad_1.png" />
            </div>
          </div>
            <transition name="fade">
            <div class="essentiall-information-2" v-if="professionshow">
                <div class="material-setting_form-wrapper">
                <label class="material-setting_form-label">人员类型：</label>
                    <select id="userType" @change='changetype'>
                        <option value="">选择人员类型</option>
                        <option value="农村转移就业劳动力">农村转移就业劳动力</option>
                        <option value="城乡未继续升学初高中毕业生">城乡未继续升学初高中毕业生</option>
                        <option value="退役军人">退役军人</option>
                        <option value="城镇登记失业的零就业家庭人员">城镇登记失业的零就业家庭人员</option>
                        <option value="享受城乡居民最低生活保障失业人员">享受城乡居民最低生活保障失业人员</option>
                        <option value="大龄城镇失业人员">大龄城镇失业人员</option>
                        <option value="残疾人">残疾人</option>
                        <option value="城乡登记失业人员">城乡登记失业人员</option>
                        <option value="企业职工" style="font-size: 15px">企业职工</option>
                        <option value="毕业年度高校毕业生" style="font-size: 15px">毕业年度高校毕业生</option>
                        <option value="在校大学生" style="font-size: 15px">在校大学生</option>
                        <option value="贫困家庭子女" style="font-size: 15px">贫困家庭子女</option>
                        <option value="贫困劳动力" style="font-size: 15px">贫困劳动力</option>
                    </select>
                </div>
                <div class="material-setting_form-wrapper fl_show_all">
                <label class="material-setting_form-label material-setting_form-label_1">就业状态：</label>
                <span class="radio radio_1">
                    <input
                    id="radio-1-1"
                    name="employmentStatus"
                    value="TYPE_ENTREPRENEURSHIP"
                    type="radio"
                    />
                    <label for="radio-1-1" class="radio_text">已创业</label>
                </span>
                <span class="radio radio_1">
                    <input
                    id="radio-2-2"
                    name="employmentStatus"
                    value="TYPE_PRE_ENTREPRENEURSHIP"
                    type="radio"
                    />
                    <label for="radio-2-2" class="radio_text">计划创业</label>
                </span>
                <span class="radio radio_1">
                    <input
                    id="radio-3-3"
                    name="employmentStatus"
                    value="TYPE_OBTAIN_EMPLOYMENT"
                    type="radio"
                    />
                    <label for="radio-3-3" class="radio_text">已就业</label>
                </span>
                <span class="radio radio_1">
                    <input
                    id="radio-4-4"
                    name="employmentStatus"
                    value="TYPE_UNEMPLOYMENT"
                    type="radio"
                    />
                    <label for="radio-4-4" class="radio_text">失业</label>
                </span>
                </div>
                <div class="material-setting_form-wrapper flex_show">
                <label class="material-setting_form-label material-setting_form-label_1">上传就业创业证：</label>
                <div id="entrepreneurshipImg" class="preview">
                    <input
                    type="file"
                    accept="image/*"
                    name="file"
                    class="file"
                    id="entrepreneurshipImgFile"
                    value
                    />
                    <input id="entrepreneurshipImgUrl" value hidden />
                </div>
                </div>
                <div class="material-setting_form-wrapper">
                <label class="material-setting_form-label">手持证件名称:</label>
                <input
                    class="material-setting_form-input"
                    id="certificatesType"
                    type="text"
                    placeholder="请输入您手持证件名称"
                />
                </div>
                <div class="material-setting_form-wrapper">
                <label class="material-setting_form-label">手持证件号码:</label>
                <input
                    class="material-setting_form-input"
                    id="certificatesCode"
                    type="text"
                    placeholder="请输入您手持证件号码"
                />
                </div>
                <div class="material-setting_form-wrapper flex_show">
                <label class="material-setting_form-label material-setting_form-label_1">上传职业能力等级证书：</label>
                <div id="vocationalAbility" class="preview">
                    <input
                    type="file"
                    accept="image/*"
                    name="file"
                    class="file"
                    id="vocationalAbilityFile"
                    value
                    />
                    <input id="vocationalAbilityUrl" value hidden />
                </div>
                </div>
                <div class="material-setting_form-wrapper">
                <label class="material-setting_form-label">学生证号:</label>
                <input
                    class="material-setting_form-input"
                    id="studentCode"
                    type="text"
                    placeholder="请输入您学生证号"
                />
                </div>
                <div class="material-setting_form-wrapper">
                <label class="material-setting_form-label">学生所学专业:</label>
                <input
                    class="material-setting_form-input"
                    id="majorStudy"
                    type="text"
                    placeholder="请输入您所学专业"
                />
                </div>
                <div class="material-setting_form-wrapper">
                <label class="material-setting_form-label">学籍号:</label>
                <input
                    class="material-setting_form-input"
                    id="studentNumber"
                    type="text"
                    placeholder="请输入您学籍号"
                />
                </div>
                <div></div>
            </div>
            </transition>
        </div>
        <div class="preservation_form-wrapper">
          <input class="preservation_btn" type="button" value="保存" />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import navBar from "../../../../components/navbar";
export default {
  data() {
    return {
        basicshow:false,
        detailshow:false,
        professionshow:false
    };
  },
  components: {
    navBar,
  },
  methods:{
      changetype(e){
          console.log(e)
      },

  }
};
</script>

<style lang="less" scoped>
@import url('setting.less');
.page-container {
  margin-top: 45px;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>