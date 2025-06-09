import { z } from "zod/v4";

export const mentorSchema = z.object({
  mentorId: z.number(),
  createdAt: z.date(),
  updatedAt: z.date(),
  skills: z.array(z.string()),
  bio: z.string(),
  otherInfoPublic: z.string(),
  otherInfoNotPublic: z.string(),
  active: z.boolean(),
  price: z.number(),
});

export const mentorSchemaAbout = z
  .object({
    image: z
      .instanceof(File, { message: "Lütfen bir profil fotoğrafı seçiniz." })
      .refine((file) => file.size > 0, {
        error: "Lütfen bir dosya seçin.",
      })
      .refine((file) => file.size <= 1024 * 1024, {
        error: "Dosya boyutu en fazla 1MB olmalı.",
      })
      .refine((file) => ["image/png", "image/jpeg"].includes(file.type), {
        error: "Sadece PNG veya JPEG resimler kabul edilir.",
      }),

    firstName: z.string().min(1, { error: "İsim alanı boş bırakılamaz." }),
    lastName: z.string().min(1, { error: "Soyadı alanı boş bırakılamaz." }),
    email: z.email({ error: "Lütfen geçerli bir email adresi giriniz." }),
    password: z
      .string()
      .min(8, { error: "Şifre en az 8 karakter olmalı." })
      .regex(/[a-zA-Z]/, { error: "Şifre en az bir harf içermeli." }),
    passwordConfirmation: z.string(),
    occupation: z.string(),
  })
  .refine((data) => data.password === data.passwordConfirmation, {
    path: ["passwordConfirmation"],
    error: "Şifreler eşleşmiyor.",
  });

export const mentorSchemaEducationInfo = z
  .object({
    schoolName: z.string().min(1, { error: "Okul adı boş bırakılamaz." }),
    major: z.string().min(1, { error: "Bölüm alanı boş bırakılamaz." }),
    startDate: z
      .string()
      .min(4, { error: "Başlangıç tarihi en az 4 haneli olmalıdır." })
      .max(4, { error: "Başlangıç tarihi en fazla 4 haneli olmalıdır." }),
    endDate: z
      .string()
      .min(4, { error: "Bitiş tarihi en az 4 haneli olmalıdır." })
      .max(4, { error: "Bitiş tarihi en fazla 4 haneli olmalıdır." }),
    degreeType: z.string().min(1, { error: "Derece türü boş bırakılamaz." }),
  })
  .refine((data) => Number(data.startDate) <= Number(data.endDate), {
    message: "Başlangıç tarihi, bitiş tarihinden büyük olamaz.",
    path: ["startDate"],
  });

export const mentorSchemaProfile = z.object({
  category: z
    .string()
    .min(1, { error: "Lütfen mentorluk vermek istediğiniz alanı seçiniz." }),
  skills: z.array(z.string()).min(3, {
    error: "Lütfen en az 3 yetenek yazınız.",
  }),
  biography: z.string().min(50, {
    error: "Biyografi alanı en az 50 karakter olmalıdır.",
  }),
  price: z.number().min(100, {
    // numbe or string?? im not sure. test this.
    error: "1 saatlik mentorluk ücreti en az 100 TL olmalıdır.",
  }),
});

export type Mentor = z.infer<typeof mentorSchema>;
