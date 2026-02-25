import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProject } from "../Redux/Thunk/ProjectThunk";
import commingSoon from "../assets/comming-soon.png";
import { SkeletonProjectCard } from "./SkeletonProjectCard";

export const ProjectsSection = () => {

  const dispatch = useDispatch();
  const { projects, loading, error } = useSelector((state) => state.project);

  useEffect(() => {
    dispatch(getProject());
  }, [dispatch]);

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (y - centerY) / 12;
    const rotateY = (centerX - x) / 12;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const resetTilt = (e) => {
    e.currentTarget.style.transform = "rotateX(0deg) rotateY(0deg)";
  };

  return (
    <section id="projects" className="py-24 px-6">

      <div className="container mx-auto max-w-7xl">

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-5 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          A collection of projects built using modern technologies focusing on
          performance, scalability and great user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

          {/* Skeleton */}
          {loading &&
            Array(6)
              .fill(0)
              .map((_, index) => (
                <SkeletonProjectCard key={index} />
              ))
          }

          {/* Error */}
          {error && (
            <p className="text-red-500 text-center col-span-3">
              Failed to load projects
            </p>
          )}

          {/* Projects */}
          {!loading && projects && projects.map((project, index) => (

            <div
              key={project._id}
              style={{ animationDelay: `${index * 0.15}s` }}
              className="group tilt-card bg-card border border-border rounded-2xl overflow-hidden transition-transform duration-200"
              onMouseMove={handleMouseMove}
              onMouseLeave={resetTilt}
            >

              <div className="tilt-inner">

                {/* Image */}
                <div className="relative h-52 overflow-hidden">

                  <img
                    loading="lazy"
                    src={project?.demo ? commingSoon : project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
                  />

                  {/* Hover Overlay */}
                  {!project?.demo && (
                    <div className="absolute inset-0 bg-background/0 group-hover:bg-background/60 transition-all duration-700 ease-out flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100">

                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="p-3 rounded-full bg-primary text-primary-foreground shadow-md hover:scale-110 transition"
                      >
                        <ExternalLink size={18}/>
                      </a>

                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="p-3 rounded-full bg-primary text-primary-foreground shadow-md hover:scale-110 transition"
                      >
                        <Github size={18}/>
                      </a>

                    </div>
                  )}

                </div>

                {/* Content */}
                <div className="p-6 flex flex-col gap-4">

                  {project?.demo ? (

                    <div className="flex flex-col items-center justify-center text-center gap-3 py-6">

                      <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-xl animate-pulse">
                        🚀
                      </div>

                      <h3 className="text-lg font-semibold text-primary">
                        Coming Soon
                      </h3>

                      <p className="text-sm text-muted-foreground">
                        New project launching soon
                      </p>

                    </div>

                  ) : (

                    <>
                      {/* Tags */}
                      {project?.tags?.length > 0 && (

                        <div className="flex flex-wrap gap-2">

                          {project.tags.map((tag, i) => (

                            <span
                              key={i}
                              className="px-3 py-1 text-xs font-semibold rounded-full bg-primary/10 text-primary border border-primary/20 transition hover:bg-primary hover:text-primary-foreground"
                            >
                              {String(tag).toUpperCase()}
                            </span>

                          ))}

                        </div>

                      )}

                      {/* Title */}
                      <h3 className="text-lg font-semibold tracking-wide text-foreground">
                        {project.title}
                      </h3>

                      {/* Description */}
                      <p className="text-muted-foreground text-sm line-clamp-3">
                        {project.description}
                      </p>

                    </>
                  )}

                </div>

              </div>

            </div>

          ))}

        </div>

        {/* Github Button */}
        <div className="text-center mt-20">

          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/ganjeliyajay"
          >
            View More on Github
            <ArrowRight size={16}/>
          </a>

        </div>

      </div>

    </section>
  );
};