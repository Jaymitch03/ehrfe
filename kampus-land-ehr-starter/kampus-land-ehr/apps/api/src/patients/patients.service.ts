import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { CreatePatientDto } from './dto';

@Injectable()
export class PatientsService {
  constructor(private readonly prisma: PrismaService) {}

  findAll() {
    return this.prisma.patient.findMany({
      orderBy: [{ lastName: 'asc' }, { firstName: 'asc' }]
    });
  }

  async findOne(id: string) {
    const patient = await this.prisma.patient.findUnique({ where: { id } });
    if (!patient) throw new NotFoundException('Patient not found');
    return patient;
  }

  create(dto: CreatePatientDto) {
    return this.prisma.patient.create({
      data: {
        organizationId: dto.organizationId,
        facilityId: dto.facilityId,
        medicalRecordNumber: dto.medicalRecordNumber,
        firstName: dto.firstName,
        lastName: dto.lastName,
        dateOfBirth: dto.dateOfBirth ? new Date(dto.dateOfBirth) : null
      }
    });
  }
}
