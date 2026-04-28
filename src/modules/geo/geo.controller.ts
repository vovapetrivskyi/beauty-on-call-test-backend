import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiOkResponse,
  ApiNotFoundResponse,
  ApiParam,
} from '@nestjs/swagger';
import { GeoService } from './geo.service';
import { CityDto, DistrictDto } from './dto/geo.dto';

@ApiTags('Geo')
@Controller('geo')
export class GeoController {
  constructor(private readonly geoService: GeoService) {}

  @Get('cities')
  @ApiOperation({ summary: 'Список усіх міст' })
  @ApiOkResponse({ type: [CityDto] })
  getCities(): CityDto[] {
    return this.geoService.getCities();
  }

  @Get('cities/:cityId/districts')
  @ApiOperation({ summary: 'Райони за ID міста' })
  @ApiParam({ name: 'cityId', type: Number, example: 1 })
  @ApiOkResponse({ type: [DistrictDto] })
  @ApiNotFoundResponse({ description: 'Місто не знайдено' })
  getDistricts(
    @Param('cityId', ParseIntPipe) cityId: number,
  ): DistrictDto[] {
    return this.geoService.getDistricts(cityId);
  }
}