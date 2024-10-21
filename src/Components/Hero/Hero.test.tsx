import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import Hero from './index.tsx'

describe("hero component", () => {
    it("should render with header but without subheader and button", () => {
        const { container } = render(<Hero header="hero" />)

        const headerElement = screen.getByText("hero")
        const SubHeaderElement = container.querySelector("h3")
        const buttonElement = container.querySelector('a')
        expect(headerElement).toBeInTheDocument();
        expect(SubHeaderElement).not.toBeInTheDocument();
        expect(buttonElement).not.toBeInTheDocument();
    })


    it("should render with header and subheade(without button)", () => {
        const { container } = render(<Hero header="hero" subheader="subheader" />)

        const headerElement = screen.getByText("hero")
        const SubHeaderElement = container.querySelector("h3")
        const buttonElement = container.querySelector('a')
        expect(headerElement).toBeInTheDocument();
        expect(SubHeaderElement).toBeInTheDocument();
        expect(buttonElement).not.toBeInTheDocument();
    })

    it("should render with header , subheader and button", () => {
        render(<Hero header="hero" subheader="subheader" buttonText="Button" />)

        const headerElement = screen.getByText("hero")
        const SubHeaderElement = screen.getByText("subheader")
        const buttonelement = screen.getByText("Button")
        expect(headerElement).toBeInTheDocument();
        expect(SubHeaderElement).toBeInTheDocument();
        expect(buttonelement).toBeInTheDocument();
    })
})
