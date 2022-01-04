export default function routes() {
  this.resource('otters');
  this.resource('habitats');


  this.resource('users', {only: ['login']}, function () {
    this.collection(function () {
      this.post('login');
    });
  });

  this.namespace('admin', function () {
    this.resource('users');
  });
}
