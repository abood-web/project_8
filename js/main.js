document.addEventListener('DOMContentLoaded', () => {
  // تجميع كل الأزرار والديفات
  const navButtons = document.querySelectorAll('.nav-btn');
  const contentSlides = document.querySelectorAll('.content-slide');

  navButtons.forEach(button => {
    button.addEventListener('click', function() {
      // 1. نجيب الهدف الخاص بالزرار اللي انداس عليه
      const targetId = this.getAttribute('data-target');

      // 2. نمسح كلاس active من كل الأزرار وكل الديفات
      navButtons.forEach(btn => btn.classList.remove('active'));
      contentSlides.forEach(slide => slide.classList.remove('active'));

      // 3. نضيف كلاس active للديف المطلوب
      const targetSlide = document.getElementById(targetId);
      if (targetSlide) {
        targetSlide.classList.add('active');
      }

      // 4. نضيف كلاس active لكل الأزرار (اللي فوق واللي تحت) اللي ليها نفس الهدف
      const targetButtons = document.querySelectorAll(`.nav-btn[data-target="${targetId}"]`);
      targetButtons.forEach(btn => btn.classList.add('active'));
    });
  });
});



// ==================







// seconde one


document.addEventListener('DOMContentLoaded', () => {
  // تجميع كل الأزرار والديفات
  const navButtons = document.querySelectorAll('.nav-btna');
  const contentSlides = document.querySelectorAll('.content-slidea');

  navButtons.forEach(button => {
    button.addEventListener('click', function() {
      // 1. نجيب الهدف الخاص بالزرار اللي انداس عليه
      const targetId = this.getAttribute('data-target');

      // 2. نمسح كلاس active من كل الأزرار وكل الديفات
      navButtons.forEach(btn => btn.classList.remove('activea'));
      contentSlides.forEach(slide => slide.classList.remove('activea'));

      // 3. نضيف كلاس active للديف المطلوب
      const targetSlide = document.getElementById(targetId);
      if (targetSlide) {
        targetSlide.classList.add('activea');
      }

      // 4. نضيف كلاس active لكل الأزرار (اللي فوق واللي تحت) اللي ليها نفس الهدف
      const targetButtons = document.querySelectorAll(`.nav-btna[data-target="${targetId}"]`);
      targetButtons.forEach(btn => btn.classList.add('activea'));
    });
  });
});



// therd one
document.addEventListener('DOMContentLoaded', () => {
  // تجميع كل الأزرار والديفات
  const navButtons = document.querySelectorAll('.nav-btnb');
  const contentSlides = document.querySelectorAll('.content-slideb');

  navButtons.forEach(button => {
    button.addEventListener('click', function() {
      // 1. نجيب الهدف الخاص بالزرار اللي انداس عليه
      const targetId = this.getAttribute('data-target');

      // 2. نمسح كلاس active من كل الأزرار وكل الديفات
      navButtons.forEach(btn => btn.classList.remove('activeb'));
      contentSlides.forEach(slide => slide.classList.remove('activeb'));

      // 3. نضيف كلاس active للديف المطلوب
      const targetSlide = document.getElementById(targetId);
      if (targetSlide) {
        targetSlide.classList.add('activeb');
      }

      // 4. نضيف كلاس active لكل الأزرار (اللي فوق واللي تحت) اللي ليها نفس الهدف
      const targetButtons = document.querySelectorAll(`.nav-btnb[data-target="${targetId}"]`);
      targetButtons.forEach(btn => btn.classList.add('activeb'));
    });
  });
});



// ratig star
// الإمساك بجميع أزرار الراديو داخل مصفوفة
document.addEventListener('DOMContentLoaded', () => {
  // 1. هنجيب كل حاويات التقييم اللي في الصفحة
  const ratingContainers = document.querySelectorAll('.custom-star-rating');

  // 2. هنمر على كل حاوية ونتعامل معاها كأنها مستقلة تماماً
  ratingContainers.forEach((container) => {
    
    // هنجيب النجوم اللي جوه "الحاوية دي بس"
    const stars = container.querySelectorAll('.star-link');
    
    // المتغير ده دلوقتي بقى خاص بالحاوية دي فقط، ومش هيأثر ع الباقي
    let currentSelectedRating = 0;

    // دالة التحديث بقت بتشتغل على نجوم الحاوية دي بس
    function updateStarDisplay(ratingIndex) {
      stars.forEach((star) => {
        const starValue = parseInt(star.getAttribute('data-value'));

        if (starValue <= ratingIndex) {
          star.innerHTML = '<i class="fa-solid fa-star"></i>';
        } else {
          star.innerHTML = '<i class="fa-regular fa-star"></i>';
        }
      });
    }

    // تفعيل التفاعلات لنجوم الحاوية الحالية
    stars.forEach((star) => {
      
      // عند الضغط
      star.addEventListener('click', (e) => {
        e.preventDefault(); 
        currentSelectedRating = parseInt(star.getAttribute('data-value'));
        updateStarDisplay(currentSelectedRating);
      });

      // عند التمرير بالماوس
      star.addEventListener('mouseenter', () => {
        const hoverValue = parseInt(star.getAttribute('data-value'));
        updateStarDisplay(hoverValue);
      });
    });

    // عند خروج الماوس من الحاوية دي، ترجع لتقييمها هي بس
    container.addEventListener('mouseleave', () => {
      updateStarDisplay(currentSelectedRating);
    });
    
  });
});

 ///////

