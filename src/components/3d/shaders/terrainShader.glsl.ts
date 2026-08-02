export const terrainVertexShader = /* glsl */ `
  varying vec2 vUv;
  varying float vElevation;
  varying vec3 vNormal;

  // Simple FBM noise function for heightmap vertex displacement
  float rand(vec2 n) { 
    return fract(sin(dot(n, vec2(12.9898, 4.1414))) * 43758.5453);
  }

  float noise(vec2 p){
    vec2 ip = floor(p);
    vec2 u = fract(p);
    u = u*u*(3.0-2.0*u);
    return mix(
      mix(rand(ip), rand(ip+vec2(1.0,0.0)), u.x),
      mix(rand(ip+vec2(0.0,1.0)), rand(ip+vec2(1.0,1.0)), u.x), u.y);
  }

  float fbm(vec2 p) {
    float total = 0.0;
    float amp = 1.0;
    for (int i = 0; i < 4; i++) {
      total += noise(p) * amp;
      p *= 2.0;
      amp *= 0.5;
    }
    return total;
  }

  void main() {
    vUv = uv;
    vec3 pos = position;
    
    // Displace Y based on procedural FBM noise
    float elevation = fbm(pos.xz * 0.1) * 3.5;
    pos.y += elevation;
    
    vElevation = elevation;
    vNormal = normalize(normalMatrix * normal);

    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`;

export const terrainFragmentShader = /* glsl */ `
  varying vec2 vUv;
  varying float vElevation;
  varying vec3 vNormal;

  void main() {
    // Dark Nordic basalt rock color
    vec3 basaltColor = vec3(0.04, 0.06, 0.09);
    // Glacier snow cap color
    vec3 snowColor = vec3(0.7, 0.82, 0.9);

    // Blend snow onto high elevation mountain peaks
    float snowMix = smoothstep(2.0, 3.2, vElevation);
    vec3 finalColor = mix(basaltColor, snowColor, snowMix);

    // Basic directional lighting rim
    vec3 lightDir = normalize(vec3(0.5, 1.0, 0.8));
    float diff = max(0.15, dot(vNormal, lightDir));

    gl_FragColor = vec4(finalColor * diff, 1.0);
  }
`;
