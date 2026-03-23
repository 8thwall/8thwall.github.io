---
id: assets
---

# assets

## Description

This library includes functions that handle asset management.

## Types

### AssetRequest

| Parameter | Type   | Description          |
|-----------|--------|----------------------|
| id        | eid    | Unused               |
| url       | string | The url of the asset |

### AssetStatistics

| Parameter | Type   | Description                                      |
|-----------|--------|--------------------------------------------------|
| pending   | number | The number of pending assets                     |
| complete  | number | The number of assets that have completed loading |
| total     | number | The total number of assets to be loaded          |

### Asset

| Parameter | Type   | Description                     |
|-----------|--------|---------------------------------|
| data      | blob   | Asset data                      |
| remoteUrl | string | Where the data was fetched from |
| localUrl  | string | url constructed from data       |

## Functions

### load

Load an asset

``` ts
ecs.assets.load(assetRequest: AssetRequest) // -> Promise<Asset>
```

### clear

Clears the request asset from loaded assets.

``` ts
ecs.assets.clear(assetRequest: AssetRequest) // -> Promise<Asset>
```

### getStatistics

Gets statistics related to loading assets.

``` ts
ecs.assets.getStatistics() // -> AssetStatistics
```

