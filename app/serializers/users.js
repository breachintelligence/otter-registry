import { Serializer } from 'lux-framework';

class UsersSerializer extends Serializer {
  attributes = [
    'name',
    'email',
    'password'
  ];
}

export default UsersSerializer;
