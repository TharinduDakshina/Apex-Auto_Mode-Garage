import Header from "@/app/components/landingPage/header";
import HeroSection from "@/app/components/landingPage/heroSection";
import ServiceSection from "@/app/components/landingPage/serviceSection";
import CTASection from "@/app/components/landingPage/ctaSection";

export  default function LandingPage(){
    return (
        <div className="flex flex-col overflow-auto">
            <Header />
            <HeroSection/>
            <ServiceSection/>
            <CTASection/>
        </div>
    )
}