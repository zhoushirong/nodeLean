//根据对象id获取对象
function getTrueAtc(obj,attr,point){
	var trueAtc={};
	for(var i=0,len=obj.length;i<len;i++){
		if(obj[i][attr] === point){
			trueAtc = obj[i];
			break;
		}
	}
	return trueAtc;
}
module.exports = getTrueAtc;