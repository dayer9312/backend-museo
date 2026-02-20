import { Test, TestingModule } from '@nestjs/testing';
import { EstadisticaVisitaService } from './estadistica-visita.service';

describe('EstadisticaVisitaService', () => {
  let service: EstadisticaVisitaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EstadisticaVisitaService],
    }).compile();

    service = module.get<EstadisticaVisitaService>(EstadisticaVisitaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
