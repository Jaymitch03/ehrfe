import { IsDateString, IsOptional, IsString } from 'class-validator';

export class CreateAppointmentDto {
  @IsString()
  organizationId!: string;

  @IsOptional()
  @IsString()
  facilityId?: string;

  @IsString()
  patientId!: string;

  @IsOptional()
  @IsString()
  clinicianId?: string;

  @IsDateString()
  scheduledStart!: string;

  @IsDateString()
  scheduledEnd!: string;
}
