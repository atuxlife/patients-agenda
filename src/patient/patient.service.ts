import {
  Injectable,
  HttpException,
  HttpStatus,
  HttpCode,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Patient } from '../models/patient.model';
import { CreatePatientDto } from './dto/create-patient.dto';
import { validate } from 'class-validator';
import { plainToClass } from 'class-transformer';

@Injectable()
export class PatientService {
  constructor(@InjectModel(Patient) private patientModel: typeof Patient) {}

  @HttpCode(HttpStatus.OK)
  async create(createPatientDto: any): Promise<Patient> {
    createPatientDto = plainToClass(CreatePatientDto, createPatientDto);
    // Validación de los campos
    const errors = await validate(createPatientDto);
    if (errors.length > 0) {
      throw new HttpException(errors, HttpStatus.BAD_REQUEST);
    }
    // Validar que el paciente no exista previamente
    const patientExist = await this.patientModel.findOne({
      where: {
        document_id: createPatientDto.documentId.toString(),
        email: createPatientDto.email,
      },
      attributes: ['patient_id', 'document_id', 'email'],
    });

    if (patientExist) {
      throw new HttpException(
        'Paciente ya existe con ese documento o correo electrónico',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
    // Crear paciente
    const patient = await this.patientModel.create(createPatientDto);
    return patient;
  }
}
