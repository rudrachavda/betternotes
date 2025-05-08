"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";


export const Heading = () => {
    return (
        <div className="max-w-3xl space-y-4">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
                Your Ideas, documents, and stuff. Unified. Welcome to <span 
                className="underline">Botion</span>
            </h1>
            <h3 className="text-base sm:text-cl md:text-2xl font-medium">
                Botion is the Connected workspace where <br/>
                better, faster work happens.
            </h3>
            <Button>
                Enter Botion
                <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
        </div>
    )
}