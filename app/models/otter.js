import { Model } from 'lux-framework';

class Otter extends Model {
  static belongsTo = {
    habitat: {
      inverse: 'otters'
    }
  };

  static validates = {
    name: v => /^[\w'-]{2,32}(( [\w'-]{1,32})? [\w'-]{2,32})?$/.test(v) && v.length < 255,
    age: v => Number.isInteger(v) && v >= 0 && v < 100
  };
}

export default Otter;
