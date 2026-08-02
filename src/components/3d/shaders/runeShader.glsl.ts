export const runeVertexShader = /* glsl */ `
  varying vec2 vUv;
  varying vec3 vNormal;
  varying vec3 vPosition;

  void main() {
    vUv = uv;
    vNormal = normalize(normalMatrix * normal);
    vPosition = position;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

export const runeFragmentShader = /* glsl */ `
  uniform float uTime;
  uniform vec3 uColor;
  uniform float uIntensity;

  varying vec2 vUv;
  varying vec3 vNormal;
  varying vec3 vPosition;

  // Simple pseudo-random noise generator
  float rand(vec2 n) { 
    return fract(sin(dot(n, vec2(12.9898, 4.1414))) * 43758.5453);
  }

  float noise(vec2 p){
    vec2 ip = floor(p);
    vec2 u = fract(p);
    u = u*u*(3.0-2.0*u);
    float res = mix(
      mix(rand(ip), rand(ip+vec2(1.0,0.0)), u.x),
      mix(rand(ip+vec2(0.0,1.0)), rand(ip+vec2(1.0,1.0)), u.x), u.y);
    return res*res;
  }

  void main() {
    // Pulse calculation based on vertical position and time
    float pulse = sin(vPosition.y * 3.0 - uTime * 2.5) * 0.5 + 0.5;
    float n = noise(vUv * 10.0 + uTime * 0.5);

    vec3 glow = uColor * (pulse * 1.8 + n * 0.4) * uIntensity;
    
    // Rim lighting (Fresnel glow effect)
    vec3 viewDir = vec3(0.0, 0.0, 1.0);
    float fresnel = pow(1.0 - dot(vNormal, viewDir), 2.5);

    vec3 finalColor = glow + uColor * fresnel * 0.8;
    gl_FragColor = vec4(finalColor, 1.0);
  }
`;
