import {
  MinLength,
  MaxLength,
  IsEmail,
  IsNotEmpty,
  IsNumber,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreatePatientDto {
  @IsNotEmpty({ message: 'DocumentId is required' })
  @IsNumber({}, { message: 'DocumentId must be a number' })
  @ApiProperty({ example: '7215574' })
  documentId: number;

  @IsNotEmpty({ message: 'Firstname is required' })
  @MinLength(3, { message: 'Firstname must have at least 3 characters' })
  @MaxLength(255, { message: 'Firstname must have at most 255 characters' })
  @ApiProperty({ example: 'John' })
  firstname: string;

  @IsNotEmpty({ message: 'Lastname is required' })
  @MinLength(3, { message: 'Lastname must have at least 3 characters' })
  @MaxLength(255, { message: 'Lastname must have at most 255 characters' })
  @ApiProperty({ example: 'Doe' })
  lastname: string;

  @IsNotEmpty({ message: 'Email is required' })
  @IsEmail({}, { message: 'Email must be a valid email address' })
  @ApiProperty({ example: 'example@email.com' })
  email: string;

  @IsNotEmpty({ message: 'Phone is required' })
  @IsNumber({}, { message: 'Phone must be a number' })
  @ApiProperty({ example: '3156604785' })
  phone: number;
}
