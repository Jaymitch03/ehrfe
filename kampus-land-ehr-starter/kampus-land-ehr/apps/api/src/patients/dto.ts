import { IsDateString, IsOptional, IsString } from 'class-validator';

export class CreatePatientDto {
  @IsString()
  organizationId!: string;

  @IsOptional()
  @IsString()
  facilityId?: string;

  @IsString()
  medicalRecordNumber!: string;

  @IsString()
  firstName!: string;

  @IsString()
  lastName!: string;

  @IsOptional()
  @IsDateString()
  dateOfBirth?: string;
}
