# Recognition of Tiles

This is part research and part practical application

## Approach

Having one system that can categorize everything seems to be trickier and would require tons of training (basically money) which we don't have. It would be easier
for us to use a variety of techniques to classify each tile type more simply
and combine the findings to make identification more accurate / possibly more
generalized.

```
    // Point tiles
    static Flower = new TileType("hua", 0);
    static Season = new TileType("tian", 1);
    // Basic Tiles
    static Bamboo = new TileType("tiao", 2);
    static Circle = new TileType("tong", 3);
    static TenThousand = new TileType("wan", 4);
    // Honor Tiles
    // Cardinal Directions
    static East = new TileType("dong", 5);
    static South = new TileType("nan", 6);
    static West = new TileType("xi", 7);
    static North = new TileType("bei", 8);
    // Dragons
    static RedDragon = new TileType("hong zhong", 9);
    static GreenDragon = new TileType("fa", 10);
    static WhiteDragon = new TileType("bai ban", 11);

```

### Primary Tile Type Classification

-   Bamboo
    -   Shape Recognition / Shape Recognition.
    -   Perhaps possible to do some kind of stick figure recognition
-   Circle
    -   Pattern Recognition
-   Ten Thousand
    -   Chinese OCR can probably read this as 1-9 \* ten thousand
-   Cardinal Directions
    -   Chinese OCR might be able to read this but it's caligraphy
-   Dragons:
    -   Red
        -   OCR for Red Zhong
    -   Green
        -   OCR for the Fa character
    -   White (blank?)
        -   Shape recognition?

### Strech Goal Tile Types

-   Flower Tiles
-   Season Tiles
-   Dragon image dragons (require color matching)
    -   Applicable to tiles we don't have so not a primary concern

### Special Hands

-   Recognizing Gang
    -   Shape recognition? This
