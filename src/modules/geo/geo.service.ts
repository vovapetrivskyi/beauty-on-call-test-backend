import { Injectable, NotFoundException } from '@nestjs/common';
import type { CityDto, DistrictDto } from './dto/geo.dto';

// ─── Mock дані (замінити на реальну БД) ──────────────────────────────────────
const CITIES: CityDto[] = [
  { id: 1, name: 'Київ' },
  { id: 2, name: 'Харків' },
  { id: 3, name: 'Одеса' },
  { id: 4, name: 'Дніпро' },
  { id: 5, name: 'Запоріжжя' },
  { id: 6, name: 'Львів' },
];

const DISTRICTS: Record<number, DistrictDto[]> = {
  1: [
    { id: 1, name: 'Голосіївський' },
    { id: 2, name: 'Дарницький' },
    { id: 3, name: 'Деснянський' },
    { id: 4, name: 'Дніпровський' },
    { id: 5, name: 'Оболонський' },
    { id: 6, name: 'Печерський' },
    { id: 7, name: 'Подільський' },
    { id: 8, name: 'Святошинський' },
    { id: 9, name: 'Солом\'янський' },
    { id: 10, name: 'Шевченківський' },
  ],
  2: [
    { id: 11, name: 'Київський' },
    { id: 12, name: 'Холодногірський' },
    { id: 13, name: 'Немишлянський' },
    { id: 14, name: 'Московський' },
    { id: 15, name: 'Новобаварський' },
    { id: 16, name: 'Основ\'янський' },
    { id: 17, name: 'Слобідський' },
    { id: 18, name: 'Шевченківський' },
    { id: 19, name: 'Індустріальний' },
  ],
  3: [
    { id: 20, name: 'Приморський' },
    { id: 21, name: 'Малиновський' },
    { id: 22, name: 'Суворовський' },
    { id: 23, name: 'Хаджибейський' },
    { id: 24, name: 'Київський' },
  ],
  4: [
    { id: 25, name: 'Амур-Нижньодніпровський' },
    { id: 26, name: 'Індустріальний' },
    { id: 27, name: 'Новокодацький' },
    { id: 28, name: 'Самарський' },
    { id: 29, name: 'Соборний' },
    { id: 30, name: 'Центральний' },
  ],
  5: [
    { id: 31, name: 'Олександрівський' },
    { id: 32, name: 'Комунарський' },
    { id: 33, name: 'Хортицький' },
    { id: 34, name: 'Шевченківський' },
  ],
  6: [
    { id: 35, name: 'Галицький' },
    { id: 36, name: 'Залізничний' },
    { id: 37, name: 'Личаківський' },
    { id: 38, name: 'Сихівський' },
    { id: 39, name: 'Франківський' },
    { id: 40, name: 'Шевченківський' },
  ],
};

@Injectable()
export class GeoService {
  getCities(): CityDto[] {
    return CITIES;
  }

  getDistricts(cityId: number): DistrictDto[] {
    const city = CITIES.find((c) => c.id === cityId);
    if (!city) {
      throw new NotFoundException(`Місто з id=${cityId} не знайдено`);
    }
    return DISTRICTS[cityId] ?? [];
  }
}