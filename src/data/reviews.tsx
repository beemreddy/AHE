let reviews = [
    {
        key: "letpot-max",
        id: "W72PW8Bru3o",
        name: "LetPot Max 21-pod hydroponics system",
        description: "LetPot Max comes with very good tech specs with 36 wattage lights, 7.5 liters bowl capacity, 21-pod grow deck, auto-refilling of water, auto-feeding, dimmable lights, 19 inches height adjustment, built-in WiFi with app support, and a huge control panel."
    },
    {
        key: "letpot-senior",
        id: "ErDQJatss8Q",
        name: "LetPot Senior 12-pod hydroponics system",
        description: "LetPot Senior is a 12-pod hydroponics system with stainless steel finished bowl with 5.5 liters water capacity, 24 wattage lights, 19 inches height adjustment, and built-in WiFi with app support."
    },
    {
        key: "letpot-mini",
        id: "Z5RxyiVui_0",
        name: "LetPot Mini 5-pod hydroponics system",
        description: "LetPot Mini is cute little hydroponics system with 1.5 liters water bowl, 10 wattage lights, 12 inches height adjustment, and built-in WiFi with app support."
    },
    {
        key: "spider-farmer",
        id: "iKYasa1g12A",
        name: "Spider Farmer hydroponics system",
        description: "Spider Farmer comes with very good tech specs with 36 wattage lights, 6 liters bowl capacity, 12-pod grow deck, adjustable lights and light timings, and 14 inches height adjustment."
    },
    {
        key: "ahopegarden-8-pod",
        id: "_o8OvvC5U8E",
        name: "AHopeGarden 8-pod hydroponics system",
        description: "AHopeGarden 8-pod hydroponics system comes with 20 wattage lights, 3 liters bowl capacity, and 15 inches height adjustment. It works very well for lettuce, herbs, and most leafy green vegetables."
    },
    {
        key: "ahopegarden-12-pod-transparent",
        id: "kryeytL_VsU",
        name: "AHopeGarden 12-pod transparent hydroponics system",
        description: "AHopeGarden 12-pod transparent comes with 20 wattage lights, transparent bowl with 4 liters water capacity, and 15 inches height adjustment. It works very well for lettuce, herbs, most leafy green vegetables, and fruiting plnts like tomatoes and cucumbers."
    },
    {
        key: "idoo-8-pod",
        id: "GUrErWGLNvQ",
        name: "iDoo 8-pod hydroponics system",
        description: "iDoo 8-pod hydroponics system comes with 20 wattage lights, 3 liters bowl capacity, and 15 inches height adjustment. It works very well for lettuce, herbs, and most leafy green vegetables."
    }
  ];

  export function getReviews() {
      return reviews.map((v) => ({
        key: v.key,
        name: v.name,
        url: `#/reviews/${v.key}`
      }));
  }
  
  export function getReviewDetails(key: string){
    return reviews.find((v) => v.key === key);
  }