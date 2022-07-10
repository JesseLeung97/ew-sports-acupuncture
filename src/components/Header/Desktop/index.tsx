import classes from "./styles.module.css";
import { HeaderScrollHandler } from "../../util/HeaderScrollHandler";
import { useReferredState } from "../../util/hooks";
import siteTexts from "../../../defines/siteTexts.json";
import routes from "../../../defines/routes.json";
import { Logo } from "../../Logo";

const DesktopHeader = () => {
    const [isHeaderVisible, setIsHeaderVisible] = useReferredState<boolean>(true);

    const toggleDirection = () => {
        setIsHeaderVisible(!isHeaderVisible.current)
    }

    return (
        <HeaderScrollHandler initial="up" toggleDirection={toggleDirection}>
            <header class={`${classes.header} ${!isHeaderVisible.current ? classes.header_hidden : ""}`}>
                <div class={classes.header_inner}>
                    <a href={routes.home}><Logo className={classes.logo}/></a>
                    <nav class={classes.nav}>
                        <a class={classes.nav_item} href={routes.practitioner}>{siteTexts.pages.pracitioner}</a>
                        <a class={classes.nav_item} href={routes.testimonials}>{siteTexts.pages.testimonials}</a>
                        <a class={classes.nav_item} href={routes.faq}>{siteTexts.pages.faq}</a>
                        <a class={classes.nav_item} href={routes.service}>{siteTexts.pages.service}</a>
                    </nav>
                </div>
            </header>
        </HeaderScrollHandler>
    );
}

export {
    DesktopHeader
}