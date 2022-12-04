// feedback
const feedbackBtn = document.querySelector('.feedback-btn');
function scrollDirectionFunc(e){
    if(this.oldScroll <= this.scrollY){
        feedbackBtn.style.display = "none";
    }
    if(this.oldScroll > this.scrollY){
        feedbackBtn.style.display = "flex";
    }
    this.oldScroll = this.scrollY;
}
window.addEventListener('scroll',function(){
if (window.pageYOffset > 200){
    window.onscroll = scrollDirectionFunc;
    feedbackBtn.style.display = "none";
}
});
//Thanks
const submitFeedBackBtn = document.getElementById('feedbacksubmit');
const modalBody = document.querySelector('.body-of-modal');
const modalFooter = document.getElementById("feedback-footer");
submitFeedBackBtn.addEventListener('click',function(){
modalBody.innerHTML = `<div class="d-flex justify-content-center align-items-center" style="flex-direction:column">
    <div class="smile-icon">
      <i class="bi bi-emoji-smile"></i>
    </div>
    <div class="thanks">
      <h3>Thanks for giving your valuable feedback</h3>
    </div>
    <a href=""> <div class="modal-footer" id="feedback-footer">
          <button class="btn btn-successt" id="feedbacksubmit" style="background-color: #ffffff;
          color: #080710;
          width:fit-content;
          font-size: 17px;
          font-weight: 600;
          border-radius: 5px;
          padding:5px 20px;
          cursor: pointer;">Go to Home</button>
        </div></a>
  </div>`;
  modalFooter.style.display='none';

});

// notification

    const notificationBtn = document.querySelectorAll('.notify');
    const notification = document.querySelector('.notification-container');
    const closeNotificationBtn = document.querySelector('.notification header button');

    notificationBtn.forEach(function(btn){
        btn.addEventListener('click',function(){
        notification.classList.toggle("hide");
        console.log(notification.classList);
    });
    })

    closeNotificationBtn.addEventListener('click',function(){
        notification.classList.toggle("hide");
    });
//technofeed

  var swiper = new Swiper(".slide-content", {
  slidesPerView: 3,
  spaceBetween: 25,
  loop: true,
  centerSlide: 'true',
  fade: 'true',
  grabCursor: 'true',
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints:{
      0: {
          slidesPerView: 1,
      },
      520: {
          slidesPerView: 2,
      },
      950: {
          slidesPerView: 3,
      },
  },
});
// about

        const fadingImages = document.querySelectorAll('.img-fader-container img');
        let nthNumber = 0;
        setInterval(function () {
          nthNumber++;
          if(nthNumber == fadingImages.length){
            nthNumber = -1;
          }
          else{
          fadingImages.forEach(function(img){
            img.classList.remove("active");
        });
          fadingImages[nthNumber].classList.add('active');
      }
        }, 3000);
  
