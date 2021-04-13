var canvas = document.getElementById("render-canvas");
var engine = new BABYLON.Engine(canvas);
var scene = new BABYLON.Scene(engine);
scene.clearColor = new BABYLON.Color3(0.8, 0.8, 0.8);
var camera = new BABYLON.UniversalCamera("UniversalCamera", new BABYLON.Vector3(0, 25, 0), scene);
camera.setTarget(BABYLON.Vector3.Zero());
camera.attachControl(canvas, true);
var light = new BABYLON.PointLight("light", new BABYLON.Vector3(10, 10, 0), scene);

for (var i = 0; i < 1000; i++) {
  var geo = new BABYLON.MeshBuilder.CreateBox("box", { size: 0.5 }, scene)
  var mat = new BABYLON.StandardMaterial("material", scene);
  mat.emissiveColor = new BABYLON.Color3(Math.random(), Math.random(), Math.random());
  geo.material = mat;

  geo.position.x = (Math.random()-0.5) * 40
  geo.position.y = (Math.random()-0.5) * 40
  geo.position.z = (Math.random()-0.5) * 40

  geo.rotation.x = Math.random()
  geo.rotation.y = Math.random()
  geo.rotation.z = Math.random()
}


var renderLoop = function () {
  scene.render();
};
engine.runRenderLoop(renderLoop);