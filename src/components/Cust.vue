<template>
    <div class="cust container">
        <Alert v-if='alert' :message='alert'></Alert>
        <h1 class="page-header">用户管理系统</h1>
        <input type="text" class="form-control" placeholder="搜索" v-model="filterInput">
        <br>
        <table class="table table-striped">
            <thead>
                <tr>
                    <th>姓名</th>
                    <th>电话</th>
                    <th>邮箱</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="cust in filterBy(custs, filterInput)">
                    <td>{{cust.name}}</td>
                    <td>{{cust.phone}}</td>
                    <td>{{cust.email}}</td>
                    <td>
                        <router-link class='btn btn-default' :to="'/cust/'+cust.id">详细</router-link>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
import Alert from './Alert.vue'
export default {
    name: 'cust',
    data() {
        return {
            custs: [],
            alert: '',
            filterInput: ''
        }
    },
    methods: {
        fetch() {
            this.$http.get('https://wd8704874238afnnlu.wilddogio.com/posts.json').then(res => {
                // console.log(res.body)
                return res.json()
            }).then(res =>{
                const custArray=[]
                for(var key in res){
                    res[key].id = key                
                    custArray.push(res[key])
                }
                this.custs = custArray
            })
        },
        filterBy(custs, filterInput) {
            return custs.filter(cust => {
                return cust.name.match(filterInput);
            })
        }
    },
    created() {
        if (this.$route.query.alert) {
            this.alert = this.$route.query.alert
        }
        this.fetch()
    },
    components: {
        Alert
    }
}

</script>
<style scoped>


</style>
