import { useLocation } from "wouter-preact";
import routes from "../defines/routes.json";

const TestimonialsPage = () => {
    const [ location ] = useLocation();
    if(location !== routes.testimonials) {
        return null;
    }

    return (
        <>TESTIMONIALS</>
    );
}

export {
    TestimonialsPage
}