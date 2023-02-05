import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);
  return (
    <div>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: "transparent",
            },

            position: "50% 50%",
            repeat: "no-repeat",
            size: "50%",
          },
          fullScreen: {
            zIndex: 1,
          },
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "repulse",
              },
              onHover: {
                enable: true,
                mode: "stars",
              },
            },
            modes: {
              bubble: {
                distance: 150,
                duration: 2,
                opacity: 0,
                size: 10,
              },
              grab: {
                distance: 400,
              },
              repulse: {
                distance: 400,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            shape: {
              type: "circle",
              options: {
                sides: 5,
              },
            },
            links: {
              color: {
                value: "#ffffff",
              },
              distance: 150,
              opacity: 0.4,
            },
            move: {
              attract: {
                rotate: {
                  x: 600,
                  y: 600,
                },
              },
              enable: true,
              outModes: {
                bottom: "out",
                left: "out",
                right: "out",
                top: "out",
              },
              random: true,
              speed: 1,
            },
            number: {
              density: {
                enable: true,
              },
              value: 160,
            },
            opacity: {
              random: {
                enable: true,
              },
              value: {
                min: 0,
                max: 1,
              },
              animation: {
                enable: true,
                speed: 4,
                minimumValue: 0,
              },
            },
            size: {
              random: {
                enable: true,
              },
              value: {
                min: 1,
                max: 3,
              },
              animation: {
                speed: 4,
                minimumValue: 0.3,
              },
            },
          },
        }}
        // options={{
        //   background: {
        //     color: {
        //       value: "transparent",
        //     },
        //   },
        //   fpsLimit: 120,
        //   interactivity: {
        //     events: {
        //       onClick: {
        //         enable: true,
        //         mode: "push",
        //       },
        //       onHover: {
        //         enable: true,
        //         mode: "repulse",
        //       },
        //       resize: true,
        //     },
        //     modes: {
        //       push: {
        //         quantity: 4,
        //       },
        //       repulse: {
        //         distance: 200,
        //         duration: 0.4,
        //       },
        //     },
        //   },
        //   particles: {
        //     color: {
        //       value: "#ffffff",
        //     },
        //     links: {
        //       color: "#ffffff",
        //       distance: 150,
        //       enable: true,
        //       opacity: 0.5,
        //       width: 1,
        //     },
        //     collisions: {
        //       enable: true,
        //     },
        //     move: {
        //       directions: "none",
        //       enable: true,
        //       outModes: {
        //         default: "bounce",
        //       },
        //       random: false,
        //       speed: 1.5,
        //       straight: false,
        //     },
        //     number: {
        //       density: {
        //         enable: true,
        //         area: 800,
        //       },
        //       value: 80,
        //     },
        //     opacity: {
        //       value: 0.5,
        //     },
        //     shape: {
        //       type: "circle",
        //     },
        //     size: {
        //       value: { min: 1, max: 5 },
        //     },
        //   },
        //   detectRetina: true,
        // }}
      />
    </div>
  );
};

export default ParticlesBackground;
