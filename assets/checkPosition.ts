
import { _decorator, Component, Node, find } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('checkPosition')
export class checkPosition extends Component {
    start () {
        const CubePosition = find('Cube', this.node)?.position
        console.log("🚀 ~ CubePosition", CubePosition)
        const SpherePosition = find('Sphere', this.node)?.position
        console.log("🚀 ~ SpherePosition", SpherePosition)
    } 
}
