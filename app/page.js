import LocationDetector from "@/components/LocationDetector";
import { Suspense } from "react";

export default function Home() {
    return (
    <Suspense fallback={<div className="text-center text-lg">Loading...</div>}>
      <LocationDetector />
    </Suspense>
  );;
}
