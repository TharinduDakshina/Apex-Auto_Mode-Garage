import {useGLTF} from "@react-three/drei";
import * as THREE from "three";

interface PropsCarModel {
    color: string;
    rotationY: number;
    rotationZ: number;
    parts : {
        spoiler:boolean;
        frontBumper: boolean;
        rearBumper: boolean;
        hood: boolean;
        roof: boolean;
        doors: boolean;
    }
}

export default function CarModel({ color, rotationY, rotationZ, parts }: PropsCarModel) {
    const { scene } = useGLTF("/models/tesla_model3.glb");
    // Change car material color
    scene.traverse((child: THREE.Object3D) => {
        if (child instanceof THREE.Mesh) {
            const material = child.material;

            if (material instanceof THREE.MeshStandardMaterial ||
                material instanceof THREE.MeshPhysicalMaterial ||
                material instanceof THREE.MeshLambertMaterial ||
                material instanceof THREE.MeshPhongMaterial ||
                material instanceof THREE.MeshBasicMaterial) {
                material.color.set(color);
            }
        }
    });

    // Toggle parts
    const togglePart = (name: string, state: boolean) =>{
        scene.traverse((child: THREE.Object3D) => {
            if (child.name.includes(name)) {
                child.visible = state;
            }
        });
    }


    togglePart("kit_1ANC_RearWing_", parts.spoiler);             // Spoiler
    togglePart("kit_1SM_FrontKit_2001_", parts.frontBumper);     // Front bumper
    togglePart("kit_1SM_RearKit_2001_", parts.rearBumper);       // Rear bumper
    togglePart("kit_1SM_Hood_2001_", parts.hood);                // Hood
    togglePart("MANC_Backcoverholder_", parts.roof);             // Roof / convertible top
    togglePart("MANC_Door_", parts.doors);                       // All doors

    return (
        <group rotation={[0, rotationY, rotationZ]} scale={150}>
            <primitive object={scene} />
        </group>
    );
}