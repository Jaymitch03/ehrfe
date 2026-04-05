import { IsObject, IsOptional, IsString } from 'class-validator';

export class CreateNoteDto {
  @IsString()
  organizationId!: string;

  @IsString()
  patientId!: string;

  @IsOptional()
  @IsString()
  authorUserId?: string;

  @IsString()
  noteType!: string;

  @IsString()
  title!: string;

  @IsObject()
  contentJson!: Record<string, unknown>;
}
