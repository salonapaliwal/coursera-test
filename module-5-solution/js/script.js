var x="inside gloabal";
console.log("global:message="+x);

var a=function()
{
    var x="inside a";
    console.log("a:message="+x);
        function b()
        {
            console.log("b:message="+x);
        }
        b();
}

a();