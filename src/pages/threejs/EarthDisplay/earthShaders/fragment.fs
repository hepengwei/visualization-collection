uniform vec3 glowColor;
uniform float bias;
uniform float power;
uniform float time;
varying vec3 vp;
varying vec3 vNormal;
varying vec3 vPositionNormal;
uniform float scale;
// 获取纹理
uniform sampler2D map;
// 纹理坐标
varying vec2 vUv;

void main(void){
  float a = pow( bias + scale * abs(dot(vNormal, vPositionNormal)), power );
  if(vp.y > time && vp.y < time + 20.0) {
    float t =  smoothstep(0.0, 0.8,  (1.0 - abs(0.5 - (vp.y - time) / 20.0)) / 3.0  );
    gl_FragColor = mix(gl_FragColor, vec4(glowColor, 1.0), t * t );
  }
  gl_FragColor = mix(gl_FragColor, vec4( glowColor, 1.0 ), a) + texture2D( map, vUv );
}