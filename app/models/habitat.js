import { Model } from 'lux-framework';

class Habitat extends Model {
  static hasMany = {
    otters: {
      inverse: 'habitat'
    }
  };

  static validates = {
    name: v => /^[A-Za-z0-9 _.,!&"'/$-]{2,}$/.test(v) && v.length < 255,
    address: v => /^[A-Za-z0-9 .#&',$]{2,}$/.test(v) && v.length < 255,
    city: v => /^[A-Za-z0-9 .,$]{2,}$/.test(v) && v.length < 255,
    state: v => /^[A-Za-z0-9 .$]{2,}$/.test(v) && v.length < 255,
    zip: v => /^[0-9]{5}(-[0-9]{4})?$/.test(v) && v.length < 255,
    htype: v => /^zoo|sanctuary|colony$/.test(v),
  }
}

export default Habitat;
