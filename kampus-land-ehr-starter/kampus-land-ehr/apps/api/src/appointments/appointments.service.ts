import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { CreateAppointmentDto } from './dto';

@Injectable()
export class AppointmentsService {
  constructor(private readonly prisma: PrismaService) {}

  findAll() {
    return this.prisma.appointment.findMany({
      include: { patient: true, clinician: true },
      orderBy: { scheduledStart: 'asc' }
    });
  }

  create(dto: CreateAppointmentDto) {
    return this.prisma.appointment.create({
      data: {
        organizationId: dto.organizationId,
        facilityId: dto.facilityId,
        patientId: dto.patientId,
        clinicianId: dto.clinicianId,
        scheduledStart: new Date(dto.scheduledStart),
        scheduledEnd: new Date(dto.scheduledEnd)
      }
    });
  }
}
