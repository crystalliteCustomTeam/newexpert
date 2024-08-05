import dynamic from "next/dynamic"
import CTA from "./CTA";
import Hero from "./Hero";
import { ButtonVariants, Button } from "@/components/ui/Button"
const AutoPlaySlider = dynamic(() => import("./AutoPlaySlider"))
const AutoScrollSlider = dynamic(() => import("./AutoScrollSlider"))
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
  } from "@/components/ui/tooltip"
import SecondFoldHomePage from "./SecondFoldHomePage";
import Portfolio from "./portfolio";
import Services from "./Services";
import WhyChosse from "./WhyChosse";
import AmazonKindle from "./amazonKindle";

export {
    Hero,ButtonVariants,Button,CTA,AutoPlaySlider,AutoScrollSlider,Tooltip,TooltipContent,TooltipProvider,TooltipTrigger,SecondFoldHomePage,Portfolio,Services,WhyChosse,AmazonKindle
};
