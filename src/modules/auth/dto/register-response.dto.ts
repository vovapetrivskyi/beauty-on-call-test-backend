import { ApiProperty } from '@nestjs/swagger';

export class RegisterResponseDto {
  @ApiProperty({ example: true })
  success: boolean;

  @ApiProperty({ example: 'Реєстрацію успішно завершено' })
  message: string;

  @ApiProperty({
    example: 'usr_a1b2c3d4',
    description: 'Згенерований ID користувача (mock)',
    required: false,
  })
  userId?: string;
}