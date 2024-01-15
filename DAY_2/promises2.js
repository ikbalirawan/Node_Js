var tugas = false

    function runningTask(nameTask, success,time){
            return new Promise((resolve, reject) => {
            setTimeout(() => {
                if(success) {
                    resolve(`Tugas ${nameTask} Selesai`)
                }else{
                    reject(`Tugas ${nameTask} Belum Selesai`)
                }
            }, time)
        });
    }

runningTask('A', true, 2000)
    .then((result) => {
        console.log(result)
    })
    .catch((error) => {
        console.log(error)
    });

runningTask('B', false, 3000)
    .then((result) => {
        console.log(result)
    })
    .catch((error) => {
        console.log(error)
    });

runningTask('C', false, 4000)
    .then((result) => {
        console.log(result)
    })
    .catch((error) => {
        console.log(error)
    });

runningTask('D', true, 5000)
    .then((result) => {
        console.log(result)
    })
    .catch((error) => {
        console.log(error)
    });