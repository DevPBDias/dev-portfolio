import {
  Carousel,
  CarouselContent,
  CarouselNavigation,
  CarouselItem,
} from "@/components/ui/carousel";
import CardProject from "./CardProject";
import { Project, projects } from "@/constants/projects-data";

export function CarouselProjects() {
  return (
    <div className="relative w-full px-4">
      <Carousel>
        <CarouselContent className="-ml-4">
          {projects.map((project: Project, idx: number) => (
            <CarouselItem
              key={idx}
              className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3"
            >
              <CardProject project={project} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselNavigation
          className="absolute -top-14 left-auto w-full justify-end gap-2"
          classNameButton="cursor-pointer bg-zinc-800 *:stroke-zinc-50 dark:bg-zinc-200 dark:*:stroke-zinc-800 hover:scale-105"
          alwaysShow
        />
      </Carousel>
    </div>
  );
}
