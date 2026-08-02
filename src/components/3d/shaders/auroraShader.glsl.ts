export const auroraVertexShader = /* glsl */ `
  varying vec2 vUv;
  varying vec3 vPosition;

  void main() {
    vUv = uv;
    vPosition = position;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

export const auroraFragmentShader = /* glsl */ `
  uniform float uTime;
  varying vec2 vUv;
  varying vec3 vPosition;

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

  void main() {
    // Wave movement along UV coordinates
    float wave1 = noise(vUv * vec2(4.0, 1.0) + vec2(uTime * 0.2, 0.0));
    float wave2 = noise(vUv * vec2(8.0, 2.0) - vec2(uTime * 0.3, 0.0));

    float curtain = wave1 * wave2;

    // Glowing cyan & purple aurora borealis colors
    vec3 emerald = vec3(0.0, 0.95, 0.6);
    vec3 purple = vec3(0.5, 0.0, 0.9);

    vec3 auroraColor = mix(emerald, purple, sin(vUv.x * 3.14 + uTime) * 0.5 + 0.5);

    float alpha = curtain * smoothstep(0.0, 0.3, vUv.y) * smoothstep(1.0, 0.6, vUv.y) * 0.65;

    gl_FragColor = vec4(auroraColor * curtain * 2.0, alpha);
  }
`;
