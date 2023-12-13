import { Test, TestingModule } from '@nestjs/testing';
import { OrgChartController } from './org-chart.controller';
import { OrgChartService } from './org-chart.service';

describe('OrgChartController', () => {
  let controller: OrgChartController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrgChartController],
      providers: [OrgChartService],
    }).compile();

    controller = module.get<OrgChartController>(OrgChartController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
