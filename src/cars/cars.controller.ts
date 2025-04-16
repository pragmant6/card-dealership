/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { CarsService } from './cars.service';

@Controller('cars')
export class CarsController {

  constructor(private readonly carService: CarsService) {



  }

  @Get()
  getAllCars() {
    return this.carService.getAllCars();
  }

  @Get(':id')
  getCarById(@Param('id', ParseIntPipe) id: number) {

    const car = this.carService.getCarById(id);

    return car;
  }

  @Post()
  createCar(@Body() car: { brand: string; model: string; year: number }) {
    const newCar = this.carService.createCar(car);
    return newCar;
  }

  @Patch(':id')
  updateCar(@Param('id', ParseIntPipe) id: number, @Body() car: { brand: string; model: string; year: number }) {
    const updatedCar = this.carService.updateCar(id, car);
    return updatedCar;
  }

  @Delete(':id')
  deleteCar(@Param('id', ParseIntPipe) id: number) {
    const deletedCar = this.carService.deleteCar(id);
    return deletedCar;
  }


}
