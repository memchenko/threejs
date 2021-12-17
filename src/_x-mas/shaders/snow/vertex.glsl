uniform float uTime;
uniform float uSize;

attribute float aScale;

void main() {
    vec4 modelPosition = modelMatrix * vec4(position, 1.0);
    modelPosition.y += sin(modelPosition.x * 10.0 + uTime);
    modelPosition.z += cos(modelPosition.x * 10.0 + uTime);

    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectionPosition = projectionMatrix * viewPosition;

    gl_Position = projectionPosition;
    
    gl_PointSize = uSize * aScale;
    gl_PointSize *= (1.0 / -viewPosition.z);
}
