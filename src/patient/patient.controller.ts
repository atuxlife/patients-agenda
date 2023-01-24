import { Controller, Post, Body } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBody, ApiResponse } from '@nestjs/swagger';
import { PatientService } from './patient.service';
import { CreatePatientDto } from './dto/create-patient.dto';

@ApiTags('patients')
@Controller('patient')
export class PatientController {
  constructor(private patientService: PatientService) {}

  @ApiOperation({ summary: 'Register a new patient' })
  @ApiBody({ type: CreatePatientDto })
  @ApiResponse({
    status: 201,
    type: CreatePatientDto,
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
    description: 'Patient not created',
    content: {
      'application/json': {
        example: {
          error: 'Paciente ya existe',
          message: 'Paciente ya existe con ese documento o correo electrónico',
          statusCode: 500,
        },
      },
    },
  })
  @Post()
  async create(@Body() createPatientDto: CreatePatientDto) {
    return await this.patientService.create(createPatientDto);
  }
}
