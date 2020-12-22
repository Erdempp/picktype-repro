import { ApiProperty, PickType } from '@nestjs/swagger';
import { prop } from '@typegoose/typegoose';
import { Exclude } from 'class-transformer';
import { IsAlphanumeric, IsEmail } from 'class-validator';

export class User {
  constructor(props: Partial<User>) {
    Object.assign(this, props);
  }

  @prop({ required: true, unique: true, index: true, lowercase: true })
  @ApiProperty()
  @IsEmail()
  email: string;

  @prop({ required: true, unique: false })
  @ApiProperty()
  @IsAlphanumeric()
  displayName: string;

  @prop({ required: true })
  @Exclude()
  @IsAlphanumeric()
  password: string;
}

export class UserUpdateDTO extends PickType(User, [
  'email',
  'displayName',
] as const) {}
