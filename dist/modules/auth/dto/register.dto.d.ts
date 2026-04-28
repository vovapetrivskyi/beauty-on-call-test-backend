export type Role = 'master' | 'client';
export declare class RegisterDto {
    name: string;
    phone: string;
    cityId: number;
    districtId: number;
    role: Role;
}
