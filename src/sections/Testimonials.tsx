import { SectionHeader } from "@/components/SectionHeader";
import { TestimonialsCarousel } from "@/components/TestimonialsCarousel";
import { testimonialsSectionId } from "./constants";

export const TestimonialsSection = () => {
    return (
        <div className="py-16 lg:py-24">
            <section className="container" id={testimonialsSectionId}>
                <SectionHeader
                    heading1="Happy Clients"
                    heading2="What Clients Say About Me"
                    paragraph="Don't just take my word for it. See what my clients have to say about my work."
                />
                <div className="mt-12 lg:mt-20">
                    <TestimonialsCarousel />
                </div>
            </section>
        </div>
    );
};
