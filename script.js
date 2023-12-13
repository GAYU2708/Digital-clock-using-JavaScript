setInterval(() =>{
    let hours   =document.getElementById("hours");
    let minutes =document.getElementById("minutes");
    let seconds =document.getElementById("seconds");
    let ampm    =document.getElementById("ampm");

    let  hrs    =document.getElementById("hrs");
    let  min    =document.getElementById("min");
    let  sec    =document.getElementById("sec");

    let dotH   =document.querySelector(".h_dot");
    let dotM   =document.querySelector(".m_dot");
    let dotS   =document.querySelector(".s_dot");

        let h  =new Date().getHours();
        let m  =new Date().getMinutes();
        let s  =new Date().getSeconds();
        let ap = h >=12 ?"PM":"AM";


        if(h>=12){
            h=h -12;
        }

        h=h < 10 ? '0'+h : h;
        m=m < 10 ? '0'+m : m;
        s=s < 10 ? '0'+s : s;
        
        hours.innerHTML   = h + '<br>Hours';
        minutes.innerHTML = m + '<br>Minutes';
        seconds.innerHTML = s + '<br>Seconds';
        ampm.innerHTML    = ap;

        hrs.style.strokeDashoffset = 440 - (440*h) /12;// 440 is a constant value of total length or distance of dashpattern
        min.style.strokeDashoffset = 440 - (440*m) /60;
        sec.style.strokeDashoffset = 440 - (440*s) /60;

        dotH.style.transform = `rotate($(h * 30)deg)`;// in a clock each hour is represented by 30 deg . 360deg/12 hours=30
        dotM.style.transform = `rotate($(m * 6)deg)`;// in a clock each min is represented by 6 deg . 360deg/60 min==6
        dotS.style.transform = `rotate($(s * 6)deg)`;// in a clock each sec is represented by 6 deg. 360 deg /60 sec==6
},1000);