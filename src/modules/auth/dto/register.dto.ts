import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsInt,
  IsEnum,
  Matches,
  MinLength,
  MaxLength,
  Min,
} from 'class-validator';
import { Type } from 'class-transformer';

export type Role = 'master' | 'client';

export class RegisterDto {
  @ApiProperty({
    example: 'Іван Петренко',
    description: "Повне ім'я користувача",
    minLength: 2,
    maxLength: 100,
  })
  @IsString({ message: "Ім'я має бути рядком" })
  @MinLength(2, { message: "Ім'я занадто коротке (мінімум 2 символи)" })
  @MaxLength(100, { message: "Ім'я занадто довге (максимум 100 символів)" })
  name: string;

  @ApiProperty({
    example: '0991234567',
    description: 'Номер телефону без +380 (9-10 цифр)',
  })
  @Matches(/^\d{9,10}$/, {
    message: 'Телефон має містити 9-10 цифр без +380',
  })
  phone: string;

  @ApiProperty({ example: 1, description: 'ID міста' })
  @Type(() => Number)
  @IsInt({ message: 'cityId має бути числом' })
  @Min(1)
  cityId: number;

  @ApiProperty({ example: 5, description: 'ID району' })
  @Type(() => Number)
  @IsInt({ message: 'districtId має бути числом' })
  @Min(1)
  districtId: number;

  @ApiProperty({
    example: 'master',
    enum: ['master', 'client'],
    description: 'Роль користувача',
  })
  @IsEnum(['master', 'client'], {
    message: 'Роль має бути master або client',
  })
  role: Role;
}