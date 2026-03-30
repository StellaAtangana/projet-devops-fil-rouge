# 1. Utiliser une image officielle Node.js comme base
FROM node:18-alpine

# 2. Définir le dossier de travail dans le conteneur
WORKDIR /app

# 3. Copier les fichiers de dépendances
COPY package*.json ./

# Étape 4 : Lancez la commande pour installer les dépendances du projet
RUN npm install

# Étape 5 : Copiez tout le reste de vos fichiers dans le conteneur
COPY . .

# Étape 6 : Définissez la commande par défaut au démarrage du conteneur
CMD ["node", "app.js"]