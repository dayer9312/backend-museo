import { Test, TestingModule } from '@nestjs/testing';
import { MapaInternoService } from './mapa-interno.service';

describe('MapaInternoService', () => {
  let service: MapaInternoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MapaInternoService],
    }).compile();

    service = module.get<MapaInternoService>(MapaInternoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
