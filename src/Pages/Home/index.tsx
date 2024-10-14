import Hero from "../../Components/Hero"
import Featured from "./Components/Featured";

export default function Home() {
    return (
        <>
            <Hero buttonText="SHOP NOW!" header="Find Your Moment Of Fika" subheader="Our collection of thoughtfully crafted Swedish-inspired products for a cozy, stylish home." />
            <Featured />
        </>
    )
}
