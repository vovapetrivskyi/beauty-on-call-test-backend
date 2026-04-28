import type { CityDto, DistrictDto } from './dto/geo.dto';
export declare class GeoService {
    getCities(): CityDto[];
    getDistricts(cityId: number): DistrictDto[];
}
