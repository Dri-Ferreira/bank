import { responseUser } from './models/response/response-user-repository';
import { registerUser } from './models/params/params';
import { User } from '@prisma/client';
import { UpdateUserDto } from './dto/update-user.dto';
export interface IUser {
  id?: string;
  name: string;
  email: string;
  password: string;
  cpf: string;
  doc_identity: string;
  address: string;
  cep: string;
}

export interface IUserRepository<Entity> {
  register(params: registerUser): Promise<responseUser>;
  findAll(): Promise<responseUser[]>;
  updateUser(id: string, updateUserDto: UpdateUserDto): Promise<responseUser>;
  exists(where: Partial<User> | any): Promise<boolean | Entity | any>;
}

export interface IUserService {
  register(parmas: registerUser): Promise<responseUser>;
  findAll(): Promise<responseUser[]>;
  findById(id: string): Promise<responseUser | null>;
  updateUser(id: string, updateUserDto: UpdateUserDto): Promise<responseUser>;
}
