const id = setInterval(() => {
    nowDate = new Date();
    console.log(nowDate);
    NYDate = new Date('2018/1/1 0:00:00');
    console.log(NYDate - Date.now());
}, 100)