import classes from "./styles.module.css";
import { FunctionalComponent } from "preact";

const PageLayout: FunctionalComponent = ({ children }) => {
    return (
        <main class={classes.page_wrapper}>{ children }</main>
    );
}

export {
    PageLayout
}