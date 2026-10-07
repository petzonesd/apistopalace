// Retail links into the PetZoneSD store. Not a live inventory feed: copy always asks readers to confirm availability.
export const storeUrl='https://www.petzonesd.com/apistogrammas/';
export const shop={
cacatuoides:{note:'PetZoneSD regularly carries cockatoo cichlids, most often the Triple Red form.',links:[{label:'Shop Triple Red cockatoos',url:'https://www.petzonesd.com/triple-red-cockatoo-apisto-cichlid-apistogramma-cacatuoides/'},{label:'Shop Orange Flash cockatoos',url:'https://www.petzonesd.com/orange-flash-dwarf-cockatoo-cichlid-apistogramma-cacatuoides/'}]},
borellii:{links:[{label:'Shop A. borellii',url:'https://www.petzonesd.com/apistogramma-borellii-umbrella-dwarf-cichlid/'}]},
panduro:{links:[{label:'Shop A. panduro',url:'https://www.petzonesd.com/apistogramma-panduro/'}]},
macmasteri:{links:[{label:'Shop A. macmasteri',url:'https://www.petzonesd.com/apisto-macmasteri/'}]}
};
export const shopUrl=id=>shop[id]?.links[0].url||storeUrl;
// Habitat atlas sections each species profile points to.
export const basins={'upper-amazon':['cacatuoides','agassizii','panduro','nijsseni','baenschi','bitaeniata'],'rio-negro':['elizabethae'],orinoco:['macmasteri','hongsloi'],'southern-waters':['borellii','trifasciata']};
export const basinNames={'upper-amazon':'Upper Amazon','rio-negro':'Rio Negro',orinoco:'Orinoco','southern-waters':'Southern waters'};
export const basinOf=id=>Object.keys(basins).find(k=>basins[k].includes(id));
