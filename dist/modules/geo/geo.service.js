"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GeoService = void 0;
const common_1 = require("@nestjs/common");
const CITIES = [
    { id: 1, name: 'Київ' },
    { id: 2, name: 'Харків' },
    { id: 3, name: 'Одеса' },
    { id: 4, name: 'Дніпро' },
    { id: 5, name: 'Запоріжжя' },
    { id: 6, name: 'Львів' },
];
const DISTRICTS = {
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
let GeoService = class GeoService {
    getCities() {
        return CITIES;
    }
    getDistricts(cityId) {
        const city = CITIES.find((c) => c.id === cityId);
        if (!city) {
            throw new common_1.NotFoundException(`Місто з id=${cityId} не знайдено`);
        }
        return DISTRICTS[cityId] ?? [];
    }
};
exports.GeoService = GeoService;
exports.GeoService = GeoService = __decorate([
    (0, common_1.Injectable)()
], GeoService);
//# sourceMappingURL=geo.service.js.map