import { Injectable, Type } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class LightboxService {
  private isOpenSubject = new BehaviorSubject<boolean>(false);
  isOpen$ = this.isOpenSubject.asObservable();

  private contentComponentSubject = new BehaviorSubject<Type<any> | null>(null);
  contentComponent$ = this.contentComponentSubject.asObservable();

  openLightbox(contentComponent: Type<any>) {
    this.isOpenSubject.next(true);
    this.contentComponentSubject.next(contentComponent);
  }

  closeLightbox() {
    this.isOpenSubject.next(false);
    this.contentComponentSubject.next(null);
  }
}