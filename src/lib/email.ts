import { Resend } from "resend";

export const resend = new Resend(process.env.RESEND_API_KEY);

export const CONTACT_EMAIL =
  process.env.CONTACT_EMAIL || "hello@sweepslessinseattle.com";

export const EMAIL_FROM =
  process.env.EMAIL_FROM || "onboarding@resend.dev";
