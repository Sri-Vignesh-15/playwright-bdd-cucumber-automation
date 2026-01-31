# Playwright BDD Cucumber Automation Framework

A robust test automation framework built with **Playwright**, **Cucumber**, and **TypeScript**. This project implements Behavior-Driven Development (BDD) to create readable and maintainable UI tests.

## 🚀 Features

- **BDD Approach:** Uses Gherkin syntax for clear, human-readable test scenarios.
- **TypeScript:** Ensures type safety and better developer experience.
- **Code Quality:** Integrated with **ESLint** and **Prettier** for consistent code style.
- **Gherkin Linting:** Validates feature files using `.gherkin-lintrc`.
- **Pre-commit Hooks:** Uses **Husky** to run checks before committing code.
- **CI/CD Ready:** Includes GitHub Actions workflows for automated testing.
- **Cross-Browser Testing:** Supports Chromium, Firefox, and WebKit via Playwright.

## 📂 Project Structure

```bash
├── .github/workflows   # CI/CD pipeline configurations
├── .husky              # Git hooks for pre-commit checks
├── tests/UI_Test       # Feature files and step definitions
├── .gherkin-lintrc     # Gherkin linting rules
├── eslint.config.mts   # ESLint configuration
├── playwright.config.ts# Main Playwright configuration
├── package.json        # Dependencies and scripts
└── README.md           # Project documentation

Prerequisites
Node.js (v14 or higher)

npm (comes with Node.js)

Installation
Clone the repository:
git clone [https://github.com/Sri-Vignesh-15/playwright-bdd-cucumber-automation.git](https://github.com/Sri-Vignesh-15/playwright-bdd-cucumber-automation.git)

Navigate to the project directory:
cd playwright-bdd-cucumber-automation

Install dependencies:
npm init playwright@latest

Install Playwright browsers:
npm i -D playwright-bdd

▶️ Running Tests
To execute the test suite, use the following commands:

Run all tests:
npm run test

Run in headed mode (visible browser):
npx playwright test --headed


```
