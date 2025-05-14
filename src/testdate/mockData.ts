import { faker } from '@faker-js/faker';

type Customer = {
  id: number
  name: string
  email: string
  phone: string
  createdAt: string
}

export const mockCustomers: Customer[] = Array.from({ length: 10 }, (_, i) => ({
  id: i + 1,
  name: faker.person.fullName(),
  email: faker.internet.email(),
  phone: faker.phone.number({ style: 'national' }),
  createdAt: faker.date.past().toISOString().split('T')[0],
}))
