import { Test, TestingModule } from '@nestjs/testing';
import { MapaInternoController } from './mapa-interno.controller';
import { MapaInternoService } from './mapa-interno.service';

describe('MapaInternoController', () => {
  let controller: MapaInternoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MapaInternoController],
      providers: [MapaInternoService],
    }).compile();

    controller = module.get<MapaInternoController>(MapaInternoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
