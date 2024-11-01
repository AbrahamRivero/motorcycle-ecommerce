import {
  BatteryCharging,
  CircleGauge,
  SmartphoneCharging,
  MapPinned,
} from "lucide-react";

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
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <p className="mt-2 text-pretty text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl lg:text-balance">
            Our Features & Facilities
          </p>
          <p className="mt-6 text-lg/8 text-slate-300">
            Quis tellus eget adipiscing convallis sit sit eget aliquet quis.
            Suspendisse eget egestas a elementum pulvinar et feugiat blandit at.
            In mi viverra elit nunc.
          </p>
        </div>
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-0">
            {features.map((feature) => (
              <div
                key={feature.name}
                className="flex flex-col items-start sm:items-center"
              >
                <div className="md:flex-shrink-0">
                  <div className="flow-root">
                    <feature.icon
                      aria-hidden="true"
                      className="h-12 w-12 text-white"
                    />
                  </div>
                </div>

                <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6 text-left sm:text-center">
                  <h3 className="text-base font-medium text-slate-100">
                    {feature.name}
                  </h3>
                  <p className="mt-3 text-sm text-slate-300">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
