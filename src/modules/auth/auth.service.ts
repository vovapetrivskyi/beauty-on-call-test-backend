import { Injectable, Logger, ConflictException } from '@nestjs/common';
import type { RegisterDto } from './dto/register.dto';
import type { RegisterResponseDto } from './dto/register-response.dto';

// ─── Mock "база даних" зареєстрованих телефонів ───────────────────────────────
// TODO: замінити на реальний репозиторій (TypeORM / Prisma)
const registeredPhones = new Set<string>();

@Injectable()
export class AuthService {
  private readonly logger = new Logger(AuthService.name);

  register(dto: RegisterDto): RegisterResponseDto {
    const { name, phone, cityId, districtId, role } = dto;

    // Перевірка на дублікат номера (mock-логіка)
    if (registeredPhones.has(phone)) {
      throw new ConflictException(
        'Користувач з таким номером телефону вже існує',
      );
    }

    // Зберігаємо телефон (mock — в пам'яті)
    registeredPhones.add(phone);

    // Генерація mock userId
    const userId = `usr_${Date.now().toString(36)}_${Math.random()
      .toString(36)
      .slice(2, 6)}`;

    this.logger.log(
      `Новий користувач: name=${name}, phone=+380${phone}, ` +
        `city=${cityId}, district=${districtId}, role=${role}, id=${userId}`,
    );

    return {
      success: true,
      message: 'Реєстрацію успішно завершено',
      userId,
    };
  }
}