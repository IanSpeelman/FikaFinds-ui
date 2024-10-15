import Hero from "../../Components/Hero"
import Featured from "./Components/Featured";
import Testemonials from "./Components/Testemonials";
import TrustTags from "./Components/TrustTags";

export default function Home() {
    return (
        <>
            <Hero buttonText="SHOP NOW!" action="shop" header="Find Your Moment Of Fika" subheader="Our collection of thoughtfully crafted Swedish-inspired products for a cozy, stylish home." />
            <Featured />
            <Testemonials />
            <TrustTags />
        </>
    )
}
