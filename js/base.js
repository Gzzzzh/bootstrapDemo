$(function(){
  $('[data-toggle="tooltip"]').tooltip()

  let productNameStyle = {
    "background":"#101010",
    "color":"white"
  }
  let reProductNameStyle = {
    "background":"#fff",
    "color":"#555"
  }
  $('.product-name > li > a').click(function(){
    $('.product-name > li > a').css(reProductNameStyle)
    $(this).css(productNameStyle)
  })
})