import mitt from "mitt";


const emitter = mitt()

emitter.on('data1', (data) => {
    console.log(data)
})
emitter.on('data2', (data) => {
    console.log(data)
})

setInterval(() => {
    // 触发监听器
    emitter.emit('data1', '数据1')
    emitter.emit('data2', '数据2')
},2000)

setTimeout(() => {
    // 移除监听器
    emitter.off('test1')
},3000)

setTimeout(() => {
    // 移除所有监听器
    emitter.all.clear()
    console.log('all clear')
},6000)

export default emitter


