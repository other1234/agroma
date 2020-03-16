   $(document).ready(function () {

       $(function () {
           $('.countdown').countdown('2060/10/10', function (event) {
               $(this).html(event.strftime('<div class="countdown__item countdown__item_hour">%H</div>' + '<div class="countdown__item countdown__item_minute">%M</div>' + '<div class="countdown__item countdown__item_second">%S</div>'));
           });
       })



       $(function () {

           $("[data-toggle=scroll]").on('click', function () {
               var elementClick = $(this).attr("href")
               var destination = $(elementClick).offset().top;
               jQuery("html:not(:animated),body:not(:animated)").animate({
                   scrollTop: destination
               }, 2000);
               return false;
           });

       })

       $(document).ready(function () {

           // Timer Init
           var storageCountdownReset = "countdownResetVariPostl",
               storageCountdownTime = "countdownTimeVariPostl",
               countdownResetTimeVal = 5,
               nowDateTime = new Date().getTime(),
               countdownReset = localStorage.getItem(storageCountdownReset);
           if (countdownReset == null) {
               localStorage.setItem(storageCountdownReset, nowDateTime)
           } else {
               if (nowDateTime - countdownReset > countdownResetTimeVal * 60 * 1000) {
                   var countdownTime = (new Date).getTime() + 24e4;
                   localStorage.setItem(storageCountdownTime, countdownTime);
                   localStorage.setItem(storageCountdownReset, nowDateTime);
               }
           }

           if (localStorage.getItem(storageCountdownTime)) {
               var countdownTime = localStorage.getItem(storageCountdownTime);
           } else {
               countdownTime = (new Date).getTime() + 24e4;
           }
           $('.countdown').countdown(countdownTime, function (event) {
               $(this).html(event.strftime('%H:%M:%S'));
               var $this = $(this).html(event.strftime('' +
                   '<div class="countdown__item countdown__hour"><div class="countdown__block"> %H </div><div class="countdown__cap">Часов</div></div><div class="countdown__item countdown__minute"><div class="countdown__block">%M</div><div class="countdown__cap">Минут</div></div><div class="countdown__item countdown__second"><div class="countdown__block">%S</div><div class="countdown__cap">Секунд</div></div>'
               ));
           }).on('update.countdown', function (e) {
               countdownTime = e.finalDate.getTime();
               localStorage.setItem(storageCountdownTime, countdownTime);
           }).on('finish.countdown', function (e) {
               $('.countdown').countdown('stop');
           });

       });

       var numberEl = document.getElementById('count');
       var timer = setInterval(function () {
           numberEl.innerHTML -= 1;
           if (numberEl.innerHTML <= 3) {
               clearInterval(timer);
           }
       }, 5000)

   });
