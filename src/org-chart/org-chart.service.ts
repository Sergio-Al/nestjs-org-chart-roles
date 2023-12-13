import { Injectable } from '@nestjs/common';
import { CreateOrgChartDto } from './dto/create-org-chart.dto';
import { UpdateOrgChartDto } from './dto/update-org-chart.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { OrgChart } from './entities/org-chart.entity';

@Injectable()
export class OrgChartService {
  constructor(
    @InjectModel('CreateOrgChart')
    private readonly createOrgChartModel: Model<OrgChart>,
  ) {}
  async create(createOrgChartDto: CreateOrgChartDto) {
    try {
      const orgChart = await this.createOrgChartModel.create(createOrgChartDto);

      return orgChart;
    } catch (error) {
      console.log(error);
    }

    const createdOrgChart = new this.createOrgChartModel(createOrgChartDto);
    return createdOrgChart.save();
  }

  findAll() {
    return `This action returns all orgChart`;
  }

  findOne(id: number) {
    return `This action returns a #${id} orgChart`;
  }

  update(id: number, updateOrgChartDto: UpdateOrgChartDto) {
    return `This action updates a #${id} orgChart`;
  }

  remove(id: number) {
    return `This action removes a #${id} orgChart`;
  }
}
