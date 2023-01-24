import { ApiProperty } from '@nestjs/swagger';

export class UserDto {
  @ApiProperty({ example: 1 })
  id: number;

  @ApiProperty({ example: 'user1' })
  name: string;

  @ApiProperty({ example: 'user1@example.com' })
  email: string;

  @ApiProperty({ example: 'password' })
  password: string;
}
