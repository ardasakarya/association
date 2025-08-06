
const eventData = {
  "eventButton_001": {
    temaFoto: "https://readdy.ai/api/search-image?query=elegant%20charity%20gala%20ballroom%20with%20golden%20lighting%2C%20people%20in%20formal%20attire%2C%20round%20tables%20with%20white%20linens%20and%20floral%20centerpieces%2C%20warm%20ambient%20lighting%2C%20professional%20event%20photography%2C%20sophisticated%20atmosphere%2C%20luxury%20hotel%20ballroom%20setting&width=1200&height=400&seq=hero-gala&orientation=landscape",
    etkinlikAdi: "Yaz Festivali 2025",
    tarih: "2025-08-15",
    saat: "20:00",
    konum: "İstanbul, Maçka Parkı",
    aciklama: "Yazın en renkli etkinliği! Müzik, dans ve eğlence dolu bir gün seni bekliyor.",
    katilimciSayisi: 320,
    kategori: "Festival",
    gerceklesmeDurumu: false,
    organizator: {
      foto: "https://example.com/organizer.jpg",
      isim: "Ahmet",
      soyisim: "Yılmaz",
      mail: "ahmet.yilmaz@example.com",
      tel: "+90 555 123 45 67"
    },
  galeriFotolari:  [
    'https://readdy.ai/api/search-image?query=charity%20gala%20guests%20mingling%20in%20elegant%20ballroom%2C%20people%20in%20formal%20evening%20wear%2C%20cocktail%20reception%2C%20warm%20lighting%2C%20professional%20event%20photography%2C%20sophisticated%20social%20gathering&width=800&height=600&seq=gallery-large-1&orientation=landscape',
    'https://readdy.ai/api/search-image?query=elegant%20dinner%20table%20setting%20at%20charity%20gala%2C%20white%20linens%2C%20floral%20centerpieces%2C%20fine%20dining%20setup%2C%20golden%20lighting%2C%20luxury%20event%20photography&width=800&height=600&seq=gallery-large-2&orientation=landscape',
    'https://readdy.ai/api/search-image?query=charity%20auction%20items%20display%20at%20gala%20event%2C%20luxury%20items%20on%20elegant%20tables%2C%20professional%20lighting%2C%20sophisticated%20presentation%2C%20fundraising%20event%20photography&width=800&height=600&seq=gallery-large-3&orientation=landscape',
    'https://readdy.ai/api/search-image?query=keynote%20speaker%20at%20charity%20gala%20podium%2C%20professional%20presentation%2C%20elegant%20ballroom%20background%2C%20formal%20event%20photography%2C%20inspiring%20moment&width=800&height=600&seq=gallery-large-4&orientation=landscape',
    'https://readdy.ai/api/search-image?query=charity%20gala%20award%20ceremony%20moment%2C%20people%20applauding%2C%20elegant%20stage%20setup%2C%20professional%20event%20photography%2C%20celebration%20atmosphere&width=800&height=600&seq=gallery-large-5&orientation=landscape',
    'https://readdy.ai/api/search-image?query=group%20photo%20at%20charity%20gala%2C%20happy%20attendees%20in%20formal%20wear%2C%20elegant%20ballroom%20background%2C%20professional%20group%20photography%2C%20celebration%20moment&width=800&height=600&seq=gallery-large-6&orientation=landscape'
  ]

  },

 "eventButton_002": {
    temaFoto: "https://example.com/theme.jpg",
    etkinlikAdi: "Kış Festivali 2025",
    tarih: "2025-08-15",
    saat: "19:00",
    konum: "İstanbul, Maçka Parkı",
    aciklama: "Kışın en keyifli etkinliği! Müzik, dans ve eğlence dolu bir gün seni bekliyor.",
    katilimciSayisi: 320,
    kategori: "Festival",
    gerceklesmeDurumu: true,
    organizator: {
      foto: "https://example.com/organizer.jpg",
      isim: "Ahmet",
      soyisim: "Yılmaz",
      mail: "ahmet.yilmaz@example.com",
      tel: "+90 555 123 45 67"
    },
    galeriFotolari:  [
    'https://readdy.ai/api/search-image?query=charity%20gala%20guests%20mingling%20in%20elegant%20ballroom%2C%20people%20in%20formal%20evening%20wear%2C%20cocktail%20reception%2C%20warm%20lighting%2C%20professional%20event%20photography%2C%20sophisticated%20social%20gathering&width=800&height=600&seq=gallery-large-1&orientation=landscape',
    'https://readdy.ai/api/search-image?query=elegant%20dinner%20table%20setting%20at%20charity%20gala%2C%20white%20linens%2C%20floral%20centerpieces%2C%20fine%20dining%20setup%2C%20golden%20lighting%2C%20luxury%20event%20photography&width=800&height=600&seq=gallery-large-2&orientation=landscape',
    'https://readdy.ai/api/search-image?query=charity%20auction%20items%20display%20at%20gala%20event%2C%20luxury%20items%20on%20elegant%20tables%2C%20professional%20lighting%2C%20sophisticated%20presentation%2C%20fundraising%20event%20photography&width=800&height=600&seq=gallery-large-3&orientation=landscape',
    'https://readdy.ai/api/search-image?query=keynote%20speaker%20at%20charity%20gala%20podium%2C%20professional%20presentation%2C%20elegant%20ballroom%20background%2C%20formal%20event%20photography%2C%20inspiring%20moment&width=800&height=600&seq=gallery-large-4&orientation=landscape',
    'https://readdy.ai/api/search-image?query=charity%20gala%20award%20ceremony%20moment%2C%20people%20applauding%2C%20elegant%20stage%20setup%2C%20professional%20event%20photography%2C%20celebration%20atmosphere&width=800&height=600&seq=gallery-large-5&orientation=landscape',
    'https://readdy.ai/api/search-image?query=group%20photo%20at%20charity%20gala%2C%20happy%20attendees%20in%20formal%20wear%2C%20elegant%20ballroom%20background%2C%20professional%20group%20photography%2C%20celebration%20moment&width=800&height=600&seq=gallery-large-6&orientation=landscape'
  ]
  }


};

