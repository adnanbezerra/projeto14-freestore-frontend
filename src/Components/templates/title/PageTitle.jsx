import { PageTitleWrapper } from "./PageTitleStyle";

export default function PageTitle({ title, subtitle }) {
    return (
        <PageTitleWrapper>
            <h1>{title} <span>{subtitle}</span></h1>
        </PageTitleWrapper>
    )
}