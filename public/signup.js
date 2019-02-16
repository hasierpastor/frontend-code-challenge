const BASEURL = `http://localhost:3000`;
//can also use serialize function
$(document).ready(() => {
  $('#submit-button').on('click', () => {
    event.preventDefault();
    let firstName = $('#firstName').val();
    let lastName = $('#lastName').val();
    let email = $('#email').val();
    $.post(`${BASEURL}/users`, { firstName, lastName, email }, resp => {
      console.log(resp);
    });
  });
});
