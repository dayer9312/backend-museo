import { Module } from '@nestjs/common';
import { ObjetoService } from './objeto.service';
import { ObjetoController } from './objeto.controller';
import { PrismaService } from '../prisma.service'; 

@Module({
  controllers: [ObjetoController],
  providers: [ObjetoService, PrismaService], 
})
export class ObjetoModule {}
