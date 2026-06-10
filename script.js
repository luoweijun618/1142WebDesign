window.onload = function() {
  window.onscroll = function() {scrollFunction()};
  showSlides();
};

function scrollFunction() {
  var navbar = document.getElementById("navbar");
  var slideshow = document.getElementById("slideshow");
  var slideshowHeight = slideshow.offsetHeight;
  var navfix = document.getElementById("navfix")

  if (window.pageYOffset > slideshowHeight) {
    navbar.style.position = "fixed";
    navbar.style.top = "0";
    navbar.style.width = "100zh";
    navfix.style.height = "120px"
  } else {
    navbar.style.position = "relative";
    navfix.style.height = "0px"
  }
}

let slideIndex = 0;
function showSlides() {
  let slides = document.getElementsByClassName("slide");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  slides[slideIndex-1].style.display = "block";  
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

document.addEventListener("DOMContentLoaded", function() {
  const npBoxes = document.querySelectorAll('.npBox');
  npBoxes.forEach(box => {
    const img = box.querySelector('img');
    img.onload = function() {
      if (img.naturalWidth > img.naturalHeight) {
        box.classList.add('horizontal');
      } else {
        box.classList.add('vertical');
      }
    };
  });
});
window.addEventListener('resize', function() {
  document.querySelectorAll('.npBox.horizontal').forEach(box => {
    if (box.clientWidth < 400) {
      box.style.gridColumnEnd = `span 1`;
    } else {
      box.style.gridColumnEnd = `span 2`;
    }
  });
});

// 創建花瓣容器並加入 body
const petalContainer = document.createElement('div');
petalContainer.id = 'petals-container';
document.body.appendChild(petalContainer);

function createPetal() {
  const petal = document.createElement('div');
  petal.classList.add('petal');
  
  // 隨機生成花瓣的大小、起始位置和下落時間
  const size = Math.random() * 10 + 12; // 12px 到 22px
  petal.style.width = `${size}px`;
  petal.style.height = `${size}px`;
  petal.style.left = `${Math.random() * 100}vw`;
  
  const duration = Math.random() * 5 + 6; // 6秒 到 11秒
  petal.style.animationDuration = `${duration}s`;
  
  // 稍微調整透明度讓層次更豐富
  petal.style.opacity = Math.random() * 0.4 + 0.4;
  
  petalContainer.appendChild(petal);
  
  // 動畫跑完後自動刪除元素，避免網頁變卡
  setTimeout(() => {
    petal.remove();
  }, duration * 1000);
}

// 網頁載入時先產生一些花瓣
for (let i = 0; i < 20; i++) {
  setTimeout(createPetal, Math.random() * 3000);
}

// 持續定時產生新花瓣
setInterval(createPetal, 500);