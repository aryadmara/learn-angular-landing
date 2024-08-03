import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule, AsyncPipe } from '@angular/common';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, AsyncPipe],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css',
})
export class ServicesComponent implements OnInit, OnDestroy {
  treatment = [
    {
      main: 'Cleaning',
      description:
        'Pembersihan menyeluruh untuk menghilangkan kotoran dan noda dari seluruh permukaan sepatu, sehingga sepatu Anda tampak bersih dan segar kembali.',
    },
    {
      main: 'Special Treatment',
      description:
        'Perawatan khusus seperti perawatan kulit dan unyellowing. Perawatan kulit mengembalikan kelembutan dan kilau sepatu kulit, sementara unyellowing menghilangkan warna kuning pada midsole tanpa perlu repaint.',
    },
    {
      main: 'Repaint',
      description:
        'Proses pengecatan ulang untuk memperbaiki warna yang pudar atau mengubah warna sepatu sesuai keinginan Anda, memberikan tampilan baru yang segar.',
    },
    {
      main: 'Reglue',
      description:
        'Perbaikan bagian sepatu yang terlepas atau rusak dengan proses pengeleman ulang, memastikan sepatu Anda kembali dalam kondisi optimal dan nyaman dipakai.',
    },
  ];

  isModalOpen = false;

  private countSubject = new BehaviorSubject<number>(0);
  count$: Observable<number> = this.countSubject.asObservable();
  private openModalSubject = new Subject<void>();
  private destroy$ = new Subject<void>();

  ngOnInit() {
    this.count$ = this.countSubject.asObservable();

    this.openModalSubject.pipe(takeUntil(this.destroy$)).subscribe(() => {
      const currentCount = this.countSubject.value;
      this.countSubject.next(currentCount + 1);
      console.log('Count updated:', this.countSubject.value);
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  openModal() {
    console.log('Opening modal');
    this.isModalOpen = true;
    this.openModalSubject.next();
  }

  closeModal() {
    console.log('Close modal');
    this.isModalOpen = false;
    const currentCount = this.countSubject.value;
    this.countSubject.next(currentCount - 1);
  }
}
