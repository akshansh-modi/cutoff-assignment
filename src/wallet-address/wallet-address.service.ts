// src/wallet-address/wallet-address.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { WalletAddress } from './wallet-address.entity';

@Injectable()
export class WalletAddressService {
  constructor(
    @InjectRepository(WalletAddress)
    private walletAddressRepository: Repository<WalletAddress>,
  ) {}

  findAll(): Promise<WalletAddress[]> {
    return this.walletAddressRepository.find();
  }

  findOne(id: number): Promise<WalletAddress> {
    return this.walletAddressRepository.findOneBy({ id });
  }

  create(walletAddress: WalletAddress): Promise<WalletAddress> {
    return this.walletAddressRepository.save(walletAddress);
  }

  async update(id: number, walletAddress: WalletAddress): Promise<void> {
    await this.walletAddressRepository.update(id, walletAddress);
  }

  async remove(id: number): Promise<void> {
    await this.walletAddressRepository.delete(id);
  }
}
