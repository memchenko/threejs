uniform mat4 projectionMatrix;
uniform mat4 viewMatrix;
uniform mat4 modelMatrix;
// WOW! THIS DATA IS FROM JS TOO
uniform vec2 uFrequency;
uniform float uTime;

// THIS DATA TAKEN FROM
// GEOMETRY ATTRIBUTES! WOW !!
attribute vec3 position;
// attribute float aRandom;
attribute vec2 uv;

float loremIpsum(float c) {
    float a = 1.0;
    float b = 2.0;

    return a + b + c;
}

// varying float vRandom;
varying vec2 vUv;
varying float vElevation;

void main() {
    float fooBar = -0.123;
    int foo = 123;
    float c = fooBar * float(foo);
    bool bar = true;
    vec2 hey = vec2(1.0, 2.0);
    hey.x = 2.0;
    hey *= 3.0;
    vec3 color = vec3(hey, 0.0);
    color.r = 0.5;
    color.g = 0.1;
    color.b = 1.0;
    color.x = 0.5;
    color.y = 0.1;
    color.z = 1.0;
    vec2 newVector = color.xz;
    vec4 fourVector = vec4(color, 4.0);
    float w = fourVector.w;
    float a = fourVector.a;
    float result = loremIpsum(a);

    vec4 modelPosition = modelMatrix * vec4(position, 1.0);
    
    float elevation = sin(modelPosition.x * uFrequency.x - uTime) * 0.1;
    elevation += sin(modelPosition.y * uFrequency.y - uTime) * 0.1;

    modelPosition.z += elevation;
    // modelPosition.z += aRandom * 0.1;


    gl_Position = projectionMatrix * viewMatrix * modelPosition;
    // gl_Position.y += 1.0;

    // vRandom = aRandom;
    vUv = uv;
    vElevation = elevation;
}
