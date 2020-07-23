# 题目

使用函数的方式进行解答。

1. 编写函数，完成取余运算，使其结果和%的结果一致。

   ```js
   function remainder(x,y){
       return x-parseInt(x/y)*y;
   }
   var a =  Number(prompt("请输入第一个数："))
   var b =  Number(prompt("请输入第而个数："))
   console.log(remainder(a,b));
   ```
   

   

2. 检查字符串是否含有大写字母，小写字母以及_,$,如果有，则返回时缺少了哪些字符。

   ```js
   var string = 'dskjshskjsvkvbskv';
   var flagA = flaga = flag_ = flag$ = false;
   function stringJudge(str){
       for(var i = 0;i < str.length;i++){
           var newStr = str.charAt(i);
           if(newStr >= 'A' && newStr <= 'Z'){
               flagA = true;
           }
           if( newStr >= 'a' && newStr <= 'z'){
               flaga = true;
           }
           if (newStr == '_'){
               flag_ = true;
           }
           if(newStr == '$'){
               flag$ = true;
           }
       }
       if (flagA == false){
           console.log("你的字符串里面没有大写字母。");
       }
       if (flaga == false){
           console.log("你的字符串里面没有小写字母。");
       }
       if (flag_ == false){
           console.log("你的字符串里面没有‘_’。");
       }
       if (flag$ == false){
           console.log("你的字符串里面没有'$'。");
       }
   }
   stringJudge(string);
   
   ```

   

3. 模拟一个场景，isen老师批改你们github作业的场景。假设第一次提交就通过的概率是1/8，第二次提交通过的概率为85%，第三次都通过了。问，可爱的isen老师可能会批改多少次你们作业。

   ```js
   function test() {
       var sum = 0;
       var num = 0;
       var countFirst = countSecond = 0;
       for(var i = 0;i < 16;i++){
           num = Math.random();
           if( num <= (1/8)){
               countFirst++;
           }
       }
       var second = 16 - countFirst;
       if(second == 0 ){
           sum = 16;
       }
       else{
           for(var j = 0;j < second;j++){
               num = Math.random();
               if (num <= 0.85){
                   countSecond++;
               }
           }
           var third = second - countSecond;
           sum =  16 + countSecond + third;
       }
       return sum;
   }
   var sum = test();
   console.log(sum);
   ```

   
