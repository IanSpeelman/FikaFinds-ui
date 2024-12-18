import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"
import Product from "."
import { BrowserRouter } from "react-router-dom";


describe("Product component", () => {
    it("should render with all the properties", () => {
        const { container } = render(
            <BrowserRouter>
                <Product product={{ id: 1, name: "product", price: 5, category: "category", image: "image", specifications: 'key:value', description: 'description' }} />
            </BrowserRouter>
        )


        const product = screen.getByText("product")
        const price = screen.getByText(5)
        const image = container.querySelector("img")
        const src = image!.getAttribute("src")
        const category = screen.getByText("category")
        expect(product).toBeInTheDocument()
        expect(price).toBeInTheDocument()
        expect(category).toBeInTheDocument()
        expect(src === "image")
    })
})
