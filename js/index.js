 
    
    $("#getQuote").on('click',function(){
        
      $.ajaxSetup({cache:false});
      $.getJSON("https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&callback=", function(data){
    $(".message").html(data[0].content + " - " + data[0].title);    
});
  });
          

$('a[data-text]').each(function(){
      $(this).attr('data-text', "This works!");
   
    });
   $.getScript('https://platform.twitter.com/widgets.js');

 /* $("#tweet").on('click',function(){

  var phrase = document.getElementById('message').innerText;
  var tweetUrl = 'https://twitter.com/share?text=' +
    encodeURIComponent(phrase) +
    '.' +
    '&url=' +
    'https://codepen.io/bv1/pen/baPyBM?editors=1010';
    
  window.open(tweetUrl);

});
*/