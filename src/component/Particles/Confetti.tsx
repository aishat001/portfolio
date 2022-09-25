import React from 'react';
import "./index.scss"
import { loadFull } from "tsparticles";
import { Engine } from 'tsparticles-engine';
import Particles from 'react-tsparticles';

const Confetti = () => {
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
        fpsLimit: 100,
        
        detectRetina: false,
        particles: {
          links: {
            enable: false
          },
          move: {
            enable: false
          },
          size: {
            value: 1
          }
        },
        preset: "triangles",

      }}

    /> 
    </div>
  )
}

export default Confetti
