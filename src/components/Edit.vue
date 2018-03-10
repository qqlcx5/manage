<template>
  <div class="edit container">
    <Alert v-if='alert' :message='alert'></Alert>
    <h1 class="page-header">更新内容</h1>
        <form @submit='updateCust'>
        <div class="well">
            <h4>用户信息</h4>
            <div class="form-group">
                <label>姓名</label>
                <input type="text" class="form-control" placeholder="name" v-model='cust.name'>
            </div>
            <div class="form-group">
                <label>电话</label>
                <input type="text" class="form-control" placeholder="phone" v-model='cust.phone'>
            </div>
            <div class="form-group">
                <label>邮箱</label>
                <input type="text" class="form-control" placeholder="Email" v-model='cust.email'>
            </div>
            <div class="form-group">
                <label>学历</label>
                <input type="text" class="form-control" placeholder="education" v-model='cust.education'>
            </div>
            <div class="form-group">
                <label>毕业学校</label>
                <input type="text" class="form-control" placeholder="graduationschool" v-model='cust.graduationschool'>
            </div>
            <div class="form-group">
                <label>职业</label>
                <input type="text" class="form-control" placeholder="profession" v-model='cust.profession'>
            </div>
            <div class="form-group">
                <label>个人简介</label>
                <textarea class="form-control" rows="6" placeholder="profile" v-model='cust.profile'></textarea>
                <button type="submit" class="btn btn-primary">添加</button>
            </div>
        </div>
    </form>
</div>
</template>

<script>
import Alert from './Alert.vue'
export default {
  name:'edit',
  components:{
        Alert
    },
  data(){
    return{
    	id:this.$route.params.id,
    	cust:{},
    	alert:''
    }
  },
  methods:{
  	fetch() {
            this.$http.get("https://wd8704874238afnnlu.wilddogio.com/posts/" + this.id + ".json").then(res => {
                console.log(res.body)
                this.cust = res.body
            })
        },
    updateCust(e){
            if (!this.cust.name || !this.cust.phone || !this.cust.email) {
                this.alert='请填写相应内容！！！'
            }else{
                let updateCust = {
            name:this.cust.name,
            phone:this.cust.phone,
            email:this.cust.email,
            education:this.cust.education,
            graduationschool:this.cust.graduationschool,
            profession:this.cust.profession,
            profile:this.cust.profile
                }
                this.$http.put("https://wd8704874238afnnlu.wilddogio.com/posts/"+this.id+".json",updateCust).then(res=>{
                // console.log(res)
                this.$router.push({path:'/',query:{alert:"用户信息更新成功！"}})
                })
                e.preventDefault();
            }           
             e.preventDefault();
        }
  },
  created(){
  	console.log(this.id)
  	this.fetch()
  }
}
</script>

<style scoped>

</style>