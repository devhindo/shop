if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready);
} else {
    ready();
}

function ready() {
    var removeCartButtons = document.getElementsByClassName('btn-remove');
    for (var i = 0; i < removeCartButtons.length; i++) {
        var button = removeCartButtons[i];
        button.addEventListener('click', removeCartItem);
    }
    var quantityInputs = document.getElementsByClassName('cart-quantity');
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i];
        input.addEventListener('change', quantityChanged);
    }
    var addToCartButtons = document.getElementsByClassName('item-btn');
    for (var i = 0; i < addToCartButtons.length; i++) {
        var addToCartButton = addToCartButtons[i];
        addToCartButton.addEventListener('click',addToCartClicked)
    }
        
}

function removeCartItem (event) {
        var buttonClicked = event.target;
        console.log(buttonClicked.parentElement.parentElement);
        buttonClicked.parentElement.parentElement.remove();

        updateCartTotal();
}

function quantityChanged (event) {
var input = event.target;
if (isNaN(input.value) || input.value <= 0) {
    input.value = 1;
}
updateCartTotal();
}

function addToCartClicked (event) {
    var addToCartButton = event.target;
    var shopItem = addToCartButton.parentElement.parentElement;
    var title = shopItem.getElementsByClassName('cart-title')[0].innerText;
    var price = shopItem.getElementsByClassName('cart-price')[0].innerText;
    var imageSrc = shopItem.getElementsByClassName('cart-img')[0].src;
    addItemToCard(title, price, imageSrc )
}

function addItemToCard (title, price, imageSrc) {
    var cartRow = document.createElement('div');
    cartRow.innerText = title;
    var cartItems = document.getElementsByClassName('carts')[0];
    cartItems.append(cartRow);
}

function updateCartTotal() {
    var total = 0;
    var carts = document.getElementsByClassName('carts')[0];
    var cartCards = carts.getElementsByClassName('cart-card');
    for (var i = 0; i < cartCards.length; i++) {
        var cartCard = cartCards[i];
        var priceElement = cartCard.getElementsByClassName('cart-price')[0];
        var quantityElement = cartCard.getElementsByClassName('cart-quantity')[0];
        var price = parseFloat(priceElement.innerText.replace('C$', ''));
        var quantity = quantityElement.value;
        total = total + (price * quantity);
    }
    total = Math.round(total *100) /100;
    document.getElementsByClassName('cartTotal')[0].innerText = '$' + total;
}



function openNav() {
    document.getElementById("mySidebar").style.width = "350px";
    document.getElementById("main").style.marginRight = "350px";
}
  
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginRight= "0";
  }


  var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

function goBack() {
    window.history.back();
  }