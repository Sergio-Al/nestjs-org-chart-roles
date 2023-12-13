import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class ContactData {
  @Prop({ required: true })
  contactId: string;

  @Prop({ type: [String], required: true })
  roles: string[];
}

@Schema()
export class OrgChart extends Document {
  @Prop({ required: true })
  orgId: string;

  @Prop({ type: [ContactData], required: true })
  contacts: ContactData[];
}

export const ContactDataSchema = SchemaFactory.createForClass(ContactData);
export const OrgChartSchema = SchemaFactory.createForClass(OrgChart);
