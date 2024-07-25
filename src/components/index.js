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

export {
    Hero,ButtonVariants,Button,CTA,AutoPlaySlider,AutoScrollSlider,Tooltip,TooltipContent,TooltipProvider,TooltipTrigger
};
