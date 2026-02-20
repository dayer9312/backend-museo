import { Test, TestingModule } from '@nestjs/testing';
import { EstadisticaVisitaController } from './estadistica-visita.controller';
import { EstadisticaVisitaService } from './estadistica-visita.service';

describe('EstadisticaVisitaController', () => {
  let controller: EstadisticaVisitaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EstadisticaVisitaController],
      providers: [EstadisticaVisitaService],
    }).compile();

    controller = module.get<EstadisticaVisitaController>(EstadisticaVisitaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
