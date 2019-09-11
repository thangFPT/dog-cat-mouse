function Cat(){
this.stamach=[];
}
Cat.prototype.eat=function(mouse){
this.stomach.push(mouse);
};
module.exports=Cat;