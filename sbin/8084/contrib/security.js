var crypto = require('crypto');

module.exports = {
  Crypt: function (Pwd)
  {
      var Secret = 'G91K5 92KF8 P30D5 BY2MA';
      return crypto.createHmac('sha256', Secret).update(Pwd).digest('hex');
  }
}
