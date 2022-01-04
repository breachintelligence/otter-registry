export default function routes() {
  this.resource('otters');
  this.resource('habitats');

  this.resource('users', function () {
    this.collection(function () {
      this.post('login');
    });
  });
}
