import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';

@Component({
  selector: 'app-advantage',
  standalone: true,
  imports: [],
  templateUrl: './advantage.component.html',
  styleUrl: './advantage.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AdvantageComponent {
  shoeCleaningStoreAdvantages = [
    {
      main: 'Profesional✨',
      description:
        'Kami menawarkan layanan cuci sepatu dengan teknik dan bahan pembersih khusus yang aman untuk berbagai jenis material sepatu, termasuk kulit, kanvas, dan sintetis. Tim kami terdiri dari teknisi berpengalaman yang memastikan sepatu Anda dibersihkan dengan hati-hati dan efektif.',
    },
    {
      main: 'PlusPlus🧼',
      description:
        'Setelah proses cuci, sepatu Anda akan melalui tahap pengeringan yang optimal untuk mencegah kerusakan. Kami juga menyediakan opsi perawatan tambahan seperti pelapisan anti air dan pemolesan untuk menjaga sepatu Anda tetap dalam kondisi terbaik dan meningkatkan umur pemakaiannya.',
    },
    {
      main: 'Antar Jemput🚀',
      description:
        'Kami menawarkan layanan pengambilan dan pengantaran sepatu secara gratis dalam area tertentu, sehingga Anda tidak perlu repot datang ke toko kami. Cukup jadwalkan waktu yang sesuai, dan kami akan memastikan sepatu Anda sampai kembali ke tangan Anda dalam kondisi bersih dan terawat.',
    },
  ];
}
