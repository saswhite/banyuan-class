# 题目

1. ```js
   var val = 'c';
   var str = 'Value is' + (val === 'c') ? 'a':'b';
   console.log(str);
   ```

   结果是什么，为什么？

   ```js
   结果是'a'，因为加号的优先级比条件运算符高。
   ```
   
   
   
2. 一个物体从1000米高的地方落下，每次弹起的高度是前一次高度的0.6倍，问多少次之后，高度小于1米。

   ```js
   var h=1000;
       var i=0;
       while(h > 1){
           h*=0.6;
           i++;
       }
       console.log(i);
   ```

   

3. 物品a 2元，b 5元，c 15元，请问刚好花完100元有多少种情况？

   ```js
   var a = 2;
       var b = 5;
       var c = 15;
       var count = 0;
       for(var i = 0 ; i <= 50;i++){
           for(var j = 0 ; j <= 20 ;j++){
               for(var k = 0 ; k < 7;k++){
                   if((a*i+b*j+c*k)==100){
                       count++;
                   }
               }
           }
       }
       console.log(count);
   ```

   

4. 求s=a+aa+aaa+aaaa+aaaaa ( 一共5个数字 )的值，其中a为一个数字，如 s = 1 + 11 + 111 + 1111 + 11111 （5个数字）

   ```js
    var a = Number(prompt("请输入一个数："));
    var sum = a + (10*a+a) + (100*a+10*a+a) + (1000*a+100*a+10*a+a) + (10000*a+1000*a+100*a+10*a+a);
    alert(sum);	
   ```

5. 孩子吃糖，第一天你给孩子买了一些糖，孩子每天吃糖的一半多一个，到了第10天的时候，发现只剩下一个糖了，问当初第一天买了多少糖？

   ```js
   var a = 1;
       var n = 10;
       while(n > 0){
           n--;
           a=(a+1)*2;
       }
       console.log(a);
   ```

   

6. 最近抖音有对折纸挑战，在不考虑难度的情况下，一张普通的0.0001米厚度的纸，多少次对折后，可以达到最高峰珠穆拉玛峰的高度8848米？

   ```js
   var h = 0.0001;
       var i = 0;
       while(h <= 8848){
           h *= 2;
           i++;
       }
       console.log(i);
   ```

   

7. 

   - 输入一个数字，首先判断是否为质数

   - 如果不是质数，将其分解质因数 如：24 = 2 * 2 * 2 * 3，将分解出的质数打印出来。

     ```js
     		var flag = true;
         var c = []; 
         var a = Number(prompt("请输入一个大于1的正整数："));
     		while(a <= 1){
           a = Number(prompt("请重新输入\n请输入一个大于1的正整数："));
     		}
         function decomposition(num) {
            for(var j = 2;j <= num;j++){
                while(num%j==0){
                    num/=j;
                    c.push(j);
                }
            }
         }
         for (var i = 2; i < a ;i++){
             if(a % i == 0){
                 flag = false;
                 break;
             }
         }
         if(flag == false) {
             console.log(a+"不是质数");
             decomposition(a);
             console.log(a + "=" + c.join('*'));
             
         }
         else
         {
             console.log("这是一个质数");
         }
     ```

     

