export function auth() {
  return fetch('http://localhost:3000/user')
    .then(res => {
      if (!res.ok) {
        throw Error(res.statusText);
      }
      return res.json();
     })
    .then(json => console.log('get back json', json))
    .catch(err => console.log(err));
  /*  
  $.ajax({
    url: '/user',
    type: 'GET',
    contentType: 'application/json',
    success: function success(data) {
      console.log('Success getting logged in user', data);
      //if uid then check if current uid === logged in uid
      //if null reroute to login
      return true;
    },
    error: function error(data) {
      console.error('fail', data);
      return false;
    }
  });*/
}