const carousels = document.querySelectorAll('.infinite-carousel');

carousels.forEach(carousel => {
  const track = carousel.querySelector('.carousel-track');
  
  // 1. استنساخ العناصر لعمل التأثير اللانهائي
  const items = Array.from(track.children);
  const originalLength = items.length; // عدد العناصر الأصلي (8)
  
  // وضع نسخة من العناصر في النهاية
  items.forEach(item => {
    track.appendChild(item.cloneNode(true));
  });
  
  // وضع نسخة من العناصر في البداية
  const prependFragment = document.createDocumentFragment();
  items.forEach(item => {
    prependFragment.appendChild(item.cloneNode(true));
  });
  track.insertBefore(prependFragment, track.firstChild);

  // 2. متغيرات التحكم في السحب
  let isDown = false;
  let startX;
  let scrollLeft;
  let setWidth; // لحفظ عرض الـ 8 عناصر بالكامل (بالبيكسل)

  // 3. دالة تهيئة الكاروسيل وحساب المسافات
  const initCarousel = () => {
    // حساب مسافة الـ 8 عناصر الأصلية بدقة (بما في ذلك المسافات gap)
    setWidth = track.children[originalLength].offsetLeft - track.children[0].offsetLeft;
    // وضع التمرير المبدئي في المنتصف (عند العناصر الأصلية)
    track.scrollLeft = setWidth;
  };

  // ننتظر قليلاً حتى يرسم المتصفح العناصر ثم نشغل الحسابات
  setTimeout(initCarousel, 50);

  // إعادة الحساب لو المستخدم غير حجم الشاشة
  window.addEventListener('resize', initCarousel);

  // 4. أحداث السحب بالماوس (Drag)
  track.addEventListener('mousedown', (e) => {
    isDown = true;
    track.classList.add('active');
    startX = e.pageX - track.offsetLeft;
    scrollLeft = track.scrollLeft;
  });

  track.addEventListener('mouseleave', () => {
    isDown = false;
    track.classList.remove('active');
  });

  track.addEventListener('mouseup', () => {
    isDown = false;
    track.classList.remove('active');
  });

  track.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - track.offsetLeft;
    const walk = (x - startX) * 1.5; // ضربنا في 1.5 لتسريع السحب قليلاً
    track.scrollLeft = scrollLeft - walk;
  });

  // 5. خدعة التمرير اللانهائي (Infinite Loop)
  track.addEventListener('scroll', () => {
    // إذا وصل لأول الشاشة من اليسار (النسخ الأولى)
    if (track.scrollLeft <= 1) {
      track.scrollLeft += setWidth; // قفزة سرية للأمام
      if (isDown) scrollLeft += setWidth; // تحديث نقطة سحب الماوس حتى لا يتقطع السحب
    } 
    // إذا وصل لآخر الشاشة من اليمين (النسخ الأخيرة)
    else if (track.scrollLeft >= track.scrollWidth - track.clientWidth - 1) {
      track.scrollLeft -= setWidth; // قفزة سرية للخلف
      if (isDown) scrollLeft -= setWidth;
    }
  });
});






//====================
// حدد التاريخ اللي عايز تعد تنازلي ليه
const targetDate = new Date("Dec 31, 2026 23:59:59").getTime();

const updateClock = () => {
  const now = new Date().getTime();
  const difference = targetDate - now;

  if (difference > 0) {
    // حساب الأيام والساعات والدقائق والثواني
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    // ربط القيم بالـ HTML مع إضافة صفر على الشمال لو الرقم أقل من 10
    document.getElementById("days").innerText = days.toString().padStart(2, '0');
    document.getElementById("hours").innerText = hours.toString().padStart(2, '0');
    document.getElementById("minutes").innerText = minutes.toString().padStart(2, '0');
    document.getElementById("seconds").innerText = seconds.toString().padStart(2, '0');
  } else {
    // الإجراء اللي هيحصل لما الوقت يخلص
    clearInterval(clockInterval);
    console.log("انتهى الوقت!");
  }
};

// تشغيل الدالة فوراً عشان مايحصلش تأخير لثانية في البداية
updateClock();
// تحديث الساعة كل 1000 مللي ثانية (ثانية واحدة)
const clockInterval = setInterval(updateClock, 1000);



//=============



document.addEventListener('DOMContentLoaded', () => {
  const strip = document.querySelector('.custom-slider-strip');
  const items = document.querySelectorAll('.custom-slider-item');
  const nextBtn = document.querySelector('.custom-slider-next');
  const prevBtn = document.querySelector('.custom-slider-prev');
  
  let currentIndex = 0;

  function moveSlider() {
    strip.style.transform = `translateX(-${currentIndex * 100}%)`;
    
    // تحديث كلاس النشاط الفريد
    items.forEach((item, i) => {
      if (i === currentIndex) {
        item.classList.add('custom-slider-active');
      } else {
        item.classList.remove('custom-slider-active');
      }
    });
  }

  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % items.length;
    moveSlider();
  });

  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    moveSlider();
  });
});

// validation  of applay_section
