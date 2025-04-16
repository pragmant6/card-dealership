/* eslint-disable prettier/prettier */

/* eslint-disable @typescript-eslint/no-unsafe-call */;


import { IsString } from 'class-validator';

export class CreateCarDto {

  @IsString()
  readonly brand: string;

  @IsString()
  readonly model: string;

}