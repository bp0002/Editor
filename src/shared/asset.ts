import { AbstractMesh, PickingInfo } from 'babylonjs';

export interface AssetElement<T> {
    img?: string;
    name?: string;
    data?: T;
}

export interface AssetContextMenu {
    id: string;
    text: string;
    img?: string;
    callback?: (asset?: AssetElement<any>) => void;
}

export interface IAssetComponent {
    id?: string;
    assetsCaption?: string;
    size?: number;

    onGetAssets? (): AssetElement<any>[] | Promise<AssetElement<any>[]>;
    
    onRemoveAsset? (asset: AssetElement<any>): void;
    onAddAsset? (asset: AssetElement<any>): void;
    
    onDragAndDropAsset? (targetMesh: AbstractMesh, asset: AssetElement<any>, pickInfo?: PickingInfo): void;
    onContextMenu? (): AssetContextMenu[];

    onSerializeAssets? (): AssetElement<any>[];
    onParseAssets? (data: AssetElement<any>[]): void;
}
