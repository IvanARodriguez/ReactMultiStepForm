# MultiStepForm

A MultiStepForm component built with [your preferred tech stack, e.g., React, Vue, or plain JavaScript]. This project allows users to navigate through multiple steps while filling out a form, maintaining state between steps.

## Features

- Step-by-step navigation
- State persistence between steps
- Validation for each step
- Progress indicator
- Customizable UI

## Installation

Clone the repository and install dependencies:

```sh
git clone https://github.com/IvanARodriguez/ReactMultiStepForm.git
cd MultiStepForm
pnpm i  # or npm install
```

## Usage

Run the development server:

```sh
pnpm run dev  # or npm dev
```

## Folder Structure

```
MultiStepForm/
├── src/
│   ├── components/
│   │   ├── StepOne.tsx
│   │   ├── StepTwo.tsx
│   │   ├── StepThree.tsx
│   │   ├── ProgressBar.tsx
│   │   ├── MultiStepForm.tsx
│   ├── App.tsx
│   ├── index.tsx
├── public/
├── styles/
│   ├── MultiStepForm.css
│   ├── ProgressBar.css
├── package.json
├── README.md
```

## Customization

- Modify `MultiStepForm.tsx` to add or remove steps
- Customize form validation logic in each step component
- Adjust the UI styles in `index.css` or corresponding styling files

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](LICENSE)
