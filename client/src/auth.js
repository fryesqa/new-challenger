export function auth() {
  $.ajax({
    url: '/user',
    type: 'GET',
    contentType: 'application/json',
    success: function success(data) {
      console.log('Success checking user', data);
      return data;
    },
    error: function error(data) {
      console.error('fail', data);
      return data;
    }
  });
}