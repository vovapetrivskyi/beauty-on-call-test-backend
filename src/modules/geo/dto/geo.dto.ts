import { ApiProperty } from '@nestjs/swagger';

export class CityDto {
  @ApiProperty({ example: 1, description: 'ID міста' })
  id: number;

  @ApiProperty({ example: 'Київ', description: 'Назва міста' })
  name: string;
}

export class DistrictDto {
  @ApiProperty({ example: 1, description: 'ID району' })
  id: number;

  @ApiProperty({ example: 'Оболонський', description: 'Назва району' })
  name: string;
}