import { v4 as uuid } from 'uuid';

export default [
  {
    id: uuid(),
    address: {
      country: 'USA',
      state: 'Utah',
      city: 'Salt Lake City',
      street: '368 Lamberts Branch Road'
    },
    avatarUrl: '/static/images/avatars/avatar_10.png',
    createdAt: 1522702800000,
    email: 'merrile.burgett@devias.io',
    name: 'Merrile Burgett',
    phone: '801-301-7894'
  }
];
