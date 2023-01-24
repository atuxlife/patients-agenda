import {
  Injectable,
  HttpException,
  HttpStatus,
  HttpCode,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from '../models/user.model';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import * as argon2 from 'argon2';
import { sign } from 'jsonwebtoken';
import { validate } from 'class-validator';

@Injectable()
export class UserService {
  constructor(@InjectModel(User) private userModel: typeof User) {}

  @HttpCode(HttpStatus.OK)
  async findAll(): Promise<User[]> {
    return await User.findAll();
  }

  @HttpCode(HttpStatus.OK)
  async create(createUserDto: CreateUserDto): Promise<User> {
    const { name, email, password } = createUserDto;
    // Validación de los campos
    const errors = await validate(createUserDto);
    if (errors.length > 0) {
      throw new HttpException(errors, HttpStatus.BAD_REQUEST);
    }
    // Validate user exists
    const user = await this.userModel.findOne({ where: { email } });
    if (user) {
      throw new HttpException('User already exists', HttpStatus.BAD_REQUEST);
    }
    const hashedPassword = await argon2.hash(password);
    const newUser = { name, email, password: hashedPassword };
    return this.userModel.create(newUser);
  }

  @HttpCode(HttpStatus.OK)
  async login(loginUserDto: LoginUserDto) {
    const { email, password } = loginUserDto;
    const user = await this.userModel.findOne({ where: { email } });
    if (!user)
      throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);
    const isValid = await argon2.verify(user.password, password);
    if (!isValid)
      throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);
    const token = sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRATION_TIME,
    });
    const userWithoutPassword = { ...user.toJSON(), password: undefined };
    return { user: userWithoutPassword, token };
  }
}
