import React from 'react';

function Summary() {
  return (
    <section
      id="about"
      className="grid w-full grid-cols-1 place-content-start place-items-center py-14"
    >
      <section
        data-aos="fade-in"
        data-aos-delay="200"
        className="max-w-app flex h-full w-full flex-col items-start justify-start gap-10 p-3"
      >
        <section className="flex flex-col items-start justify-center gap-2 text-start">
          <h2 className="text-2xl font-extralight text-zinc-200 lg:text-3xl">
            Hakkımda
          </h2>
          <p className="text-sm text-zinc-400">
            Üretim odaklı süreçlerden kullanıcı arayüzlerine kadar farklı
            alanlarda yazılım geliştirmiş bir full stack developer. Kod
            disiplinini saha deneyimiyle birleştirerek fonksiyonel,
            sürdürülebilir ve gerçek ihtiyaçlara yönelik çözümler üretirim.
            Endüstriyel otomasyon, stok takibi ve arayüz geliştirme gibi
            konularda üretime doğrudan katkı sağlayan projelerde yer aldım.
            Temiz mimari, uzun vadeli düşünme ve sistematik yaklaşım temel
            önceliklerimdir.
          </p>
        </section>
      </section>
    </section>
  );
}

export default Summary;
