/* INTIQ retailer deck: numbers used by the "how far can you go" simulator (slide 5).
   These are EXAMPLE values for the presentation. Change them here once the programme rules are final. */
window.INTIQ_CONFIG = {
  pointsRate: 0.04,                                   // points earned per rupee of purchase (4% example)
  levels: [10000, 60000, 110000, 160000],            // points needed for levels 1 to 4
  sliderMaxLakh: 50,                                  // slider range: 0 to 50 lakh in 3 months
  presets: { small: 11, medium: 19, large: 45 }       // 3-month purchase examples, in lakh (brand deck benchmarks)
};
