import Cookies from 'js-cookie';
function checkAuth() {
    var token = Cookies.get('token')
    return token;
  }
export default checkAuth