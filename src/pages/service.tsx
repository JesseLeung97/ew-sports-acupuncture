import { useLocation } from "wouter-preact";
import routes from "../defines/routes.json";
import texts from "../defines/siteTexts.json";

const ServicePage = () => {
    const [ location ] = useLocation();
    if(location !== routes.service) {
        return null;
    }

    return (
        <>
        <section>
            <h3>{texts.servicePage.accessSection.title}</h3>
        </section>
        <section>
            <h3>{texts.servicePage.costSection.title}</h3>
        </section>
        <section>
            <h3>{texts.servicePage.paymentSection.title}</h3>
        </section>
        </>
    );
}

export {
    ServicePage
}