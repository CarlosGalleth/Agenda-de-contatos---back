import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import { ContactsRepository } from './repositories/contact.repository';

@Injectable()
export class ContactsService {
  constructor(private contactRepository: ContactsRepository) {}
  async create(createContactDto: CreateContactDto, userId: string) {
    const contact = await this.contactRepository.create(
      createContactDto,
      userId,
    );
    return contact;
  }

  async findAll() {
    return this.contactRepository.findAll();
  }

  async findOne(id: string) {
    const contact = await this.contactRepository.findOne(id);
    if (!contact) {
      throw new NotFoundException('contact not found,');
    }
    return contact;
  }

  async update(id: string, updateContactDto: UpdateContactDto) {
    const contact = await this.contactRepository.findOne(id);

    if (!contact) {
      throw new NotFoundException('contact not found');
    }

    return await this.contactRepository.update(id, updateContactDto);
  }

  async remove(id: string) {
    const contact = await this.contactRepository.findOne(id);
    if (!contact) {
      throw new NotFoundException('contact not found.');
    }
    return await this.contactRepository.delete(id);
  }
}
