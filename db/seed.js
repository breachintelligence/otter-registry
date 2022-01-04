import faker from 'faker';

import Otter from 'app/models/otter';
import Habitat from 'app/models/habitat';
import User from 'app/models/user';

const {
  name,
  company,
  address, 
} = faker;

const randomNumber = (max, min = 0) => (max > min) 
  ?Math.floor((Math.random() * (max-min)) + min)
  :Math.floor((Math.random() * (min-max)) + max)

export default async function seed(trx) {
  const habitatCount = 20;
  const otterCount = 200;
  const otterMaxCaptivityAge = 21;

  await User.transacting(trx).create({
    name: `admin`,
    email: 'admin@localhost.domain',
    password: '1234567890'
  });

  await Promise.all(
    Array(habitatCount).fill(null).map(() => (
      Habitat.transacting(trx).create({
        name: company.companyName(),
        address: address.streetAddress(true),
        city: address.city(),
        state: address.state(),
        zip: address.zipCode(),
        htype: ['zoo', 'sanctuary', 'colony'][randomNumber(2)]
      })
    ))
  );

  await Promise.all(
    Array(200).fill(null).map(() => (
      Otter.transacting(trx).create({
        name: `${name.firstName()} ${name.middleName()} ${name.lastName()}`,
        age: randomNumber(otterMaxCaptivityAge),
        habitatId: randomNumber(otterCount-1)
      })
    ))
  ).catch(e => console.error(e.message, e.stack));
}
