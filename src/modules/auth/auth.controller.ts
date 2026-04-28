import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiCreatedResponse,
  ApiBadRequestResponse,
  ApiConflictResponse,
  ApiBody,
} from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { RegisterResponseDto } from './dto/register-response.dto';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Реєстрація нового користувача' })
  @ApiBody({ type: RegisterDto })
  @ApiCreatedResponse({
    type: RegisterResponseDto,
    description: 'Користувача успішно зареєстровано',
  })
  @ApiBadRequestResponse({ description: 'Помилки валідації полів' })
  @ApiConflictResponse({ description: 'Номер телефону вже зареєстровано' })
  register(@Body() dto: RegisterDto): RegisterResponseDto {
    return this.authService.register(dto);
  }
}