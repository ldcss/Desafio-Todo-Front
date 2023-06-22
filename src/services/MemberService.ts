import { AxiosResponse } from 'axios';
import { Member } from '../types/Member';
import api from './api';

export class MemberService {
  static async getMembers(): Promise<AxiosResponse<Member>> {
    const response = await api.get('/member');
    return response;
  }
}
