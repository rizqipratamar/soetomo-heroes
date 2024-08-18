# Web Dev Merdeka Challenge - Hero Website

This repository was created for the Web Dev Merdeka Challenge, a competition organized by CloudRaya in celebration of Indonesia's 79th Independence Day. The goal of this project is to build a single-page website that highlights an Indonesian hero. The website also serves as an educational exercise to learn and practice CI/CD automation using StorageRaya, CloudRaya's S3-compatible Object Storage.

## Project Overview

- **Framework:** React
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion

## Disclaimer

This website was developed purely for educational purposes as part of my participation in the Web Dev Merdeka Challenge. The primary goal is to learn and practice CI/CD automation using a bucket in CloudRaya.

The assets and images displayed on this website are sourced from Gramedia, Kompas, and Suara Surabaya. If any party objects to the use of these materials, please report the issue through the GitHub repository.

This repository is open to the public and can be accessed by anyone interested. A `README.md` file is provided, containing instructions on how to deploy this website to CloudRaya using GitHub Actions.

## Deployment

To deploy this project to StorageRaya using GitHub Actions, follow the steps below:

### Prerequisites

- Ensure you have a CloudRaya account.
- Make sure you have a valid `STORAGERAYA_ACCESS_KEY_ID` and `STORAGERAYA_SECRET_ACCESS_KEY`, stored in your GitHub repository secrets.

### Deployment Script

The following GitHub Actions workflow is used to deploy the website:

```yaml
name: Deploy React Vite to StorageRaya

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v3

      - name: Install dependencies
        run: npm install

      - name: Build the project
        run: npm run build

      - name: Install rclone
        run: sudo apt-get install -y rclone

      - name: Configure rclone
        run: |
          rclone config create storageraya s3 \
            provider AWS \
            access_key_id "${{ secrets.STORAGERAYA_ACCESS_KEY_ID }}" \
            secret_access_key "${{ secrets.STORAGERAYA_SECRET_ACCESS_KEY }}" \
            endpoint "https://s3-jak01.storageraya.com" \
            region "jak01" \
            acl "public-read"

      - name: Deploy to StorageRaya
        run: rclone sync dist/ storageraya:your-bucket-name --progress
```
