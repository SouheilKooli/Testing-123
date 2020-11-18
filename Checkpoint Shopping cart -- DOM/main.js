$('.minus-btn').on('click', function(e) {
  e.preventDefault();
  var $this = $(this);
  var $input = $this.closest('div').find('input');
  var value = parseInt($input.val());

  if (value > 1) {
    value = value - 1;
  } else {
    value = 0;
  }

  $input.val(value);

});

$('.plus-btn').on('click', function(e) {
  e.preventDefault();
  var $this = $(this);
  var $input = $this.closest('div').find('input');
  var value = parseInt($input.val());

  if (value < 100) {
    value = value + 1;
  } else {
    value =100;
  }

  $input.val(value);
});

$('.like-btn').on('click', function() {
  $(this).toggleClass('is-active');
});


function totalPrice() {
  // Get the product price
  let productPrice = document.getElementsByClassName('total-price');
  // Get the product quantity
  let productQuantity = document.getElementsByClassName('quantity');
  // Initilize the sum
  let sum = 0;
  for (let i = 0; i < productPrice.length; i++) {
    sum += productPrice[i].innerText * productQuantity[i].innerText;
  }
  document.getElementById('prix-total').innerText = sum;
}