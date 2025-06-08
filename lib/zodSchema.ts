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
      .instanceof(File)
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
    // currentCompany: z.string().optional(),
    // exCompanies: z.array(z.string()).optional(),
  })
  .refine((data) => data.password === data.passwordConfirmation, {
    path: ["passwordConfirmation"],
    error: "Şifreler eşleşmiyor.",
  });

export const mentorSchemaEducationInfo = z.object({
  schoolName: z.string(),
  major: z.string(),
  startDate: z.date(),
  endDate: z.date(),
  degreeType: z.string(),
});

export type Mentor = z.infer<typeof mentorSchema>;
