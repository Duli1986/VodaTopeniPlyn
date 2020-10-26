import React from "react";
import Contact from "../components/Contacts/Contact";


function Index() {
    document.documentElement.classList.remove("nav-open");
    React.useEffect(() => {
        document.body.classList.add("index");
        return function cleanup() {
            document.body.classList.remove("index");
        };
    });
    return (
        <>
            <div className="main">

                <div id="kontakt">
                    <Contact/>
                </div>
            </div>
        </>
    );

}

export default Index;