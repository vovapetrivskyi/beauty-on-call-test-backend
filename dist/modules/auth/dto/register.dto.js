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
exports.RegisterDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
class RegisterDto {
    name;
    phone;
    cityId;
    districtId;
    role;
}
exports.RegisterDto = RegisterDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Іван Петренко',
        description: "Повне ім'я користувача",
        minLength: 2,
        maxLength: 100,
    }),
    (0, class_validator_1.IsString)({ message: "Ім'я має бути рядком" }),
    (0, class_validator_1.MinLength)(2, { message: "Ім'я занадто коротке (мінімум 2 символи)" }),
    (0, class_validator_1.MaxLength)(100, { message: "Ім'я занадто довге (максимум 100 символів)" }),
    __metadata("design:type", String)
], RegisterDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '0991234567',
        description: 'Номер телефону без +380 (9-10 цифр)',
    }),
    (0, class_validator_1.Matches)(/^\d{9,10}$/, {
        message: 'Телефон має містити 9-10 цифр без +380',
    }),
    __metadata("design:type", String)
], RegisterDto.prototype, "phone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: 'ID міста' }),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsInt)({ message: 'cityId має бути числом' }),
    (0, class_validator_1.Min)(1),
    __metadata("design:type", Number)
], RegisterDto.prototype, "cityId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 5, description: 'ID району' }),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsInt)({ message: 'districtId має бути числом' }),
    (0, class_validator_1.Min)(1),
    __metadata("design:type", Number)
], RegisterDto.prototype, "districtId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'master',
        enum: ['master', 'client'],
        description: 'Роль користувача',
    }),
    (0, class_validator_1.IsEnum)(['master', 'client'], {
        message: 'Роль має бути master або client',
    }),
    __metadata("design:type", String)
], RegisterDto.prototype, "role", void 0);
//# sourceMappingURL=register.dto.js.map