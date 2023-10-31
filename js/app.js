document.addEventListener("DOMContentLoaded", function () {
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;
  if (screenWidth > 768 && screenHeight > 1080) {
    new fullpage("#fullpage", {
      //options here
      autoScrolling: true,
      scrollHorizontally: true,
    });
  }
  if (document.querySelector(".element-animation") !== null) {
    function onEntry(entry) {
      entry.forEach((change) => {
        if (change.isIntersecting) {
          change.target.classList.add("_active");
        }
      });
    }
    let options = { threshold: [0.5] };
    let observer = new IntersectionObserver(onEntry, options);
    let elements = document.querySelectorAll(".element-animation");
    for (let elm of elements) {
      observer.observe(elm);
    }
  }

  if (null !== document.querySelector(".openPopup")) {
    // Получаем все кнопки для открытия Popup
    const openButtons = document.querySelectorAll(".openPopup");
    console.log(openButtons);
    // Добавляем обработчик события для каждой кнопки
    openButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const popupId = button.getAttribute("data-popup");
        const popup = document.getElementById(popupId);
        popup.style.display = "block";

        // Заблокировать скролл фона
        document.body.classList.add("popup-open");
      });
    });

    // Получаем все элементы для закрытия Popup
    const closeButtons = document.querySelectorAll(".close1");

    // Добавляем обработчик события для каждой кнопки закрытия
    closeButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const popupId = button.getAttribute("data-close");
        const popup = document.getElementById(popupId);
        popup.style.display = "none";

        // Разблокировать скролл фона
        document.body.classList.remove("popup-open");
      });
    });

    // Закрыть Popup при клике вне него
    window.addEventListener("click", (event) => {
      if (event.target.classList.contains("popup")) {
        event.target.style.display = "none";

        // Разблокировать скролл фона
        document.body.classList.remove("popup-open");
      }
    });
  }
  if (document.querySelector(".g-recaptcha") !== null) {
    $(function () {
      var reCaptchaWidth = 302;
      var containerWidth = $(".c-form__classes > div").width();
      if (reCaptchaWidth > containerWidth) {
        var reCaptchaScale = containerWidth / reCaptchaWidth;
        $(".g-recaptcha").css({
          transform: "scale(" + reCaptchaScale + ")",
          "transform-origin": "left top",
        });
      }
    });
  }
});
