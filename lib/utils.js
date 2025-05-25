export function toSlug(name, id) {
  if (!name || !id) return "";

  const sluggedName = name
    .toLowerCase()
    .normalize("NFD") // Türkçe karakterler için (örn. ö → o)
    .replace(/[\u0300-\u036f]/g, "") // Aksanları temizle
    .replace(/[^a-z0-9\s]/g, "") // Harf, rakam ve boşluk dışı karakterleri temizle
    .replace(/\s+/g, "-") // Tüm boşlukları tireye çevir
    .replace(/^-+|-+$/g, ""); // Baş ve sondaki tireleri sil

  return `${sluggedName}-${id}`;
}

export function formatDate(dateString) {
  const months = {
    "01": "Ocak",
    "02": "Şubat",
    "03": "Mart",
    "04": "Nisan",
    "05": "Mayıs",
    "06": "Haziran",
    "07": "Temmuz",
    "08": "Ağustos",
    "09": "Eylül",
    10: "Ekim",
    11: "Kasım",
    12: "Aralık",
  };

  const [year, month, day] = dateString.split("-");

  const cleanDay = day.replace(/^0+/, "");

  return `${cleanDay} ${months[month]}, ${year}`;
}
