import { IsEmail, IsString, IsISO8601, IsNotEmpty, IsEnum, MinLength } from 'class-validator'

import { E_Gender } from '../types'

export class UpdateUserDto {
  @IsEmail()
  email: string

  @IsString()
  @MinLength(1)
  nameFirst: string

  @IsString()
  @MinLength(1)
  nameLast: string

  @IsISO8601()
  birthDate: Date

  @IsNotEmpty()
  @IsEnum(E_Gender)
  gender: E_Gender
}