$(document).ready(function () {
  console.log('hererere')
  $('#newBurgerBtn').on('click', event => {
    console.log('here')
    event.preventDefault()
    let data = {
      name: $('#nameInput').val().trim()
    }
    $.post('/api/burgers', data)
      .done(response => {
        console.log(response)
        location.reload()
      })
      .fail(error => {
        throw error
      })
  })
})