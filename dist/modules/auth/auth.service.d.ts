import type { RegisterDto } from './dto/register.dto';
import type { RegisterResponseDto } from './dto/register-response.dto';
export declare class AuthService {
    private readonly logger;
    register(dto: RegisterDto): RegisterResponseDto;
}
