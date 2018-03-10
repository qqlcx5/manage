<template>
    <div class="details container">
        <router-link to='/' class='btn btn-default'>返回主页</router-link>
        <h1 class="page-header">
        {{customer.name}}
    <span class="pull-right">
        <router-link class='btn btn-primary' :to="'/edit/'+ this.id">编辑</router-link>
        <button class="btn btn-danger" @click="delCust">删除</button>
    </span>
    </h1>
        <ul class="list-group">
            <li class="list-group-item">
                <span class="glyphicon glyphicon-phone"> 
                {{customer.phone}}
            </span>
            </li>
            <li class="list-group-item">
                <span class="glyphicon glyphicon-envelope"> 
                {{customer.email}}
            </span>
            </li>
        </ul>
        <ul class="list-group">
            <li class="list-group-item">
                <span class="glyphicon glyphicon-education"> 
                {{customer.education}}
            </span>
            </li>
            <li class="list-group-item">
                <span class="glyphicon glyphicon-education"> 
                {{customer.graduationschool}}
            </span>
            </li>
        </ul>
        <ul class="list-group">
            <li class="list-group-item">
                <span class="glyphicon glyphicon-flash
glyphicon "> 
                {{customer.profession}}
            </span>
            </li>
            <li class="list-group-item">
                <span class="glyphicon glyphicon-user"> 
                {{customer.profile}}
            </span>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name: 'CustDetails',
    data() {
        return {
            customer: {},
            id: this.$route.params.id
        }
    },
    methods: {
        fetch() {
            this.$http.get("https://wd8704874238afnnlu.wilddogio.com/posts/" + this.id + ".json").then(res => {
                console.log(res)
                this.customer = res.body
            })
        },
        delCust() {
            this.$http.delete("https://wd8704874238afnnlu.wilddogio.com/posts/" + this.id + ".json").then(res => {
                this.$router.push({ path: '/', query: { alert: '用户删除成功！' } })
            })
        }
    },
    created(){
        this.fetch()
    }
}
</script>
<style scoped>


</style>
