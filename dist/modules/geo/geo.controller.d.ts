import { GeoService } from './geo.service';
import { CityDto, DistrictDto } from './dto/geo.dto';
export declare class GeoController {
    private readonly geoService;
    constructor(geoService: GeoService);
    getCities(): CityDto[];
    getDistricts(cityId: number): DistrictDto[];
}
