export const oceanVertexShader = /* glsl */ `
  uniform float uTime;
  varying vec2 vUv;
  varying vec3 vNormal;
  varying vec3 vPosition;

  void main() {
    vUv = uv;
    vec3 pos = position;

    // Gerstner Wave 1
    float w1 = sin(pos.x * 0.4 + uTime * 1.5) * 0.4;
    // Gerstner Wave 2
    float w2 = cos(pos.z * 0.3 + uTime * 1.2) * 0.3;

    pos.y += w1 + w2;
    vPosition = pos;
    vNormal = normalize(normalMatrix * normal);

    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`;

export const oceanFragmentShader = /* glsl */ `
  uniform float uTime;
  varying vec2 vUv;
  varying vec3 vNormal;
  varying vec3 vPosition;

  void main() {
    // Deep dark ocean liquid colors
    vec3 deepWater = vec3(0.01, 0.03, 0.06);
    vec3 crestWater = vec3(0.08, 0.2, 0.35);

    float crest = smoothstep(0.1, 0.5, vPosition.y);
    vec3 waterColor = mix(deepWater, crestWater, crest);

    // Fresnel reflection highlight
    vec3 viewDir = vec3(0.0, 0.0, 1.0);
    float fresnel = pow(1.0 - max(0.0, dot(vNormal, viewDir)), 3.0);

    vec3 finalColor = waterColor + vec3(0.3, 0.6, 0.8) * fresnel * 0.5;
    gl_FragColor = vec4(finalColor, 0.95);
  }
`;
