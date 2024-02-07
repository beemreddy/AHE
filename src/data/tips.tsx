let tips = [
    {
        key: "tips-to-prevent-algae",
        id: "mnO1mzDgKAo",
        name: "Tips to prevent algae",
        description: "Here are the 3 tips to prevent algae developing on grow deck and sponges in Aerogarden and other hydroponicss systems:"
    },
    {
        key: "top-10",
        id: "i0tdJZwNKFk",
        name: "Top 10 plants to grow in hydroponics"
    },
    {
        key: "fast-5",
        id: "UWvdv0FToao",
        name: "Fast growing plants"
    },
    {
        key: "germination-tips",
        id: "T9F9SjYG1HM",
        name: "Germination tips"
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