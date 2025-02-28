const valueDisplays = document.querySelectorAll('.num');
const interval = 10000;

valueDisplays.forEach((valueDisplay) => {
        let startValue = 0;
        let endValue = parseInt(valueDisplay.getAttribute("data-val"));
        let duration = Math.floor(interval / endValue);
        let counter = setInterval(function(){
            startValue += 1;
            valueDisplay.textContent = startValue;
            if(startValue == endValue){
                clearInterval(counter);
            }

        }, duration);
    }
)
const profile = {name:"abdishakur", age:23, street:{
    road:"posta",
    location:"lilac"
}}

console.log(profile);

const{name,age} = profile;
console.log(profile);

