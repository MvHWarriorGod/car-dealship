import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import { v4 as uuid } from 'uuid';
import { CreateCarDto, UpdateCarDto } from './dto';

@Injectable()
export class CarsService {
  private cars: Car[] = [
    // {
    //   id: uuid(),
    //   brand: 'Toyota',
    //   model: 'Corolla',
    // },
  ];

  findAll() {
    return this.cars;
  }

  findOneByID(id: string) {
    const car = this.cars.find((ele) => ele.id === id);
    if (!car) throw new NotFoundException(`Car with id '${id}' not found `);
    return car;
  }

  create(createCarDto: CreateCarDto) {
    const newCar: Car = {
      id: uuid(),
      ...createCarDto,
    };
    this.cars.push(newCar);
    return newCar;
  }

  updateCar(id: string, updatecarDto: UpdateCarDto) {
    let carDB = this.findOneByID(id);

    if (updatecarDto.id && updatecarDto.id !== id)
      throw new BadRequestException('Car id is not valid inside body');

    this.cars = this.cars.map((car) => {
      if (car.id === id) {
        carDB = { ...carDB, ...updatecarDto, id };
        return carDB;
      }
      return car;
    });
    return carDB;
  }

  deleteCar(id: string) {
    this.findOneByID(id);

    this.cars = this.cars.filter((car) => car.id !== id);
  }

  fillCarsWithSeedData(cars: Car[]) {
    this.cars = cars;
  }
}
