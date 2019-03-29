$(function(){
  $('#addtag-btn').click(function(e){
    let tag = $('#addtag').val()
    if(tag == '' || tag == null) return false
    let newTag = `<div class="alert alert-info alert-dismissible pull-left" role="alert">
    <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
    <strong>${tag}</strong>
  </div>`
    $('.taglist').append(newTag)
    $('#addtag').val('')
    e = window.event || event
    e.preventDefault()
  })
})