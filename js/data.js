const user = {
  name: "Stas",
  surname: "Popov",
  userPhoto: "me-photo.jpg",
  qrQode: "qr-code.svg",
  dreams: [
    { src: "Range-Rover-2.jpg", alt: "Авто моєї мрії" },
    { src: "house.jpg", alt: "Домівка на місяці" },
    { src: "voyage.jpg", alt: "Путешествие" },
  ],
};

// arr це середня місячна платня по рокам
const arr = [
  900,
  1000,
  1150,
  1250,
  1400,
  1550,
  1700,
  1650,
  1900,
  2400,
  2650,
  2800,
];

const necessaryExpenses = 800;

const todo = [
  { month: "Червень", skill: "Самостійність" },
  { month: "Липень", skill: "Java" },
  { month: "Серпень", skill: "Skills" },
  { month: "Вересень", skill: "Публічні виступи" },
  { month: "Жовтень", skill: "Лідерство" },
  { month: "Листопад", skill: "Емоційний інтелект" },
  { month: "Грудень", skill: "Креативність" },
  { month: "Січень", skill: "Лідерство" },
  { month: "Лютий", skill: "Нетворкінг" },
  { month: "Березень", skill: "Особистий бренд" },
  { month: "Квітень", skill: "Управління фінансами" },
  { month: "Травень", skill: "Знання" },
];

export { user, arr, necessaryExpenses, todo };
