"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var AuthService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const registeredPhones = new Set();
let AuthService = AuthService_1 = class AuthService {
    logger = new common_1.Logger(AuthService_1.name);
    register(dto) {
        const { name, phone, cityId, districtId, role } = dto;
        if (registeredPhones.has(phone)) {
            throw new common_1.ConflictException('Користувач з таким номером телефону вже існує');
        }
        registeredPhones.add(phone);
        const userId = `usr_${Date.now().toString(36)}_${Math.random()
            .toString(36)
            .slice(2, 6)}`;
        this.logger.log(`Новий користувач: name=${name}, phone=+380${phone}, ` +
            `city=${cityId}, district=${districtId}, role=${role}, id=${userId}`);
        return {
            success: true,
            message: 'Реєстрацію успішно завершено',
            userId,
        };
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = AuthService_1 = __decorate([
    (0, common_1.Injectable)()
], AuthService);
//# sourceMappingURL=auth.service.js.map