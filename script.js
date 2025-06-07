const events = [
    {
      title: "Хурдан морины уралдаан",
      time: "2025 оны 7-р сарын 10, 08:00",
      location: "Сумын уяачдын уралдааны талбай",
      contactName: "Д. Батбаяр",
      contactPhone: "99112233",
      mapSrc: "images/race.jpg"
    },
    {
      title: "Бөхийн барилдаан",
      time: "2025 оны 7-р сарын 10, 12:00",
      location: "Наадмын талбайн барилдааны хэсэг",
      contactName: "Ц. Энхболд",
      contactPhone: "88119922",
      mapSrc: "images/wrestling.jpg"
    },
    {
      title: "Сур харваа",
      time: "2025 оны 7-р сарын 10, 15:00",
      location: "Сурын талбай",
      contactName: "Б. Ганхуяг",
      contactPhone: "99001122",
      mapSrc: "images/archery.jpg"
    },
    {
      title: "Шагайн харваа",
      time: "2025 оны 7-р сарын 10, 17:00",
      location: "Шагайн талбай",
      contactName: "Ж. Даваа",
      contactPhone: "88008800",
      mapSrc: "images/shagai.jpg"
    },
    {
      title: "Урлагийн тоглолт",
      time: "2025 оны 7-р сарын 10, 19:00",
      location: "Соёлын төвийн тайз",
      contactName: "М. Саранцэцэг",
      contactPhone: "99117788",
      mapSrc: "images/concert.jpg"
    },
    {
      title: "Наадмын нээлт",
      time: "2025 оны 7-р сарын 10, 07:30",
      location: "Төв талбай",
      contactName: "Сумын ЗДТГ",
      contactPhone: "",
      mapSrc: "images/opening.jpg"
    },
    {
      title: "Хаалтын үйл ажиллагаа",
      time: "2025 оны 7-р сарын 10, 20:00",
      location: "Төв талбай",
      contactName: "Баяр зохион байгуулах комисс",
      contactPhone: "",
      mapSrc: "images/closing.jpg"
    }
  ];
  
  function showDetail(index) {
    const event = events[index];
    document.getElementById('event-title').textContent = event.title;
    document.getElementById('event-time').textContent = event.time;
    document.getElementById('event-location').textContent = event.location;
  
    let contactText = event.contactName;
    if(event.contactPhone) {
      contactText += " - " + event.contactPhone;
    }
    document.getElementById('event-contact').textContent = contactText;
  
    document.getElementById('event-map').src = event.mapSrc;
    document.getElementById('event-map').alt = event.title + " зураг";
  
    document.getElementById('modal').classList.add('show');
  }
  
  function closeModal() {
    document.getElementById('modal').classList.remove('show');
  }
  
  window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if(event.target === modal) {
      closeModal();
    }
  };
  