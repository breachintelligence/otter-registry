import { Serializer } from 'lux-framework';

class OttersSerializer extends Serializer {
  attributes = [
    'name',
    'age'
  ];

  hasOne = [
    'habitat'
  ];
}

export default OttersSerializer;
