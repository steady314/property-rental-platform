import Hero from "../components/Hero";
import FeaturedProperties from "../components/FeaturedProperties";
import WhyChooseUs from "../components/WhyChooseUs";
function Home () {
    return(
        <main>
            <Hero title="Find a place you'll love to live in." description="Discover comfortable and affordable properties in locations that work for you." />
            <FeaturedProperties />
            <WhyChooseUs />
        </main>
    );
}
export default Home;