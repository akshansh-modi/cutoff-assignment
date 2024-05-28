import { IsNotEmpty, IsString, IsInt } from 'class-validator';

export class CreateWalletAddressDto {
  @IsNotEmpty()
  @IsInt()
  userId: number;

  @IsNotEmpty()
  @IsString()
  address: string;
}
