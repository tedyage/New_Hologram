const config = {
    database: 'hologram',
    username: 'root',
    password: 'Mxj125_MrT',
    host: '114.115.207.101',
    port:3306,
    dialect: 'mysql',
    benchmark:true,           //传输每次sql执行的时长（毫秒）到输出日志方法
    define:{
        timestamps: true,      //为每个表格默认加入createAt和updateAt字段
        paranoid: true,        //任何实体调用destroy方法时，不会执行物理删除，而时在deleteAt时间戳字段上存入运行时间戳        
    }
}

export default config;