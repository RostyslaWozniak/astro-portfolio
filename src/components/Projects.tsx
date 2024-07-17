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
    <div className="flex w-full items-center justify-around">
      <a
        href={`/portfolio/${sluglify(projects[activeId || 0].title)}`}
        className="hidden lg:block"
      >
        <img
          src={projects[activeId || 0].previewImg}
          alt="project image"
          className="aspect-video h-[300px] rounded-xl object-cover object-center opacity-70 shadow-sm duration-300 hover:scale-[1.02] hover:opacity-100 hover:shadow-md"
        />
      </a>
      <div className="flex flex-col gap-3">
        {projects.map(({ title }, id) => (
          <a
            className={cn(
              "flex min-w-[300px] items-center gap-4 border-b-2 text-3xl font-bold capitalize duration-300",
              {
                "scale-110": id === activeId,
              },
            )}
            href={`/portfolio/${sluglify(title)}`}
            key={title}
            onMouseOver={() => handleMouseOver(id)}
          >
            <span
              className={cn(
                "aspect-square w-3 scale-0 rounded-full bg-primary duration-300",
                { "scale-100": id === activeId },
              )}
            />
            {title}
          </a>
        ))}
      </div>
    </div>
  );
};
