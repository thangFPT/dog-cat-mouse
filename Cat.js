
var Mouse= require('./mouse');

function Cat(){
this.stamach=[];
}
Cat.prototype.eat=function(animal){
	if(animal instanceof Mouse){
		this.stomach.push(mouse);
	}else{
		throw new Error('Cat can only eat mouse');
	}

};
module.exports=Cat;