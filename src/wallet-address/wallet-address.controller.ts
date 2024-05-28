import { Controller, Get, Post, Body, Put, Param, Delete, UsePipes, ValidationPipe } from '@nestjs/common';
import { WalletAddressService } from './wallet-address.service';
import { WalletAddress } from './wallet-address.entity';
import { CreateWalletAddressDto } from './wallet-address.dto';

@Controller('wallet-address')
export class WalletAddressController {
  constructor(private readonly walletAddressService: WalletAddressService) {}

  @Get()
  findAll() {
    return this.walletAddressService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.walletAddressService.findOne(id);
  }

  @Post()
  @UsePipes(new ValidationPipe({ whitelist: true }))
  create(@Body() createWalletAddressDto: CreateWalletAddressDto) {
    const walletAddress = new WalletAddress();
    walletAddress.userId = createWalletAddressDto.userId;
    walletAddress.address = createWalletAddressDto.address;
    return this.walletAddressService.create(walletAddress);
  }

  @Put(':id')
  @UsePipes(new ValidationPipe({ whitelist: true }))
  update(@Param('id') id: number, @Body() createWalletAddressDto: CreateWalletAddressDto) {
    const walletAddress = new WalletAddress();
    walletAddress.userId = createWalletAddressDto.userId;
    walletAddress.address = createWalletAddressDto.address;
    return this.walletAddressService.update(id, walletAddress);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.walletAddressService.remove(id);
  }
}
