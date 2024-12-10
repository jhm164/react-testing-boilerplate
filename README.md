### Setup Jest

### Install Dependencies
`npm install --save-dev jest @testing-library/react @testing-library/jest-dom @testing-library/user-event`

`npm install --save-dev @babel/preset-react`

#### babel.config.js
```Javascript
module.exports = {
  presets: [
    '@babel/preset-env',
    '@babel/preset-react',
  ],
};

```
### Documentation
- [https://www.digitalocean.com/community/tutorials/how-to-test-a-react-app-with-jest-and-react-testing-library]
- [https://jestjs.io/docs/getting-started]
- [https://testing-library.com/docs/react-testing-library/intro/]


### All test cases

- Find Text in given component




### All Options
- debug
- unmount
- rerender
- asFragment
- findAllByLabelText
- findByLabelText
- getAllByLabelText
- getByLabelText
- queryAllByLabelText
- queryByLabelText
- findAllByPlaceholderText
- findByPlaceholderText
- getAllByPlaceholderText
- getByPlaceholderText
- queryAllByPlaceholderText
- queryByPlaceholderText
- findAllByText
- findByText
- getAllByText
- getByText
- queryAllByText
- queryByText
- findAllByDisplayValue
- findByDisplayValue
- getAllByDisplayValue
- getByDisplayValue
- queryAllByDisplayValue
- queryByDisplayValue
- findAllByAltText
- findByAltText
- getAllByAltText
- getByAltText
- queryAllByAltText
- queryByAltText
- findAllByTitle
- findByTitle
- getAllByTitle
- getByTitle
- queryAllByTitle
- queryByTitle
- findAllByRole
- findByRole
- getAllByRole
- getByRole
- queryAllByRole
- queryByRole
- findAllByTestId
- findByTestId
- getAllByTestId
- getByTestId
- queryAllByTestId
- queryByTestId