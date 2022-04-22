import { Injectable } from '@angular/core';
import { BaseService } from 'ngx-az-core';
import { ChangeEmailRequest } from '../models/change-email.request';
import { ChangeLoginRequest } from '../models/change-login.request';
import { ChangePasswordRequest } from '../models/change-password.request';
import { ChangePhoneRequest } from '../models/change-phone.request';
import { ChangeUsernameRequest } from '../models/change-username.request';
import { Profile } from '../models/profile.interface';

@Injectable({
  providedIn: 'root',
})
export class PersonalService {
  /**
   *
   * @param $baseService
   */
  constructor(private $baseService: BaseService) {}

  getProfile() {
    return this.$baseService.get<Profile>('cabinet/user/edit');
  }

  changeEmail(request: ChangeEmailRequest) {
    return this.$baseService.post<boolean>(
      'cabinet/change-email-step-1',
      request
    );
  }

  changePhone(request: ChangePhoneRequest) {
    return this.$baseService.post<boolean>(
      'cabinet/change-phone-step-1',
      request
    );
  }

  changeLogin(request: ChangeLoginRequest) {
    return this.$baseService.post<boolean>('cabinet/change-login', request);
  }

  changePassword(request: ChangePasswordRequest) {
    return this.$baseService.post<boolean>('cabinet/change-password', request);
  }

  changeUserFullname(request: ChangeUsernameRequest) {
    return this.$baseService.post<boolean>('cabinet/change-username', request);
  }

  changeAvatar(avatar: File | null) {
    let formData: any = new FormData();
    if (avatar) {
      formData.append('photo', avatar, avatar.name);
    } else {
      formData = { photo: avatar };
    }
    return this.$baseService.post<string | null>(
      'cabinet/change-user-photo',
      formData
    );
  }
}
