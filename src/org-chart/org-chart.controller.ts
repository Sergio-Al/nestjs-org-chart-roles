import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OrgChartService } from './org-chart.service';
import { CreateOrgChartDto } from './dto/create-org-chart.dto';
import { UpdateOrgChartDto } from './dto/update-org-chart.dto';

@Controller('org-chart')
export class OrgChartController {
  constructor(private readonly orgChartService: OrgChartService) {}

  @Post()
  create(@Body() createOrgChartDto: CreateOrgChartDto) {
    return this.orgChartService.create(createOrgChartDto);
  }

  @Get()
  findAll() {
    return this.orgChartService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.orgChartService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOrgChartDto: UpdateOrgChartDto) {
    return this.orgChartService.update(+id, updateOrgChartDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.orgChartService.remove(+id);
  }
}
