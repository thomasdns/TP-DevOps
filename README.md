# TP DevOps – Pipeline CI/CD avec GitHub Actions

## 🎯 Objectif du projet

Ce projet a pour objectif de mettre en place une pipeline CI/CD complète avec GitHub Actions dans le cadre du TP DevOps.

Le projet est une mini application Backend développée en Node.js avec :

- Tests unitaires
- Tests d’intégration
- Linting
- Audit de sécurité
- Génération d’artefacts
- Réutilisation d’artefacts
- Runner self-hosted Windows
- Exécution parallèle des jobs

L’évaluation porte principalement sur la qualité de la pipeline CI/CD.

---

# 🛠 Stack technique

- Node.js 20
- Express.js
- Jest (tests unitaires + intégration)
- ESLint
- GitHub Actions
- Runner self-hosted Windows

---

# 🚀 Installation et exécution en local

## 1️⃣ Installer les dépendances

```bash
cd backend
npm install

## 2 Lancer le serveur
npm start
Le serveur démarre sur le port défini dans l’application (par défaut 3000).

## 3 Lancer les tests en local
npm test
Les tests comprennent :
✔ Tests unitaires (fonctions utilitaires)
✔ Tests d’intégration (API Express)
Si un test échoue, la commande retourne une erreur et le processus s’arrête

## 4 Variables nécessaires
Variables GitHub (non sensibles)
APP_ENV
Cette variable est affichée dans les logs du pipeline.
Secrets GitHub (sensibles)
DB_PASSWORD
Le secret est injecté dans le pipeline mais n’est jamais affiché en clair dans les logs.

## 5 Déclenchement de la pipeline
La pipeline CI/CD se déclenche automatiquement :
Sur push vers la branche main
Sur pull_request vers main

## 6 Déroulement du pipeline
1- Lint
Analyse statique du code avec ESLint.

2- Audit
Vérification des vulnérabilités avec npm audit.
Les jobs lint et audit s’exécutent en parallèle.

3- Tests (unitaires + intégration)

Exécution des tests avec Jest.
Si un test échoue :
Le job échoue
La pipeline devient rouge
Les jobs dépendants ne s’exécutent pas
4- Génération des artefacts
Deux artefacts sont produits :
coverage-report : rapport de couverture des tests
backend-build : archive du backend

Les artefacts sont :
Téléchargeables depuis GitHub Actions
Conservés 7 jours
Réutilisés par d’autres jobs

5- Réutilisation d’artefacts
Un job télécharge et analyse le coverage-report
Un job sur le runner self-hosted télécharge le backend-build
6- Runner Self-Hosted
Un job spécifique est exécuté sur un runner Windows local afin de démontrer :
L’utilisation d’un exécuteur local
L’exécution sur machine dédiée
La récupération d’artefacts en local

## 7 Parallélisation et orchestration
lint et audit s’exécutent en parallèle.
test-backend dépend de ces deux jobs.
Les jobs suivants utilisent needs pour garantir un ordre cohérent.
La visualisation est disponible dans l’onglet "Visualize" de GitHub Actions.

## 8 Gestion des échecs
Si un test échoue volontairement :
Le job test-backend échoue
La pipeline devient rouge
Les jobs dépendants sont annulés
Cela garantit qu’aucun build ne peut être généré si les tests ne passent pas.

## 9 Auteur
Thomas,Fatima,Célia,Edwin
TP DevOps – IEF2I