import MaxWidthWrapper from "@/components/MaxWidthWrapper.astro";
import { Card, CardHeader } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { projects } from "@/data/projects";

export const Projects = () => {
  return (
    <Carousel
      opts={{
        align: "center",
        loop: true,
      }}
    >
      <CarouselPrevious className="hidden md:flex" />
      <CarouselContent className="flex items-center lg:p-2">
        {Object.values(projects).map(({ title, img, pathUrl }) => (
          <CarouselItem key={title} className="group md:basis-1/2 lg:basis-1/3">
            <Card className="cursor-pointer overflow-hidden transition-transform duration-1000 lg:group-hover:rotate-2">
              <a href={`/portfolio${pathUrl}`}>
                <img
                  src={img}
                  alt={`${title} image`}
                  width={300}
                  height={200}
                  className="h-[180px] w-full object-cover object-top duration-300 group-hover:scale-110 group-hover:opacity-70 lg:group-hover:rotate-2"
                />

                <CardHeader className="flex flex-col items-start">
                  <h3 className="text-lg font-semibold capitalize tracking-tight">
                    {title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    TODO: Description.
                  </p>
                </CardHeader>
              </a>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselNext className="hidden md:flex" />
    </Carousel>
  );
};
