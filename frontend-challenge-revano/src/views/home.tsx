import React from "react";
import AppHero from "../Components/home/hero";
import AppFeature from "../Components/home/feature";

function AppHome(){
    return(
        <div className="main">
         <AppHero></AppHero>
         <AppFeature></AppFeature>

        </div>
    );
}

export default AppHome;