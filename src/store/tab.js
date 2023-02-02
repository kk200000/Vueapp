import Vuex from "vuex";

const tab = {
    state: {
        isCollapse:false,

        // 面包屑数据
        tabList:[
            {
                path: '/',
                name: 'home',
                label: '首页',
                icon: 's-home',
                url: 'Home/Home'
            },
        ]
    },
    getters: {
    },
    mutations: {
        changeCollapse(state) {
            state.isCollapse =  !state.isCollapse
        },
        // 更新面包屑 findIndex
        updateMenu(state,item){
            if (item.name!=='home'){
                let flag = false
                state.tabList.forEach( content =>{
                    if(content===item)
                        flag = true
                })

                if (!flag){
                    state.tabList.push(item)
                }
            }


        }
    },
    actions: {
    },
    modules: {

    }
}

export default tab