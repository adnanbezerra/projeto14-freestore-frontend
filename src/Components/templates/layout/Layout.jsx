import Header from "../header/Header";
import Footer from './../footer/Footer';
import { LayoutWrapper } from "./LayoutStyle";

export default function Layout({ children }) {
    return (
        <LayoutWrapper>
            <Header />
            <div className="content">
                {children}
            </div>
            <Footer />
        </LayoutWrapper>
    )
}