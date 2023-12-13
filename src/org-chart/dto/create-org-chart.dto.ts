import { Type } from 'class-transformer';
import { IsArray, IsString, MinLength, ValidateNested } from 'class-validator';

class ContactDataDto {
  @IsString()
  @MinLength(1)
  contactId: string;

  @IsArray()
  @Type(() => String)
  roles: string[];
}

export class CreateOrgChartDto {
  @IsString()
  orgId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ContactDataDto)
  contacts: ContactDataDto[];
}
