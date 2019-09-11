function Mouse(name){
	this.name=name;
	this.isDead= false;

}
Mouse.protype.die=function(){
	this.isDead=true;
}
module.exports=Mouse;