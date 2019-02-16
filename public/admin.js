const BASEURL = `http://localhost:3000`;
$(document).ready(() => {
  $.get(`${BASEURL}/users`, resp => {
    resp.forEach(user => {
      console.log(resp);
      $('#user-list')
        .append($('<ul></ul>'))
        .append(
          $(`<li>${user.firstName}${user.lastName}</li>`).append(
            $(`<li>${user.email}</li>`)
          )
        );
    });
  });
});
