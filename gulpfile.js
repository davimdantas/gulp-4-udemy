const {task, src} = require('gulp');

task("task-1", function(done) {
    console.log("Task 1 is completed")
    done()
})


task("task-2", function() {
    return src("./digits.txt")
})