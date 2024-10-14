import Hero from "../../Components/Hero"
import Product from "../../Components/Product";

export default function Home() {
    return (
        <>
            <Hero buttonText="SHOP NOW!" header="Find Your Moment Of Fika" subheader="Our collection of thoughtfully crafted Swedish-inspired products for a cozy, stylish home." />
            <Product product="Dalahäst" price="99 SEK" category="Dalarna" image="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQhik6ntKzUrb7GbmRt0laNt4TDv7p8sdfywfGt9JLMf_ZDrvuJWV6o_v4yFe42PP-luPrrAe-jl7Kg9IYPsLVEbHDvViAcW7CnyQeUWkF52g_NoB7o0dU68g" />
        </>
    )
}
