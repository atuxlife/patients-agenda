import {
  Controller,
  Get,
  Post,
  Body,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { ApiTags, ApiResponse, ApiOperation, ApiBody } from '@nestjs/swagger';
import { validate } from 'class-validator';
import { User } from '../models/user.model';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto';

@ApiTags('users')
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  @ApiOperation({ summary: 'Get all users' })
  @ApiResponse({
    status: 200,
    description: 'Return all users',
    type: User,
    isArray: true,
  })
  async findAll(): Promise<User[]> {
    return await this.userService.findAll();
  }

  @Post('register')
  @ApiOperation({ summary: 'Register a new user' })
  @ApiBody({ type: CreateUserDto })
  @ApiResponse({
    status: 201,
    type: CreateUserDto,
    description: 'Patient created',
  })
  @ApiResponse({
    status: 400,
    description: 'Validation failed',
    content: {
      'application/json': {
        example: {
          error: 'ValidationError',
          message: 'Missing required fields',
          statusCode: 400,
        },
      },
    },
  })
  @ApiResponse({
    status: 500,
    description: 'User not created',
    content: {
      'application/json': {
        example: {
          error: 'Paciente ya existe',
          message: 'Paciente ya existe con ese correo electrónico',
          statusCode: 500,
        },
      },
    },
  })
  async create(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.userService.create(createUserDto);
  }

  @Post('login')
  @ApiOperation({ summary: 'Login user' })
  @ApiBody({ type: LoginUserDto })
  @ApiResponse({
    status: 200,
    description: 'Successful login',
  })
  @ApiResponse({
    status: 401,
    description: 'Invalid credentials',
    content: {
      'application/json': {
        example: {
          error: 'ValidationError',
          message: 'Missing required fields or wrong credentials',
          statusCode: 400,
        },
      },
    },
  })
  async login(@Body() loginDto: LoginUserDto) {
    const errors = await validate(loginDto);
    if (errors.length > 0) {
      throw new HttpException({ error: errors }, HttpStatus.BAD_REQUEST);
    }
    const user = await this.userService.login(loginDto);
    return user;
  }
}
