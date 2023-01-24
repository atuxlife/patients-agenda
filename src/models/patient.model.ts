import {
  Table,
  Column,
  Model,
  DataType,
  Unique,
  IsEmail,
  AllowNull,
  PrimaryKey,
  AutoIncrement,
} from 'sequelize-typescript';

@Table({
  tableName: 'patients',
  timestamps: false,
})
export class Patient extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column({
    type: DataType.INTEGER,
    field: 'patient_id',
  })
  patientId: number;

  @AllowNull(false)
  @Column({
    type: DataType.STRING(20),
    field: 'document_id',
    validate: {
      isNumeric: true,
    },
  })
  documentId: string;

  @AllowNull(false)
  @Column({
    type: DataType.STRING(255),
  })
  firstname: string;

  @AllowNull(false)
  @Column({
    type: DataType.STRING(255),
  })
  lastname: string;

  @AllowNull(false)
  @IsEmail
  @Unique
  @Column({
    type: DataType.STRING(255),
    unique: true,
  })
  email: string;

  @AllowNull(false)
  @Column({
    type: DataType.STRING(20),
    validate: {
      isNumeric: true,
    },
  })
  phone: string;
}
