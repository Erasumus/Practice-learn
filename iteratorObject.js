const salary = {
    john : 1000,
    box: 500,
    dev: 1500
};


/* salary[Symbol.iterator] = function() {
    return{
        current: this.box,
        last: this.dev,
        next(){
            if(this.current < this.last){
                this.current +=500;
                return {done: false, value: this.current};
            }else{
                return {done:true};
            }
        }
    };
}; */


salary[Symbol.iterator] = function() {
    return{
        current: 0,
        last: 2,
        next(){
            if(this.current < this.last){
                this.current++;
                return {done: false, value: salary[this.current]};
            }else{
                return {done:true};
            }
        }
    };
};

for(let res of salary){
    console.log(res);
}

