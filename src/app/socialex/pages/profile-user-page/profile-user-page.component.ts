import { Component, inject, linkedSignal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { usersData } from '@socialex/users/data/users.data';

import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-profile-user-page',
  imports: [],
  templateUrl: './profile-user-page.component.html',
})
export default class ProfileUserPageComponent {
  activatedRoute = inject(ActivatedRoute);
  queryParamId = toSignal(this.activatedRoute.paramMap, { initialValue: null });
  
  user = linkedSignal(() => {
    const id = this.queryParamId()?.get('userId');
    if (!id) return null;
    return usersData.find(user => user.id === +id);
  });
}