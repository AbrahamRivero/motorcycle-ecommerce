import {
  BatteryCharging,
  CircleGauge,
  SmartphoneCharging,
  MapPinned,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    name: "GPS Tracking or antitheft",
    description: "Checking the Proxy fire and configurations running",
    icon: MapPinned,
  },
  {
    name: "Super Charging Battery",
    description: "Checking the Proxy fire and configurations running",
    icon: BatteryCharging,
  },
  {
    name: "Monitoring Speed Trip Status",
    description: "Checking the Proxy fire and configurations running",
    icon: CircleGauge,
  },
  {
    name: "Power Your Ride Conditions",
    description: "Checking the Proxy fire and configurations running",
    icon: SmartphoneCharging,
  },
];

export default function Features() {
  return (
    <section className="py-24  sm:py-32 bg-secondary/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
            Our Features & Facilities
          </h2>
          <p className="mt-6 text-lg leading-8 text-primary-foreground/80">
            Quis tellus eget adipiscing convallis sit sit eget aliquet quis.
            Suspendisse eget egestas a elementum pulvinar et feugiat blandit at.
            In mi viverra elit nunc.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <Card key={feature.name} className="bg-primary text-primary-foreground">
              <CardHeader>
                <feature.icon className="h-8 w-8 text-secondary" aria-hidden="true" />
                <CardTitle className="mt-4">{feature.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-primary-foreground/80">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}