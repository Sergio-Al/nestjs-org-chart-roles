import { Module } from '@nestjs/common';
import { OrgChartService } from './org-chart.service';
import { OrgChartController } from './org-chart.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ContactDataSchema, OrgChartSchema } from './entities/org-chart.entity';

@Module({
  controllers: [OrgChartController],
  providers: [OrgChartService],
  imports: [
    MongooseModule.forFeature([
      { name: 'ContactData', schema: ContactDataSchema },
      { name: 'CreateOrgChart', schema: OrgChartSchema },
    ]),
  ],
})
export class OrgChartModule {}
