 .....Fonctionnalités
Messages quotidiens uniques pour chaque jour de la semaine

Citations aléatoires inspirantes

Configuration simple avec variables d'environnement

Prêt pour production avec gestion d'erreurs

Personnalisation facile des contenus

........🛠 Prérequis
Node.js v18+

Compte Gmail

TypeScript

🚀 Installation
# 1. Cloner le dépôt
git clone https://github.com/its-kevin228/auto-mail.git
cd auto-mail

# 2. Installer les dépendances
npm install

# 3. Configurer les variables d'environnement
cp .env .env.local

⚙ Configuration
Éditez le fichier .env :


# Authentification Gmail
GMAIL_USER="votre_email@gmail.com"
GMAIL_APP_PASSWORD="votre_mot_de_passe_application"  # À générer via https://myaccount.google.com/apppasswords

# Personnalisation
PERSONAL_MESSAGE="Message perso qui apparaît dans chaque email"
🏃‍♂️ Exécution
Pour un test manuel :

bash
npx ts-node src/sendEmail.ts