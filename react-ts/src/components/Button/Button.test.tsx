import { render } from "@testing-library/react";
import '@testing-library/jest-dom'

import { Button } from ".";

describe("Button suite", () => {
  it("should render the button", () => {
    const title = "mocked button";
    const { container, getByText } = render(<Button title={title} />);

    expect(container).not.toBeEmptyDOMElement();
    expect(getByText(title)).toBeInTheDocument();
  });
});
