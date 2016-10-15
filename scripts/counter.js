$(document).ready(function() {
  //for later use variable
  var title = $('#story_title').val();
  var t;
  $('textarea#story').bind('input propertychange', function() {
    var story = $("textarea#story").val();
    t = story;
    var arr = story.split(" ");
    $('#counter').text(arr.length + ' Words');
    if(arr.length < 750) {
      $("#counter").css("color", "red");
      $("#button").attr('disabled', 'disabled');
    } else {
      $("#counter").css("color", "green");
      $("#button").removeAttr('disabled');
    }
  });

    (function () {
      var textFile = null,
      makeTextFile = function (text) {
      var data = new Blob([text], {type: 'text/plain'});

      if (textFile !== null) {
        window.URL.revokeObjectURL(textFile);
      }

      textFile = window.URL.createObjectURL(data);

      return textFile;
    };


    var create = document.getElementById('button'),
      textbox = document.getElementById('story');

    create.addEventListener('click', function () {
      var link = document.getElementById('link');
      link.href = makeTextFile(textbox.value);
      link.style.display = 'inline-block';
    }, false);
  })();

});
