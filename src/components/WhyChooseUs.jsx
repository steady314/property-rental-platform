import benefits from "../data/benefits"
function WhyChooseUs() {
    return(
        
        <section>
            <h2>Why Choose Us?</h2>
            <div>
                {benefits.map((benefit) => (
                    <article key={benefit.title}>
                        <h3>{benefit.title}</h3>
                        <p>{benefit.description}</p>
                    </article>
                ))}
            </div>
        </section>
    );
}
export default WhyChooseUs;