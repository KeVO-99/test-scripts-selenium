# Test Scripts

## Folder Structure
All test scripts are located in the `test` folder.

## Available Tests

### 1. Form Submission and Filling Automation

This Selenium WebDriver test script automates the complete process of filling and submitting a web form. The script performs the following operations:

#### Tested Functionalities:
- **Text Input Handling**:
  - Basic text field population
  - Password field entry
  - Multi-line textarea completion

- **Dropdown Controls**:
  - Standard select dropdown selection
  - Datalist input with custom values

- **Date Selection**:
  - Date picker interaction and value setting

- **Form Submission**:
  - Button click action
  - Complete form submission flow

#### Technical Details:
- Browser: Chrome
- Automation Engine: Selenium WebDriver
- Language: JavaScript (Node.js environment)

#### Test Coverage:
- Validates form element selectors
- Tests user input simulation
- Verifies submission functionality
- Checks field value retention

#### Requirements:
- Node.js runtime installed
- Selenium WebDriver package
- ChromeDriver configured
- Chrome browser available in test environment
