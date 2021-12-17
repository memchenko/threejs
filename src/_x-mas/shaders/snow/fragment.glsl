void main() {
    float strength = step(0.5, distance(gl_PointCoord, vec2(0.5)));
    strength = 1.0 - strength;

    gl_FragColor = vec4(strength, strength, strength, strength);
}
