function riddle() {
    var a = [];
    for (var i = 0; i < 10; i++) {
        var y = function (i) {
            return function () {
                return i * i;
            };
        };
        a.push(y(i));
    }
    return a;
}

//ar a = riddle();
//var b = [];
//for(var i =0;i<a.length;i++)
//{
//	b.push(a[i]());	
//}
//	console.log(b);