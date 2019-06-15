$(document).ready(function () {

  $('#newBurgerBtn').on('click', event => {
    event.preventDefault()
    let data = {
      name: $('#nameInput').val().trim()
    }
    $.post('/api/burgers', data)
      .done(() => {
        location.reload()
      })
      .fail(error => {
        throw error
      })
  })

  $(document.body).on('click', '.devour-btn', function () {
    let burgerId = $(this).data('id')
    console.log(this)
    let data = {
      devoured: true
    }
    $.ajax({
        url: `/api/burgers/${burgerId}`,
        method: 'PUT',
        data: data
      })
      .done(() => {
        location.reload()
      })
      .fail(error => {
        throw error
      })

  })


})