export function toSlug(input) {
  return input
    .toLowerCase()
    .normalize("NFD") // Türkçe karakterler için (örn. ö → o)
    .replace(/[\u0300-\u036f]/g, "") // Aksanları temizle
    .replace(/[^a-z0-9\s]/g, "") // Harf, rakam ve boşluk dışı karakterleri temizle
    .replace(/\s+/g, "-") // Tüm boşlukları tireye çevir
    .replace(/^-+|-+$/g, ""); // Baş ve sondaki tireleri sil
}
