import nodemailer from 'nodemailer';
import * as dotenv from 'dotenv';

dotenv.config();

// Define the days as a const array for type safety
const FRENCH_DAYS = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"] as const;
type FrenchDay = typeof FRENCH_DAYS[number];

// Messages motivants pour chaque jour de la semaine
const dailyMessages: Record<FrenchDay, string> = {
  Lundi: "🚀 Nouvelle semaine, nouvelles opportunités ! Tu vas tout déchirer cette semaine !",
  Mardi: "🔥 Le mardi, c'est le jour où les champions se réveillent. Allez, café et code !",
  Mercredi: "💪 À mi-parcaine ! Tu tiens le bon bout, continue comme ça !",
  Jeudi: "👑 Jeudi = jour des boss. Montre-leur qui est le patron !",
  Vendredi: "🎉 Presque le week-end ! Finis en beauté, tu l'as mérité !",
  Samedi: "😌 Samedi : temps pour toi. Mais un peu de code ne fait pas de mal, non ?",
  Dimanche: "🙏 Jour de repos... Ou pas ? (On sait que tu vas coder un peu 😏)",
};

// Citations aléatoires pour ajouter de la variété
const randomQuotes = [
  "Le succès, c'est tomber 7 fois et se relever 8. - Proverbe japonais",
  "Le code, c'est comme l'humour : si tu dois l'expliquer, c'est qu'il n'est pas bon. - Kevin P.",
  "La discipline, c'est choisir entre ce que tu veux maintenant et ce que tu veux le plus. - A. Lincoln",
  "Un jour sans code est un jour perdu. - Un développeur anonyme (probablement en burnout)",
];

// Type-safe function to get French day
const getFrenchDay = (): FrenchDay => {
  return FRENCH_DAYS[new Date().getDay()];
};

// Génère un message aléatoire + message du jour
const generateMessage = () => {
  const day = getFrenchDay();
  const randomQuote = randomQuotes[Math.floor(Math.random() * randomQuotes.length)];
  return `${dailyMessages[day]}\n\n💡 Citation du jour : ${randomQuote}\n\nPS : ${process.env.PERSONAL_MESSAGE || "Tu es le meilleur !"}`;
};

// Config Gmail
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

// Options de l'email
const mailOptions = {
  from: process.env.GMAIL_USER,
  to: process.env.GMAIL_USER,
  subject: `Motivation ${getFrenchDay()} 💌`,
  text: generateMessage(),
};

// Envoi
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error('Erreur :', error);
  } else {
    console.log(`Email envoyé à ${new Date().toLocaleString()} : ${info.response}`);
  }
});