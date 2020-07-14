import React from 'react';
import './App.scss';
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import HeroScreen from "./screens/hero-screen/HeroScreen";
import FeaturesScreen from "./screens/features-screen/FeaturesScreen";
import AboutScreen from "./screens/about-screen/AboutScreen";
import ContactScreen from "./screens/contact-screen/ContactScreen";
import ReviewsScreen from "./screens/reviews-screen/ReviewsScreen";

function App() {
    return (
        <div className="App">
            <Header/>
            <main>
                <HeroScreen/>
                <ReviewsScreen/>
                <FeaturesScreen/>
                <AboutScreen/>
                <ContactScreen/>
            </main>
            <Footer/>
        </div>
    );
}

export default App;
