var img = ['toy/1.jpg', 'toy/2.jpg', 'toy/3.jpg', 'toy/4.jpg', 'toy/5.jpg', 'toy/6.jpg', 'toy/7.jpg', 'toy/8.jpg', 'toy/9.jpg',
  'toy/10.jpg', 'toy/11.jpg', 'toy/12.jpg', 'toy/13.jpg', 'toy/14.jpg', 'toy/15.jpg'];

var image = [
  {
    'url': 'toy/1.jpg',
    'code': 'T001',
    'price': '110.000 VND',
    'name': 'Toy baby'
  },
  {
    'url': 'toy/1.jpg',
    'code': 'T001',
    'price': '110.000 VND',
    'name': 'Toy baby'
  },
  {
    'url': 'toy/1.jpg',
    'code': 'T001',
    'price': '110.000 VND',
    'name': 'Toy baby'
  },
  {
    'url': 'toy/1.jpg',
    'code': 'T001',
    'price': '110.000 VND',
    'name': 'Toy baby'
  },
  {
    'url': 'toy/1.jpg',
    'code': 'T001',
    'price': '110.000 VND',
    'name': 'Toy baby'
  },
  {
    'url': 'toy/1.jpg',
    'code': 'T001',
    'price': '110.000 VND',
    'name': 'Toy baby'
  },
  {
    'url': 'toy/1.jpg',
    'code': 'T001',
    'price': '110.000 VND',
    'name': 'Toy baby'
  },

]
var number;
var current = 0;

// cat array
function convert(n){
  var arr = [];
  for(var i = 0; i< img.length; i += n){
    var subArr = [];
    for(var j = i; j < i+n ; j++){
      if(j< img.length){
        subArr.push(img[j]);
      }
    }
    arr.push(subArr);
  }
  return arr;
}

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
    $('#gallery').append('<img src="'+ arr[i] +'">');
  }
}

// print page number
function print(n){
  $('#page').append('<span class="glyphicon glyphicon-chevron-left prev"></span>');

  for(var i = 1; i <= n;i ++){
    $('#page').append('<span class="number">' + i + '</span>');
  }
  $('#page').append('<span class="glyphicon glyphicon-chevron-right next"></span>');
}

// choose number img in page
$('#choose').click(function () {
  number = Number($('#getImg').val());
  $('#gallery').html('');
  $('#page').html('');
  var newData = splitArray(img,number).slice();
  printImage(newData[0]);
  print(newData.length);
  // convert(number);

  $('.number').each(function (i) {
    $(this).click(function () {
      current = i;
      printImage(newData[i]);
    })
  });

  $('.next').click(function () {
    if(current >= newData.length - 1){
      current = 0;
      printImage(newData[current])
    }else{
      printImage(newData[current++]);
    }
  });

  $('.prev').click(function () {
    if(current < 0){
      current = 2;
      printImage(newData[current]);
    }else{
      printImage(newData[current--]);
    }
  });
})
