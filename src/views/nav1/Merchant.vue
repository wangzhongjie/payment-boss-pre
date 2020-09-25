<template>
	<section>


		<!--列表-->
		<el-table :data="users" highlight-current-row v-loading="loading" style="width: 100%;">
			<el-table-column type="selection" width="55">
			</el-table-column>
			<el-table-column type="index" width="60">
			</el-table-column>
			<el-table-column prop="owner" label="owner" width="120" sortable>
			</el-table-column>
			<el-table-column prop="key" label="key" width="100" :formatter="formatSex" sortable>
			</el-table-column>
			<el-table-column prop="type" label="类型" width="100" sortable>
			</el-table-column>
			<el-table-column prop="value" label="值" width="120" sortable>
			</el-table-column>
			<el-table-column prop="descr" label="描述" min-width="180" sortable>
			</el-table-column>

		</el-table>


	</section>
</template>

<script>
    import { getMerchantList } from '../../api/api';
    //import NProgress from 'nprogress'
    export default {
        data() {
            return {
                filters: {
                    name: ''
                },
                loading: false,
                users: [
                ]
            }
        },
        methods: {
            //性别显示转换
            formatSex: function (row, column) {
                return row.sex == 1 ? '男' : row.sex == 0 ? '女' : '未知';
            },
            //获取用户列表
            getUser: function () {
                let para = {
                    name: this.filters.name
                };
                this.loading = true;
                //NProgress.start();
                getMerchantList(para).then((res) => {
                    this.users = res.data;
                    console.log("res data users:"+res.data);
                    this.loading = false;
                    //NProgress.done();
                });
            }
        },
        mounted() {
            this.getUser();
        }
    };

</script>

<style scoped>

</style>