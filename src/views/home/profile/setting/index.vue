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
              <img
                class="test-inverseNormal"
                :class="basicshow?'test-inverse':''"
                src="http://h5.danengshou.com/img/downLoad_1.png"
              />
            </div>
          </div>
          <transition name="fade">
            <div class="essentiall-information" v-if="basicshow">
              <div class="material-setting_form-wrapper">
                <label class="material-setting_form-label">头像：</label>
                <div class="material-setting-wrapper">
                  <div class="material-setting__uploading">
                    <img :src="profile_photo" id="HeadImg" alt width="90" height="70" />
                  </div>
                  <div class="material-setting">
                    <input
                      type="file"
                      id="imgFile"
                      class="flie_upload img_left"
                      accept="image/*"
                      name="file"
                      @change="changenheaderimg"
                    />
                  </div>
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
                  v-model="name"
                />
              </div>
              <div class="material-setting_form-wrapper">
                <label class="material-setting_form-label">性别：</label>
                <span class="radio" @click="gender='1'">
                  <input id="radio-1" name="sex" type="radio" :checked="gender=='1'" />

                  <label for="radio-1" class="radio_text">男</label>
                </span>
                <span class="radio" @click="gender='2'">
                  <input id="radio-2" name="sex" type="radio" :checked="gender=='2'" />

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
                  v-model="id_card"
                />
              </div>
              <div class="material-setting_form-wrapper flex_show">
                <label class="material-setting_form-label">身份证照片：</label>
                <div
                  id="frontCardPoster"
                  class="preview"
                  :style="'background-image:url(' +( identity_card_photo_front?identity_card_photo_front:'http://h5.danengshou.com/img/addsfz.png' )+');'"
                >
                  <input
                    type="file"
                    accept="image/*"
                    name="file"
                    class="file"
                    id="frontCardPosterFile"
                    @change="changeimg($event,'identity_card_photo_front')"
                  />
                </div>
                <div
                  id="backCardPoster"
                  class="preview"
                  :style="'background-image:url(' +( identity_card_photo_contrary?identity_card_photo_contrary:'http://h5.danengshou.com/img/addsfz.png' )+');'"
                >
                  <input
                    type="file"
                    accept="image/*"
                    name="file"
                    class="file"
                    id="backCardPosterFile"
                    @change="changeimg($event,'identity_card_photo_contrary')"
                  />
                </div>
              </div>
              <div class="material-setting_form-wrapper flex_show">
                <label class="material-setting_form-label material-setting_form-label_1">上传本人电子照片：</label>
                <div
                  id="ercunPhotos"
                  class="preview"
                  :style="'background-image:url(' +( photo?photo:'http://h5.danengshou.com/img/addsfz.png' )+');'"
                >
                  <input
                    type="file"
                    accept="image/*"
                    name="file"
                    class="file"
                    id="ercunPhotosFile"
                    @change="changeimg($event,'photo')"
                  />
                </div>
              </div>
              <div class="material-setting_form-wrapper">
                <label class="material-setting_form-label">出生日期：</label>
                <input
                  class="material-setting_form-input"
                  id="userBirth"
                  type="text"
                  placeholder="YYYY-MM-DD"
                  v-model="birthdate"
                />
              </div>
              <div class="material-setting_form-wrapper">
                <label class="material-setting_form-label">联系电话:</label>
                <input
                  class="material-setting_form-input"
                  id="userPhone"
                  type="text"
                  placeholder="请输入您联系电话"
                  v-model="phone"
                />
              </div>
              <div class="material-setting_form-wrapper">
                <label class="material-setting_form-label">邮箱：</label>
                <input
                  class="material-setting_form-input"
                  id="email"
                  type="text"
                  placeholder="请输入您常用的邮箱"
                  v-model="email"
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
              <img
                class="test-inverseNormal"
                :class="detailshow?'test-inverse':''"
                src="http://h5.danengshou.com/img/downLoad_1.png"
              />
            </div>
          </div>
          <transition name="fade">
            <div class="essentiall-information-1" v-if="detailshow">
              <div class="material-setting_form-wrapper">
                <label class="material-setting_form-label">民族：</label>
                <select id="national" class="userTypeMain" @change="selectChange($event,'nation')">
                  <option value>请选择</option>
                  <option value="汉族" :selected="nation=='汉族'">汉族</option>
                  <option value="壮族" :selected="nation=='壮族'">壮族</option>
                  <option value="满族" :selected="nation=='满族'">满族</option>
                  <option value="回族" :selected="nation=='回族'">回族</option>
                  <option value="苗族" :selected="nation=='苗族'">苗族</option>
                  <option value="维吾尔族" :selected="nation=='维吾尔族'">维吾尔族</option>
                  <option value="土家族" :selected="nation=='土家族'">土家族</option>
                  <option value="彝族" :selected="nation=='彝族'">彝族</option>
                  <option value="蒙古族" :selected="nation=='蒙古族'">蒙古族</option>
                  <option value="藏族" :selected="nation=='藏族'">藏族</option>
                  <option value="布依族" :selected="nation=='布依族'">布依族</option>
                  <option value="侗族" :selected="nation=='侗族'">侗族</option>
                  <option value="瑶族" :selected="nation=='瑶族'">瑶族</option>
                  <option value="朝鲜族" :selected="nation=='朝鲜族'">朝鲜族</option>
                  <option value="白族" :selected="nation=='白族'">白族</option>
                  <option value="哈尼族" :selected="nation=='哈尼族'">哈尼族</option>
                  <option value="哈萨克族" :selected="nation=='哈萨克族'">哈萨克族</option>
                  <option value="黎族" :selected="nation=='黎族'">黎族</option>
                  <option value="傣族" :selected="nation=='傣族'">傣族</option>
                  <option value="畲族" :selected="nation=='畲族'">畲族</option>
                  <option value="傈僳族" :selected="nation=='傈僳族'">傈僳族</option>
                  <option value="仡佬族" :selected="nation=='仡佬族'">仡佬族</option>
                  <option value="东乡族" :selected="nation=='东乡族'">东乡族</option>
                  <option value="高山族" :selected="nation=='高山族'">高山族</option>
                  <option value="拉祜族" :selected="nation=='拉祜族'">拉祜族</option>
                  <option value="水族" :selected="nation=='水族'">水族</option>
                  <option value="佤族" :selected="nation=='佤族'">佤族</option>
                  <option value="纳西族" :selected="nation=='纳西族'">纳西族</option>
                  <option value="羌族" :selected="nation=='羌族'">羌族</option>
                  <option value="土族" :selected="nation=='土族'">土族</option>
                  <option value="仫佬族" :selected="nation=='仫佬族'">仫佬族</option>
                  <option value="锡伯族" :selected="nation=='锡伯族'">锡伯族</option>
                  <option value="柯尔克孜族" :selected="nation=='柯尔克孜族'">柯尔克孜族</option>
                  <option value="达斡尔族" :selected="nation=='达斡尔族'">达斡尔族</option>
                  <option value="景颇族" :selected="nation=='景颇族'">景颇族</option>
                  <option value="毛南族" :selected="nation=='毛南族'">毛南族</option>
                  <option value="撒拉族" :selected="nation=='撒拉族'">撒拉族</option>
                  <option value="布朗族" :selected="nation=='布朗族'">布朗族</option>
                  <option value="塔吉克族" :selected="nation=='塔吉克族'">塔吉克族</option>
                  <option value="阿昌族" :selected="nation=='阿昌族'">阿昌族</option>
                  <option value="普米族" :selected="nation=='普米族'">普米族</option>
                  <option value="鄂温克族" :selected="nation=='鄂温克族'">鄂温克族</option>
                  <option value="怒族" :selected="nation=='怒族'">怒族</option>
                  <option value="京族" :selected="nation=='京族'">京族</option>
                  <option value="基诺族" :selected="nation=='基诺族'">基诺族</option>
                  <option value="德昂族" :selected="nation=='德昂族'">德昂族</option>
                  <option value="保安族" :selected="nation=='保安族'">保安族</option>
                  <option value="俄罗斯族" :selected="nation=='俄罗斯族'">俄罗斯族</option>
                  <option value="裕固族" :selected="nation=='裕固族'">裕固族</option>
                  <option value="乌孜别克族" :selected="nation=='乌孜别克族'">乌孜别克族</option>
                  <option value="门巴族" :selected="nation=='门巴族'">门巴族</option>
                  <option value="鄂伦春族" :selected="nation=='鄂伦春族'">鄂伦春族</option>
                  <option value="独龙族" :selected="nation=='独龙族'">独龙族</option>
                  <option value="塔塔尔族" :selected="nation=='塔塔尔族'">塔塔尔族</option>
                  <option value="赫哲族" :selected="nation=='赫哲族'">赫哲族</option>
                  <option value="珞巴族" :selected="nation=='珞巴族'">珞巴族</option>
                </select>
              </div>
              <div class="material-setting_form-wrapper">
                <label class="material-setting_form-label">文化程度：</label>
                <select
                  id="education"
                  class="userTypeMain"
                  @change="selectChange($event,'education')"
                >
                  <option value="小学及以下" :selected="education=='小学及以下'" style="font-size: 15px">小学及以下</option>
                  <option value="初中" :selected="education=='初中'" style="font-size: 15px">初中</option>
                  <option value="高中" :selected="education=='高中'" style="font-size: 15px">高中</option>
                  <option value="大科" :selected="education=='大科'" style="font-size: 15px">大科</option>
                  <option value="本科" :selected="education=='本科'" style="font-size: 15px">本科</option>
                  <option value="硕士及以上" :selected="education=='硕士及以上'" style="font-size: 15px">硕士及以上</option>
                </select>
              </div>
              <div class="material-setting_form-wrapper">
                <label class="material-setting_form-label">政治面貌：</label>
                <select
                  id="politicalAppearance"
                  class="userTypeMain"
                  @change="selectChange($event,'politics_status')"
                >
                  <option value="群众" :selected="politics_status=='群众'" style="font-size: 15px">群众</option>
                  <option value="党员" :selected="politics_status=='党员'" style="font-size: 15px">党员</option>
                  <option value="军人" :selected="politics_status=='军人'" style="font-size: 15px">军人</option>
                  <option value="共青团员" :selected="politics_status=='共青团员'" style="font-size: 15px">共青团员</option>
                </select>
              </div>
              <div class="material-setting_form-wrapper">
                <label class="material-setting_form-label">户籍所在地:</label>
                <input
                  class="material-setting_form-input"
                  id="locationRegistration"
                  type="text"
                  placeholder="请输入您户籍所在地"
                  v-model="census_register"
                />
              </div>
              <div class="material-setting_form-wrapper">
                <label class="material-setting_form-label">现居地址:</label>
                <select class="choose_city" id="pro" @change="prochange">
                  <option value>请选择</option>
                  <option
                    v-for="(item,index) in provinceList"
                    :key="index"
                    :value="item.name"
                  >{{item.name}}</option>
                </select>
                <select class="choose_city" id="city" @change="citychange" :disabled="!province">
                  <option value>请选择</option>
                  <option
                    v-for="(item,index) in cityList"
                    :key="index"
                    :value="item.name"
                  >{{item.name}}</option>
                </select>
                <select class="choose_city" id="area" @change="areachange" :disabled="!city">
                  <option value>请选择</option>
                  <option v-for="(item,index) in areaList" :key="index" :value="item">{{item}}</option>
                </select>
                <div style="margin-left:25%">{{province}},{{city}},{{area}}</div>
              </div>
              <div class="material-setting_form-wrapper">
                <label class="material-setting_form-label">详细地址:</label>
                <input
                  class="material-setting_form-input"
                  id="userAddress"
                  type="text"
                  placeholder="请输入您详细地址"
                  v-model="detailed_address"
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
              <img
                class="test-inverseNormal"
                :class="professionshow?'test-inverse':''"
                src="http://h5.danengshou.com/img/downLoad_1.png"
              />
            </div>
          </div>
          <transition name="fade">
            <div class="essentiall-information-2" v-if="professionshow">
              <div class="material-setting_form-wrapper">
                <label class="material-setting_form-label">人员类型：</label>
                <select id="userType" @change="selectChange($event,'personnel_type')">
                  <option value>选择人员类型</option>
                  <option value="农村转移就业劳动力" :selected="personnel_type=='农村转移就业劳动力'">农村转移就业劳动力</option>
                  <option value="城乡未继续升学初高中毕业生" :selected="personnel_type=='城乡未继续升学初高中毕业生'">城乡未继续升学初高中毕业生</option>
                  <option value="退役军人" :selected="personnel_type=='退役军人'">退役军人</option>
                  <option value="城镇登记失业的零就业家庭人员" :selected="personnel_type=='城镇登记失业的零就业家庭人员'">城镇登记失业的零就业家庭人员</option>
                  <option value="享受城乡居民最低生活保障失业人员" :selected="personnel_type=='享受城乡居民最低生活保障失业人员'">享受城乡居民最低生活保障失业人员</option>
                  <option value="大龄城镇失业人员" :selected="personnel_type=='大龄城镇失业人员'">大龄城镇失业人员</option>
                  <option value="残疾人" :selected="personnel_type=='残疾人'">残疾人</option>
                  <option value="城乡登记失业人员" :selected="personnel_type=='城乡登记失业人员'">城乡登记失业人员</option>
                  <option value="企业职工" style="font-size: 15px" :selected="personnel_type=='企业职工'">企业职工</option>
                  <option value="毕业年度高校毕业生" style="font-size: 15px" :selected="personnel_type=='毕业年度高校毕业生'">毕业年度高校毕业生</option>
                  <option value="在校大学生" style="font-size: 15px" :selected="personnel_type=='在校大学生'">在校大学生</option>
                  <option value="贫困家庭子女" style="font-size: 15px" :selected="personnel_type=='贫困家庭子女'">贫困家庭子女</option>
                  <option value="贫困劳动力" style="font-size: 15px" :selected="personnel_type=='贫困劳动力'">贫困劳动力</option>
                </select>
              </div>
              <div class="material-setting_form-wrapper fl_show_all">
                <label class="material-setting_form-label material-setting_form-label_1">就业状态：</label>
                <span class="radio radio_1">
                  <input
                    id="radio-1-1"
                    name="employmentStatus"
                    value="已创业"
                    type="radio"
                    :checked="employment=='已创业'"
                    @click="employment='已创业'"
                  />
                  <label for="radio-1-1" class="radio_text">已创业</label>
                </span>
                <span class="radio radio_1">
                  <input
                    id="radio-2-2"
                    name="employmentStatus"
                    value="计划创业"
                    type="radio"
                    :checked="employment=='计划创业'"
                    @click="employment='计划创业'"
                  />
                  <label for="radio-2-2" class="radio_text">计划创业</label>
                </span>
                <span class="radio radio_1">
                  <input
                    id="radio-3-3"
                    name="employmentStatus"
                    value="已就业"
                    type="radio"
                    :checked="employment=='已就业'"
                    @click="employment='已就业'"
                  />
                  <label for="radio-3-3" class="radio_text">已就业</label>
                </span>
                <span class="radio radio_1">
                  <input
                    id="radio-4-4"
                    name="employmentStatus"
                    value="失业"
                    type="radio"
                    :checked="employment=='失业'"
                    @click="employment='失业'"
                  />
                  <label for="radio-4-4" class="radio_text">失业</label>
                </span>
              </div>
              <div class="material-setting_form-wrapper flex_show">
                <label class="material-setting_form-label material-setting_form-label_1">上传就业创业证：</label>
                <div
                  id="entrepreneurshipImg"
                  class="preview"
                  :style="'background-image:url(' +( business_card?business_card:'http://h5.danengshou.com/img/addsfz.png' )+');'"
                >
                  <input
                    type="file"
                    accept="image/*"
                    name="file"
                    class="file"
                    id="entrepreneurshipImgFile"
                    @change="changeimg($event, 'business_card')"
                  />
                </div>
              </div>
              <div class="material-setting_form-wrapper">
                <label class="material-setting_form-label">手持证件名称:</label>
                <input
                  class="material-setting_form-input"
                  id="certificatesType"
                  type="text"
                  placeholder="请输入您手持证件名称"
                  v-model="card_name"
                />
              </div>
              <div class="material-setting_form-wrapper">
                <label class="material-setting_form-label">手持证件号码:</label>
                <input
                  class="material-setting_form-input"
                  id="certificatesCode"
                  type="text"
                  placeholder="请输入您手持证件号码"
                  v-model="card_num"
                />
              </div>
              <div class="material-setting_form-wrapper flex_show">
                <label class="material-setting_form-label material-setting_form-label_1">上传职业能力等级证书：</label>
                <div
                  id="vocationalAbility"
                  class="preview"
                  :style="'background-image:url(' +( ability_card_img?ability_card_img:'http://h5.danengshou.com/img/addsfz.png' )+');'"
                >
                  <input
                    type="file"
                    accept="image/*"
                    name="file"
                    class="file"
                    id="vocationalAbilityFile"
                    @change="changeimg($event, 'ability_card_img')"
                  />
                </div>
              </div>
              <div class="material-setting_form-wrapper">
                <label class="material-setting_form-label">学生证号:</label>
                <input
                  class="material-setting_form-input"
                  id="studentCode"
                  type="text"
                  placeholder="请输入您学生证号"
                  v-model="student_num"
                />
              </div>
              <div class="material-setting_form-wrapper">
                <label class="material-setting_form-label">学生所学专业:</label>
                <input
                  class="material-setting_form-input"
                  id="majorStudy"
                  type="text"
                  placeholder="请输入您所学专业"
                  v-model="profession"
                />
              </div>
              <div class="material-setting_form-wrapper">
                <label class="material-setting_form-label">学籍号:</label>
                <input
                  class="material-setting_form-input"
                  id="studentNumber"
                  type="text"
                  placeholder="请输入您学籍号"
                  v-model="school_roll_num"
                />
              </div>
              <div></div>
            </div>
          </transition>
        </div>
        <div class="preservation_form-wrapper">
          <input class="preservation_btn" type="button" value="保存" @click="commit" />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import navBar from "../../../../components/navbar";
