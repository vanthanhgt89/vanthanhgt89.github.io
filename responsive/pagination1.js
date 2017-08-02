
var number;
var current = 0;

// cat array
var splitArray = function(arr,size){
  var arr2 = arr.slice();
  var array = [];
  while(arr2.length > 0){
    array.push(arr2.splice(0,size))
  }
  return array;
};

// print array image
function printImage(arr) {
  $('#gallery').html('');
  for(var i = 0; i < arr.length ; i ++){
    var html = '<div class="gallery--item">' +
               '<img src="'+ arr[i].url +'">' +
                '<span class="title">'+ arr[i].name+ arr[i].code+'</span>'+
                '<span class="title">'+ arr[i].price+'</span>'+
              '</div>'
    $('#gallery').append(html);
  }
}

// print page number
function print(n){
  $('#page').append('<span class="glyphicon glyphicon-chevron-left prev"></span>');

  // for(var i = 1; i <= n;i ++){
  //   $('#page').append('<span class="number">' + i + '</span>');
  // }
  $('#page').append('<span class="glyphicon glyphicon-chevron-right next"></span>');
}

// choose number img in page
$('#choose').click(function () {
  number = Number($('#getImg').val());
  $('#gallery').html('');
  $('#page').html('');
  var newData = splitArray(image,number).slice();
  printImage(newData[0]);
  print(newData.length);
  // convert(number);

  $('.number').each(function (i) {

    $(this).click(function () {
      $('.number').removeClass('active');
      current = i;
      $(this).addClass('active');
      printImage(newData[i]);
    })
  });

  $('.next').click(function () {
    $('.number').removeClass('active');
    if(current >= newData.length - 1){
      current = 0;
      printImage(newData[current])
     $($('.number')[current]).addClass('active');
    }else{
      printImage(newData[current++]);
      $($('.number')[current]).addClass('active');
    }
  });

  $('.prev').click(function () {
    $('.number').removeClass('active');
    if(current <= 0){
      current = 2;
      printImage(newData[current]);
      $($('.number')[current]).addClass('active');
    }else{
      printImage(newData[current--]);
      $($('.number')[current]).addClass('active');
    }
  });
})

