import React from 'react'
import Particles from 'react-tsparticles'
// import { loadTrianglesPreset } from "tsparticles-preset-triangles";
import { Engine } from 'tsparticles-engine';
import { loadFull } from 'tsparticles';


const Triangle = () => {
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
            init={particlesInit}

      options={
          {
            preset: "triangles"
          }
      }/>
    </div>
  )
}

export default Triangle
