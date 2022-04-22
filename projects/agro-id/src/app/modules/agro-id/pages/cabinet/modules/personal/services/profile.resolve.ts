import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { map, Observable } from 'rxjs';
import { Profile } from '../models/profile.interface';
import { PersonalService } from './personal.service';

@Injectable({ providedIn: 'root' })
export class ProfileResolver implements Resolve<Profile> {
  /**
   *
   */
  constructor(private $data: PersonalService) {}
  resolve(): Observable<Profile> | Promise<Profile> | Profile {
    return this.$data.getProfile().pipe(map((result) => result.data));
  }
}
