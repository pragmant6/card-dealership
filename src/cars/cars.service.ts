/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class CarsService {

  private cars = [

    {
      id: 1,
      brand: 'Toyota',
      model: 'Corolla',
      year: 2020,
    },
    {
      id: 2,
      brand: 'Honda',
      model: 'Civic',
      year: 2019,
    },
    {
      id: 3,
      brand: 'Ford',
      model: 'Mustang',
      year: 2021,
    },
  ];

  public getAllCars() {
    return this.cars;
  }

  public getCarById(id: number) {
    const car = this.cars.find(car => car.id === id);
    if (!car) {
      throw new NotFoundException(`Car with id ${id} not found`);
    }
    return car;
  }

  public createCar(car: { brand: string; model: string; year: number }) {
    const newCar = {
      id: this.cars.length + 1,
      ...car,
    };
    this.cars.push(newCar);
    return newCar;
  }

  public updateCar(id: number, car: { brand: string; model: string; year: number }) {
    const carIndex = this.cars.findIndex(car => car.id === id);
    if (carIndex === -1) {
      throw new NotFoundException(`Car with id ${id} not found`);
    }
    this.cars[carIndex] = { ...this.cars[carIndex], ...car };
    return this.cars[carIndex];
  }

  public deleteCar(id: number) {
    const carIndex = this.cars.findIndex(car => car.id === id);
    if (carIndex === -1) {
      throw new NotFoundException(`Car with id ${id} not found`);
    }
    const deletedCar = this.cars[carIndex];
    this.cars.splice(carIndex, 1);
    return deletedCar;
  }

}
