"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DistrictDto = exports.CityDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class CityDto {
    id;
    name;
}
exports.CityDto = CityDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: 'ID міста' }),
    __metadata("design:type", Number)
], CityDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Київ', description: 'Назва міста' }),
    __metadata("design:type", String)
], CityDto.prototype, "name", void 0);
class DistrictDto {
    id;
    name;
}
exports.DistrictDto = DistrictDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: 'ID району' }),
    __metadata("design:type", Number)
], DistrictDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Оболонський', description: 'Назва району' }),
    __metadata("design:type", String)
], DistrictDto.prototype, "name", void 0);
//# sourceMappingURL=geo.dto.js.map