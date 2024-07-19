import { projects } from "@/data/projects";
import { sluglify } from "@/lib/slugify";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

export const Projects = () => {
  const [activeId, setActiveId] = useState<number | null>(null);
  const handleMouseOver = (id: number) => {
    setActiveId(id);
    localStorage.setItem("activeId", id.toString());
  };
  useEffect(() => {
    const activeId = localStorage.getItem("activeId");
    if (activeId) {
      setActiveId(Number(activeId));
    }
  }, []);
  return (
    <div className="grid pb-5 lg:grid-cols-[1fr_400px]">
      <div className="group relative left-12 hidden aspect-video h-[300px] lg:block">
        {projects.map(({ title, previewImg }, id) => (
          <a
            key={title}
            href={`/portfolio/${sluglify(title)}`}
            className="absolute -inset-14 lg:block"
          >
            <img
              key={previewImg}
              src={previewImg}
              alt="project image"
              className={cn(
                "relative -z-10 h-full w-full scale-90 rounded-xl object-cover object-center opacity-0 duration-500",
                {
                  "z-10 scale-100 opacity-80 group-hover:-translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100":
                    id === activeId,
                },
              )}
            />
          </a>
        ))}
        <span className="absolute -inset-14 rounded-xl bg-popover opacity-0 duration-300 group-hover:translate-x-1 group-hover:translate-y-1 group-hover:opacity-100" />
      </div>

      <div className="mx-auto flex w-[min(100%,400px)] flex-col gap-1">
        {projects.map(({ title }, id) => (
          <a
            className={cn(
              "flex h-12 w-full items-center gap-4 border-b-2 text-3xl font-bold capitalize duration-500",
              {
                "scale-110 bg-card": id === activeId,
              },
            )}
            href={`/portfolio/${sluglify(title)}`}
            key={title}
            onMouseOver={() => handleMouseOver(id)}
          >
            <span
              className={cn(
                "ml-3 aspect-square w-3 scale-0 rounded-full bg-primary duration-300",
                { "scale-100": id === activeId },
              )}
            />
            <h2>{title}</h2>
          </a>
        ))}
      </div>
    </div>
  );
};
