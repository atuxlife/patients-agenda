import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class LoginUserDto {
  @IsNotEmpty({ message: 'Email is required' })
  @IsEmail()
  @ApiProperty({ example: 'example@email.com' })
  email: string;

  @IsNotEmpty({ message: 'Password is required' })
  @IsString()
  @ApiProperty({ example: 'P4ssw0rd123' })
  password: string;
}
