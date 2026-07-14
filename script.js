function checkBirthday() {
    
    let bdayInput = document.getElementById("birthday").value;
    
    if (!bdayInput) {
        document.getElementById("result").innerText = "please input the date!";
        return;
    }

    
    let userBirthDate = new Date(bdayInput);
    let birthMonth = userBirthDate.getMonth();
    let birthDay = userBirthDate.getDate();

    
    let today = new Date();
    let currentMonth = today.getMonth();
    let currentDay = today.getDate();

    
    if (birthMonth === currentMonth && birthDay === currentDay) {
        document.getElementById("result").innerText = "🎂 HAPPY BIRTHDAY 🎉 Have a great day!";
        document.getElementById("result").style.color = "green";
    } else if (birthDay > currentDay && birthMonth> currentMonth){
            var redate=birthDay-currentDay;
            var remonth=birthMonth-currentMonth;
            if (birthMonth===4 ){
                var redate1=31-birthDay;
                var redate=redate1+birthDay;
                var remonth=birthMonth-1;
            }else if(birthMonth===6){
                var redate1=31-birthDay;
                var redate=redate1+birthDay;
                var remonth=birthMonth-1;

            }else if(birthMonth===9){
                var redate1=31-birthDay;
                var redate=redate1+birthDay;
                var remonth=birthMonth-1;
            }else if( birthMonth===11){
                var redate1=31-birthDay;
                var redate=redate1+birthDay;
                var remonth=birthMonth-1;
            }else if(birthMonth===2){
                var redate1=28-birthDay;
                var redate=redate1+birthDay;
                var remonth=birthMonth-1;
            }else if(birthMonth===2 && birthDay===29){
                var redate1=29-birthDay;
                var redate=redate1+birthDay;
                var remonth=birthMonth-1;
            }else{
                var redate1=30-birthDay;
                var redate=redate1+birthDay;
                var remonth=birthMonth-1;
            }
 
        
    }else if(birthMonth<currentMonth && birthDay>currentDay){
        remonth=birthMonth+(12-currentMonth);
        redate=birthDay-currentDay;

    }
        
            
        

        document.getElementById("result").innerText = "Today is not your birthday! 😊. There are "+redate+" days and "+remonth+" months are remaining for your birthday.I'm waiting for it.";
        document.getElementById("result").style.color = "blue";
    }