import { Toast } from "mint-ui";
import provinceList from "./area.js";
export default {
  data() {
    return {
      basicshow: false,
      detailshow: false,
      professionshow: false,
      provinceList: provinceList,
      cityList: [],
      areaList: [],

      userType: "",

      profile_photo: "",
      name: "",
      gender: "",
      id_card: "",
      birthdate: "",
      identity_card_photo_front: "",
      identity_card_photo_contrary: "",
      photo: "",
      phone: "",
      email: "",

      nation: "",
      education: "",
      politics_status: "",
      detailed_address: "",
      province: "",
      city: "",
      area: "",
      census_register: "",

      personnel_type: "",
      employment: "",
      business_card: "",
      card_name: "",
      card_num: "",
      ability_card_img: "",
      student_num: "",
      profession: "",
      school_roll_num: "",
    };
  },
  components: {
    navBar,
  },
  created() {
    this.$axios.get("/user/show").then((res) => {
      let user = res.data.data;
      console.log(user)
      let address = user.current_address.split(',')
      this.province = address[0]
      this.city = address[1]
      this.area = address[2]
      for (let key in user) {
        this[key] = user[key];
      }
    });
  },
  methods: {
    changenheaderimg(e) {
      let data = new FormData();
      data.append("file", e.target.files[0]);
      this.$axios
        .post("/fileinput", data, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => {
          console.log(res.data);
          if (res.data.status == 200) {
            this.profile_photo = res.data.data;
          }
        });
    },
    changeimg(e, str) {
      let data = new FormData();
      data.append("file", e.target.files[0]);
      this.$axios
        .post("/fileinput", data, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => {
          if (res.data.status == 200) {
            console.log(res.data);
            this[str] = res.data.data;
          }
        });
    },
    selectChange(e, str) {
      this[str] = e.target.value;
    },
    prochange(e) {
      this.province = e.target.value;
      for (let item in this.provinceList) {
        if (this.provinceList[item].name == this.province) {
          this.cityList = this.provinceList[item].cityList;
        }
      }
    },
    citychange(e) {
      this.city = e.target.value;
      for (let item in this.cityList) {
        if (this.cityList[item].name == this.city) {
          this.areaList = this.cityList[item].areaList;
        }
      }
    },
    areachange(e) {
      this.area = e.target.value;
      console.log(this.province + " " + this.city + " " + this.area);
    },
    commit() {
      console.log(this.profile_photo)
      const regx = /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;
      const emailRegx = /^([a-zA-Z0-9]+[_|_|.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|_|.]?)*[a-zA-Z0-9]+.[a-zA-Z]{2,3}$/;
      if (!this.profile_photo) {
        Toast({
          message: "请上传头像",
          position: "bottom",
        });
        return;
      }

      if (this.name == "" || this.name == null || this.name == undefined) {
        Toast({
          message: "请输入姓名",
          position: "bottom",
        });
        return;
      }
      if (
        this.id_card == null ||
        this.id_card == undefined ||
        this.id_card == ""
      ) {
        Toast({
          message: "请输入身份证号",
          position: "bottom",
        });
        return;
      }
      if (!this.id_card.match(regx)) {
        Toast({
          message: "身份证号格式错误,请重新输入",
          position: "bottom",
        });
        return;
      }
      if (!this.email.match(emailRegx)) {
        Toast({
          message: "请输入有效的邮箱地址",
          position: "bottom",
        });
        return;
      }
      console.log({current_address: this.province+','+this.city+','+this.area,...this._data});
      this.$axios.post('/user/update',{current_address: this.province+','+this.city+','+this.area,...this._data}).then((res)=>{
        if(res.data.status==200){
          Toast({
            message: '已保存',
            position: 'bottom'
          })
        }
      })
    },
  },
};
</script>

<style lang="less" scoped>
@import url("setting.less");
.page-container {
  margin-top: 45px;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>