function loadEvent(buttonId) {
  const data = eventData[buttonId];
  if (!data) return;

  // Tema görseli
  const banner = document.getElementById('eventBanner');
  if (banner) banner.style.backgroundImage = `url('${data.temaFoto}')`;

  // Başlık ve genel bilgiler
  const title = document.getElementById('eventTitle');
  const date = document.getElementById('eventDate');
  const location = document.getElementById('eventLocation');
  if (title) title.innerText = data.etkinlikAdi;
  if (date) date.innerText = data.tarih;
  if (location) location.innerText = data.konum;

  // Açıklama paragrafı
  const descContainer = document.getElementById('eventDescription');
  if (descContainer) descContainer.innerHTML = `<p>${data.aciklama}</p>`;

  // Galeri fotoğrafları
  const galleryGrid = document.getElementById('eventGallery');
  if (galleryGrid) {
    galleryGrid.innerHTML = '';
    data.galeriFotolari.forEach((foto, index) => {
      galleryGrid.innerHTML += `
        <div class="aspect-square rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
             onclick="openGallery(${index})">
          <img src="${foto}" alt="Event Gallery Photo" class="w-full h-full object-cover object-top">
        </div>
      `;
    });
  }

  // Galeri foto sayısı
  const galleryCount = document.getElementById('galleryCount');
  if (galleryCount) galleryCount.innerText = `${data.galeriFotolari.length} Photos`;

  // Sağ panelde detaylar
  const detailDateTime = document.getElementById('detailDateTime');
  const detailLocation = document.getElementById('detailLocation');
  const detailAttendees = document.getElementById('detailAttendees');
  const detailCategory = document.getElementById('detailCategory');

  if (detailDateTime) detailDateTime.innerText = `${data.tarih} at ${data.saat}`;
  if (detailLocation) detailLocation.innerText = data.konum;
  if (detailAttendees) detailAttendees.innerText = `${data.katilimciSayisi} Guests`;
  if (detailCategory) detailCategory.innerText = data.kategori;

  // Etkinlik durumu
  const statusContainer = document.getElementById('eventStatusContainer');
  const statusLabel = document.getElementById('eventStatusLabel');
  const statusMessage = document.getElementById('eventStatusMessage');

  if (statusContainer && statusLabel && statusMessage) {
    if (data.gerceklesmeDurumu) {
      statusContainer.classList.remove('bg-yellow-50', 'border-yellow-200');
      statusContainer.classList.add('bg-green-50', 'border-green-200');
      statusLabel.innerText = 'Event Completed';
      statusMessage.innerText = 'This event was successfully completed.';
    } else {
      statusContainer.classList.remove('bg-green-50', 'border-green-200');
      statusContainer.classList.add('bg-yellow-50', 'border-yellow-200');
      statusLabel.innerText = 'Upcoming Event';
      statusMessage.innerText = 'Get ready! This event will be happening soon.';
    }
  }

  // Organizator bilgileri
  const organizerPhoto = document.getElementById('organizerPhoto');
  const organizerName = document.getElementById('organizerName');
  const organizerEmail = document.getElementById('organizerEmail');
  const organizerPhone = document.getElementById('organizerPhone');

  if (organizerPhoto) organizerPhoto.src = data.organizator.foto;
  if (organizerName) organizerName.innerText = `${data.organizator.isim} ${data.organizator.soyisim}`;
  if (organizerEmail) organizerEmail.innerText = data.organizator.mail;
  if (organizerPhone) organizerPhone.innerText = data.organizator.tel;
}

// Sayfa yüklendiğinde URL'deki id parametresini alıp loadEvent'i çağır
document.addEventListener('DOMContentLoaded', () => {
  const urlParams = new URLSearchParams(window.location.search);
  const eventId = urlParams.get('id');
  if (eventId) {
    loadEvent(eventId);
  }
});







function openGallery(index) {
    currentImageIndex = index;
    const modal = document.getElementById('galleryModal');
    const image = document.getElementById('galleryImage');
    image.src = galleryImages[index];
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closeGallery() {
    const modal = document.getElementById('galleryModal');
    modal.classList.add('hidden');
    document.body.style.overflow = 'auto';
}

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
    document.getElementById('galleryImage').src = galleryImages[currentImageIndex];
}

function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
    document.getElementById('galleryImage').src = galleryImages[currentImageIndex];
}

// Keyboard navigation
document.addEventListener('keydown', function(e) {
    const modal = document.getElementById('galleryModal');
    if (!modal.classList.contains('hidden')) {
        if (e.key === 'Escape') {
            closeGallery();
        } else if (e.key === 'ArrowLeft') {
            prevImage();
        } else if (e.key === 'ArrowRight') {
            nextImage();
        }
    }
});

// Smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});
