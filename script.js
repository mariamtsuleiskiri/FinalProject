let menuButton = document.querySelector('.menu-button');
let menu = document.querySelector('.menu-socials');

menuButton.addEventListener('click', () => {
  menu.classList.toggle('show-menu');
});


let slider= document.querySelector('.slider');
            let leftArrow= document.querySelector('.arrow-left');
            let rightArrow= document.querySelector('.arrow-right');
            let sectionIndex = 0;
            rightArrow.addEventListener('click', function(){
                if (sectionIndex < 3) {
                sectionIndex = sectionIndex + 1;
                } else {
                  sectionIndex = 3;
                };
                slider.style.transform = 'translate('+(sectionIndex) * -25 + '%)';
            });
            leftArrow.addEventListener('click', function(){
                if (sectionIndex > 0) {
                sectionIndex = sectionIndex - 1;
                } else {
                  sectionIndex = 0;
                };
                slider.style.transform = 'translate('+(sectionIndex) * -25 + '%)';
            });



            function openContent(evt, number){
                let i, tabcontent, tabbutton;
                tabcontent = document.getElementsByClassName("tabcontent");
                for (i = 0; i < tabcontent.length; i++){
                    tabcontent[i].style.display = "none";
                }
                tabbutton = document.getElementsByClassName("tabbutton");
                for (i =0; i < tabbutton.length; i++){
                    tabbutton[i].className = tabbutton[i].className.replace("active", "");
                }
                document.getElementById(number).style.display = "block";
                evt.currentTarget.className += "active";
            }
            document.getElementById("defaultOpen").click();


        
            /*let myButton = document.getElementsByClassName("tabbutton");
            myButton.addEventListener("click",function(){
                myButton.style.borderBottom = "none";
                myButton.style.borderTop = "2px solid #DEE2E6";
                myButton.style.borderLeft = "2px solid #DEE2E6";
                myButton.style.borderRight = "2px solid #DEE2E6";

            });*/


