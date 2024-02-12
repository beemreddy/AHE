let varieties = [
    {
        key: "tiny-tim",
        id: "TDwWC3YqJjM",
        name: "Tiny Tim Micro Dwarf",
        description: "Tiny Tim is a micro dwarf cherry tomato variety. I have a strong feeling that this is the variety AeroGarden is selling as Red Heirloom. Tiny Tim is my favorite variety among micro dwarf cherry tomatoes. This variety is prolific, long-living, and tasty. I have had these plants for more than a year."
    },
    {
        key: "ag-red-cherry",
        id: "NF5Oz6HY3OU",
        name: "Aerogarden Red Cherry",
        description: "AeroGarden Red Cherry tomatoes are micro dwarf cherry tomatoes. Plants will stay mostly under 1 foot tall and produce lots of cherry tomatoes. The growth will follow the 30-30-30 rule, meaning 30 days to flowering, 30 days to tomatoes, and 30 days for ripening. So, approximately in 90 days, we will start harvesting well-ripened tomatoes."
    },
    {
        key: "red-robin",
        id: "9uWR6dp0nIQ",
        name: "Red Robin",
        description: "Red Robin tomatoes are micro dwarf cherry tomatoes. Plants will stay mostly under 1 foot tall but I noticed some branches went well above 1 feet and I had to trim the branches."
    },
    {
        key: "orange-hat",
        id: "TtWMlTqVCgo",
        name: "Orange Hat Micro Dwarf",
        description: "If you are bored of red cherry tomato varieties, try Orange Hat. As its name suggests, these are orange in color and taste quite good. Plants are prolific and produce lots of tomatoes. The growth will follow the 30-30-30 rule, meaning 30 days to flowering, 30 days to tomatoes, and 30 days for ripening. So, approximately in 90 days, we will start harvesting well-ripened tomatoes."
    },
    {
        key: "42-day",
        id: "hCAu6fTtZZc",
        name: "42 Day",
        description: "The 42-day tomato variety is a fast-growing mega cherry tomatoes. The taste is very authentic, and the plants are prolific. AeroGarden Bounty Basic is best to grow this variety, but it can also be managed in AeroGarden Harvest."
    },
    {
        key: "venus-micro-dwarf",
        id: "100kT9dQ6iE",
        name: "Venus Micro Dwarf",
        description: ""
    },
    {
        key: "yellow-micro-dwarf",
        id: "EeQrLpdM-OE",
        name: "Yellow Micro Dwarf"
    },
    {
        key: "wherokowhai",
        id: "aUUgGMRYfd8",
        name: "Wherokowhai",

    }
  ];

  export function getTomatoVarieties() {
      return varieties.map((v) => ({
        key: v.key,
        name: v.name,
        url: `#/tomato/${v.key}`
      }));
  }
  
  export function getPlantInfo(key: string){
    return varieties.find((v) => v.key === key);
  }