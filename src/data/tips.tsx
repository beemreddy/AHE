let tips = [
    {
        key: "tips-to-prevent-algae",
        id: "mnO1mzDgKAo",
        name: "Tips to prevent algae",
        description: "Algae develops when light, water, and nutrition come together. Here are three tips to prevent algae from developing on the grow deck and sponges in AeroGarden and other hydroponic systems:",
        listitems: [
            { key: "0", name: "Delay adding nutrition until you see the seedlings." },
            { key: "1", name: "Cover the pod holes as much as possible using aluminum foil or another means." },
            { key: "2", name: "Cover any gaps on or around the grow deck to block light from entering the nutrient water." }
        ]
    },
    {
        key: "top-10",
        id: "i0tdJZwNKFk",
        name: "Top 10 plants to grow in hydroponics",
        description: "Here are the 10 best plant varieties that work well in many hydroponic systems:",
        listitems: [
            { key: "0", name: "Parris Island Cos Lettuce - A romaine variety." },
            { key: "1", name: "Tiny Tim Tomatoes - A micro dwarf cherry tomato variety that works in small systems like AeroGarden Harvest, iDoo, Spider Farmer, etc." },
            { key: "2", name: "Kale - A dwarf variety that works in small systems like AeroGarden Harvest, iDoo, Spider Farmer, etc." },
            { key: "3", name: "Spinach - Bloomsdale Long Standing Spinach is my favorite." },
            { key: "4", name: "Cilantro - Slow-bolt cilantro in AeroGarden Harvest can last up to 4 months." },
            { key: "5", name: "Jalapeño - Pot-a-peno is a dwarf jalapeño variety that works even in AeroGarden Harvest." },
            { key: "6", name: "Shishito Peppers - Works best in AeroGarden Bounty but can be managed in AeroGarden Harvest as well. Best when sautéed." },
            { key: "7", name: "Cucumbers - Iznik Cucumbers are the best and work in many hydroponic systems." },
            { key: "8", name: "Eggplants - Fairytale is the best variety." },
            { key: "9", name: "Radishes - French Breakfast Radishes are quick, decent in size, and work very well in many hydroponic systems. Leaves are edible too." }
        ]
    },
    {
        key: "fast-5",
        id: "UWvdv0FToao",
        name: "Fast growing plants",
        description: "Here are the 5 fast-growing plants that work best in many hydroponic systems:",
        listitems: [
            { key: "0", name: "Bok Choy - The fastest and long-lasting. Best used as salad greens and works in many hydroponic systems." },
            { key: "1", name: "Lettuce - A romaine variety. Almost always guaranteed to be successful when grown in many hydroponic systems." },
            { key: "2", name: "Spinach - Germination is tricky but it grows super fast once you get past the germination stage." },
            { key: "3", name: "Basil - Fast-growing and long-lasting. Dwarf Greek Basil is my favorite variety in every aspect." },
            { key: "4", name: "Cilantro - Germination is tricky but it grows super fast once you get past the germination stage." }
        ]
    },
    {
        key: "germination-tips",
        id: "T9F9SjYG1HM",
        name: "Germination tips",
        description: "The wet paper towel method is the best way to germinate almost all seed varieties. Transplant the sprouts or seedlings to hydroponics once they have germinated."
    }
  ];

  export function getTips() {
      return tips.map((v) => ({
        key: v.key,
        name: v.name,
        url: `#/tips/${v.key}`,
        description: v.description
      }));
  }
  
  export function getTipInfo(key: string){
    return tips.find((v) => v.key === key);
  }