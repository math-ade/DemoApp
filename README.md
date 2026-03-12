# AWS AppConfig Dynamic Configuration System

## 🚀 Project Overview
This project demonstrates a cloud-native approach to managing application configurations and feature flags using **AWS AppConfig** and **AWS CloudShell**. I built a centralized system that allows for real-time updates to application settings without requiring code redeployments or service restarts.

## 🛠️ Key Features
- **Centralized Configuration**: Hosted application settings in the AWS AppConfig Hosted Store for a single source of truth.
- **Automated Deployments**: Developed a Bash CI/CD-lite script (`deploy_config.sh`) to automate the creation of configuration versions and trigger deployment strategies via the AWS CLI.
- **Secure Version Control**: Integrated with GitHub using Personal Access Tokens (PAT) and managed remote repository provisioning via the GitHub REST API.
- **Zero-Downtime Updates**: Enabled runtime configuration changes, significantly reducing the risk of deployment-related outages.

## 🛡️ Troubleshooting & Technical Challenges
During the integration phase, I resolved a critical **Git metadata mismatch** where the local environment was incorrectly targeting the base domain instead of the specific repository endpoint. I successfully debugged this by:
1. Auditing remote origins with `git remote -v`.
2. Validating the repository state using `curl` and the GitHub REST API.
3. Implementing an authenticated URL push to bypass local configuration drift and successfully sync over 3,000 objects.

## 🏗️ Technical Stack
- **Cloud Platform**: AWS (AppConfig, Systems Manager, CloudShell)
- **Version Control**: Git & GitHub
- **Scripting**: Bash / Linux CLI
- **API Integration**: GitHub REST API (cURL)

