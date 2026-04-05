import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { CreateNoteDto } from './dto';

@Injectable()
export class NotesService {
  constructor(private readonly prisma: PrismaService) {}

  findAll() {
    return this.prisma.note.findMany({
      include: { patient: true, author: true },
      orderBy: { createdAt: 'desc' }
    });
  }

  create(dto: CreateNoteDto) {
    return this.prisma.note.create({
      data: {
        organizationId: dto.organizationId,
        patientId: dto.patientId,
        authorUserId: dto.authorUserId,
        noteType: dto.noteType,
        title: dto.title,
        contentJson: dto.contentJson
      }
    });
  }
}
