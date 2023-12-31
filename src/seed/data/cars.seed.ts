import { Car } from 'src/cars/interfaces/car.interface';
import { v4 as uuid } from 'uuid';

export const CARS_SEED: Car[] = [
  {
    id: uuid(),
    brand: 'Toyota',
    model: 'Corolla',
  },
  {
    id: uuid(),
    brand: 'Ford',
    model: 'F150',
  },
  {
    id: uuid(),
    brand: 'Tesla',
    model: 'Model S',
  },
  {
    id: uuid(),
    brand: 'BMW',
    model: '328i',
  },
];
