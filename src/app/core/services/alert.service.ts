import { Injectable } from '@angular/core';
import swal, { SweetAlertIcon } from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  public toast(message: string, icon: SweetAlertIcon) {
    return swal
      .mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = swal.stopTimer;
          toast.onmouseleave = swal.resumeTimer;
          toast.addEventListener('click', () => swal.close());
        },
      })
      .fire({
        icon: icon,
        title: message,
      });
  }
}
