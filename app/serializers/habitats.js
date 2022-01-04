import { Serializer } from 'lux-framework';

class HabitatsSerializer extends Serializer {
  attributes = [
    'name',
    'address',
    'city',
    'state',
    'zip',
    'htype'
  ];

  hasMany = [
    'otters'
  ];
}

export default HabitatsSerializer;
