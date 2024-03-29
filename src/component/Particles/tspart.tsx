import React from 'react';
import "./index.scss"
import { loadFull } from "tsparticles";
import { Engine } from 'tsparticles-engine';
import Particles from 'react-tsparticles';

const Confe = () => {
    const particlesInit = async (main: Engine) => {
        console.log(main);
    
        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(main);
      };

  return (
    <div>
       <Particles
      id="tsparticles"
      init={particlesInit}
      //@ts-ignore
      // loaded={particlesLoaded}

      options={{
        fullScreen: true,
  fpsLimit: 60,
  detectRetina: true,
  particles: {
    number: {
      value: 0
    },
    color: {
      value: ["#FF5A86", "#953AFE", "#FFC326", "#46C0FF"]
    },
    shape: {
      type: ["square", "circle"]
    },
    opacity: {
      value: 1,
      animation: {
        enable: true,
        minimumValue: 0,
        speed: 0.5,
        startValue: "max",
        destroy: "min"
      }
    },
    size: {
      value: 5 * 1
    },
    links: {
      enable: false
    },
    life: {
      duration: {
        value: 200 / 60
      },
      count: 1
    },
    move: {
      angle: {
        value: 45,
        offset: 0
      },
      drift: {
        min: -0,
        max: 0
      },
      enable: true,
      gravity: {
        enable: true,
        acceleration: 20
      },
      speed: 90,
      decay: 1 - 0.9,
      direction: -90,
      random: true,
      straight: false,
      outModes: {
        default: "none",
        bottom: "destroy"
      }
    },
    rotate: {
      value: {
        min: 0,
        max: 360
      },
      direction: "random",
      animation: {
        enable: true,
        speed: 60
      }
    },
    tilt: {
      direction: "random",
      enable: true,
      value: {
        min: 0,
        max: 360
      },
      animation: {
        enable: true,
        speed: 60
      }
    },
    roll: {
      darken: {
        enable: true,
        value: 25
      },
      enable: true,
      speed: {
        min: 15,
        max: 25
      }
    },
    wobble: {
      distance: 20,
      enable: true,
      speed: {
        min: -15,
        max: 15
      }
    }
  },
  emitters: {
    startCount: 0,
    position: { x: 50, y: 50 },
    size: {
      width: 0,
      height: 0
    },
    rate: {
      delay: 0,
      quantity: 10
    },
    life: {
      duration: 0,
      count: 1
    }
  }
      }}

    /> 
    </div>
  )
}

export default Confe

