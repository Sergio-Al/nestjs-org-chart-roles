import { PartialType } from '@nestjs/mapped-types';
import { CreateOrgChartDto } from './create-org-chart.dto';

export class UpdateOrgChartDto extends PartialType(CreateOrgChartDto) {}
