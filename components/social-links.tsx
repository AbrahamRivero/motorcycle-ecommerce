import React from 'react';
import { Facebook, Twitter, Youtube } from 'lucide-react';
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const SocialLinks = () => {
  const socialIcons = [
    { Icon: Facebook, href: '#' },
    { Icon: Twitter, href: '#' },
    { Icon: Youtube, href: '#' },
  ];

  return (
    <div className="absolute right-4 lg:right-8 top-1/2 transform -translate-y-1/2 flex flex-col gap-4 lg:gap-6 z-30">
      {socialIcons.map(({ Icon, href }, index) => (
        <Button
          key={index}
          variant="ghost"
          size="icon"
          className={cn(
            "w-8 h-8 lg:w-10 lg:h-10 rounded-full",
            "bg-white/10 backdrop-blur-md",
            "hover:bg-white/20 text-white",
            "shadow-lg hover:shadow-xl",
            "ring-2 ring-white/30"
          )}
          asChild
        >
          <a href={href}>
            <Icon className="w-5 h-5 lg:w-6 lg:h-6" />
          </a>
        </Button>
      ))}
    </div>
  );
};

export default SocialLinks;